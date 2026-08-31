# src/xsd

The official myDATA XSD schemas, one subfolder per version (`v1.0.2/`, `v2.0.0/`, `v2.0.1/`, ...).
Older versions are archived here for reference — never deleted — when AADE ships a new one.

`mappings/*.js` is always compiled from whichever version folder is **currently active** (see the
repo's `CLAUDE.md`); at the time of writing that's `v2.0.1/`.

## Regenerating `mappings/*.js`

The compiler (`node_modules/jsonix/lib/jsonix-schema-compiler-full.jar`) is built on an old
JAXB/xjc toolchain that no longer runs unmodified on Java 11+, because `javax.activation` and
`javax.xml.bind` were removed from the JDK. Put the two missing jars on the classpath and invoke
the compiler's main class directly instead of `java -jar ...`:

```sh
curl -sLo javax.activation-api-1.2.0.jar https://repo1.maven.org/maven2/javax/activation/javax.activation-api/1.2.0/javax.activation-api-1.2.0.jar
curl -sLo jaxb-api-2.3.1.jar https://repo1.maven.org/maven2/javax/xml/bind/jaxb-api/2.3.1/jaxb-api-2.3.1.jar

CP="node_modules/jsonix/lib/jsonix-schema-compiler-full.jar:javax.activation-api-1.2.0.jar:jaxb-api-2.3.1.jar"

java -cp "$CP" org.hisrc.jsonix.JsonixMain -d src/xsd/mappings -p response src/xsd/v2.0.1/response-v2.0.1.xsd
java -cp "$CP" org.hisrc.jsonix.JsonixMain -d src/xsd/mappings -p requestedInvoicesDoc src/xsd/v2.0.1/requestedInvoicesDoc-v2.0.1.xsd
java -cp "$CP" org.hisrc.jsonix.JsonixMain -d src/xsd/mappings -p requestVatInfoResponse src/xsd/v2.0.1/RequestVatInfoResponse-v2.0.1.xsd
java -cp "$CP" org.hisrc.jsonix.JsonixMain -d src/xsd/mappings -p requestE3InfoResponse src/xsd/v2.0.1/RequestE3InfoResponse-v2.0.1.xsd
java -cp "$CP" org.hisrc.jsonix.JsonixMain -d src/xsd/mappings -p getDeliveryNoteStatusResponse src/xsd/v2.0.1/GetDeliveryStatusResponse-v2.0.1.xsd
java -cp "$CP" org.hisrc.jsonix.JsonixMain -d src/xsd/mappings -p generateGroupQRCodeResponse src/xsd/v2.0.1/GenerateGroupQRCodeResponse-v2.0.1.xsd
java -cp "$CP" org.hisrc.jsonix.JsonixMain -d src/xsd/mappings -p requestGroupQRDetailsResponse src/xsd/v2.0.1/RequestGroupQRDetailsResponse-v2.0.1.xsd
```

### Notes

- Each `-p` command's source file resolves its own `xs:include`/`xs:import` `schemaLocation`
  attributes relative to its own directory, so all files belonging to one version must stay
  together in that version's folder (e.g. `requestedInvoicesDoc-v2.0.1.xsd`'s
  `<xs:include schemaLocation="InvoicesDoc-v2.0.1.xsd"/>` only resolves because
  `InvoicesDoc-v2.0.1.xsd` lives right next to it in `v2.0.1/`). Don't move or rename files within
  a version folder independently.
- `requestedInvoicesDoc-v2.0.1.xsd` is the response schema shared by `RequestDocs`,
  `RequestTransmittedDocs`, `RequestMyIncome` and `RequestMyExpenses` (root element
  `RequestedDoc`); it `xs:include`s `InvoicesDoc-v2.0.1.xsd` and `xs:import`s
  `incomeClassification-v2.0.1.xsd` / `expensesClassification-v2.0.1.xsd` /
  `paymentMethods-v2.0.1.xsd`, so those files must stay present in the same folder even though no
  separate mapping is generated from them directly.
- `InvoicesDoc-v2.0.1.xsd`, `RequestVatInfoResponse-v2.0.1.xsd` and `RequestE3InfoResponse-v2.0.1.xsd`
  all declare elements in the invoice namespace; only compile **one** package per schema file per
  the commands above, or the generated modules will collide when required together at runtime.
- The Jsonix unmarshaller lower-cases the first letter of every XML element name (and camelCases
  underscore-separated names, e.g. `V_Class_Category` → `vClassCategory`) when it builds JS
  objects from XML — this is why `src/models/VatInfo.ts` and `src/models/E3Info.ts` use camelCase
  fields even though AADE's XSD spells them in PascalCase/snake_case. Keep that in mind if you
  regenerate a mapping for a schema with PascalCase element names: the JS property names Jsonix
  hands back will differ from what the XSD names suggest.
- Outgoing (`send*`) request bodies are **not** built through Jsonix — they're hand-assembled JS
  objects serialized with `xml-js`'s `js2xml` (see `src/index.ts`), so the `src/models/*.ts` field
  names there must match the XSD's element names exactly, casing included (see e.g.
  `ProvidersSignature`/`ECRToken` on `PaymentMethodDetailType`).

## Upgrading to a new AADE schema version

1. Download the new XSD zip, extract it into a new `src/xsd/vX.Y.Z/` folder. Keep the old version
   folder as-is — never delete or overwrite it.
2. `diff` each new XSD against the previous version's folder to see exactly what changed
   (new/renamed/removed elements, type changes) before touching any TypeScript.
3. Re-run the compiler commands above with `-d src/xsd/mappings` (still the same, flat, output
   dir) and source paths pointing at the new `src/xsd/vX.Y.Z/` folder — this overwrites the
   mappings for the endpoints that changed.
4. Update `src/models/*.ts` to match, `src/index.ts`'s `myDataURLdev`/`myDataURLproduction` if
   AADE changed them, and the version strings in `package.json`'s description, `README.md`,
   `CLAUDE.md`, and this file.
