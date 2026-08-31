# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Node.js/TypeScript client for the AADE myDATA REST API v2.0.1 (Greece's "my Digital Accounting and
Tax Application"), including the Ψηφιακό Δελτίο Αποστολής (digital goods movement / delivery notes)
endpoints. It wraps HTTP calls (via axios) and handles the XML<->JSON conversion the myDATA API
requires: requests are serialized to XML (via `xml-js`), responses are XML and get unmarshalled to JS
objects using generated Jsonix mappings. Published to npm as `aade-mydata-client`. See the README's
"References" section for links to AADE's official specs.

## Commands

- `npm run build` — compiles TypeScript to `lib/` (runs `prebuild` to clean `lib/`, then `tsc`, then
  `postbuild` to copy `src/xsd` into `lib/xsd` since the XSD/mapping files are required at runtime, not
  just for types).
- `npm run lint` — runs tslint against `tsconfig.json`. Runs automatically via `prepublishOnly` and
  `preversion`.
- There is no test suite/script in this repo.
- `npm version <major|minor|patch>` triggers `preversion` (lint) → bump → `version` (git add src) →
  `postversion` (git push + push tags). Be aware this pushes automatically.

## Architecture

- `src/index.ts` — the single entry point, exports `AADEmyDataClient`. All API methods
  (`sendInvoices`, `requestDocs`, `cancelInvoice`, the delivery-note methods, etc.) live on this one
  class. Constructor picks the dev or production myDATA base URL from `config.livemode` and builds the
  `aade-user-id` / `Ocp-Apim-Subscription-Key` headers used on every request. Base URLs differ in shape:
  production is `https://mydatapi.aade.gr/myDATA`, dev is `https://mydataapidev.aade.gr` (no `/myDATA`
  path segment).
- `src/models/` — plain TS classes mirroring the myDATA XML schema (Invoice, InvoiceHeader, InvoiceRow,
  PartyType, TaxTotals, Response, the delivery-note types, etc.), re-exported from `src/models/index.ts`.
  Most model classes take an optional `props` object in their constructor and copy fields over — follow
  this pattern when adding new model fields rather than using plain object literals.
- `src/xsd/` — the official myDATA XSD schemas, one subfolder per version (`v1.0.2/`, `v2.0.0/`,
  `v2.0.1/`) — older versions are kept for reference, not deleted, when AADE ships a new one. **The
  currently-active version is `v2.0.1/`**; that's what `src/xsd/mappings/*.js` is compiled from and what
  `src/models/*.ts` mirrors. The whole `src/xsd/` tree (all versions) is copied into `lib/` on build.
  `v2.0.1/` includes both the "REST API for ERP users" schemas and the separate "Ψηφιακό Δελτίο
  Αποστολής" schemas (`RegisterTransfer`, `ConfirmDeliveryOutcome`, `RejectDeliveryNote`,
  `GetDeliveryStatusResponse`, `GenerateGroupQRCode(Response)`, `RequestGroupQRDetailsResponse`,
  `TransportTypes`).
- `src/xsd/mappings/*.js` — Jsonix marshalling mappings generated from the **active** version's XSDs
  only (`src/xsd/v2.0.1/`). These are checked-in generated code (see `src/xsd/README.md` for the exact
  compiler commands, including a Java 11+ classpath workaround, used to regenerate them). Don't
  hand-edit these — regenerate from the XSD instead if the schema changes. When AADE ships a new
  version: copy the new XSDs into a new `src/xsd/vX.Y.Z/` folder (keep the old one), regenerate the
  mappings from the new folder, and update `src/models/*.ts` to match — diff the new XSDs against the
  previous version's folder first to find what actually changed.
- Requests: JSON model objects are converted to XML with `xml-js` (`js2xml`) before being POSTed —
  **not** via Jsonix marshalling, so the field names/casing in `src/models/*.ts` must match the XSD
  element names exactly for outgoing bodies (see `ProvidersSignature`/`ECRToken` on
  `PaymentMethodDetailType`). `setClassificationNamespaces()` in `index.ts` rewrites embedded
  `incomeClassification`/`expensesClassification` keys to the `n1:`/`n2:` namespace prefixes required by
  the schema; a known Jsonix/xml-js quirk causes doubled prefixes (`n1:n1:`, `n2:n2:`) which are
  stripped with a string replace after serialization — keep that in mind if you touch the XML
  serialization path.
- Responses: XML response bodies are unmarshalled with Jsonix via the private `unmarshal()` helper,
  using the mapping matching the endpoint (e.g. `responseMapping` for submit/cancel/delivery-note
  calls via `parseSubmissionResponse()`, `requestedInvoicesDocMapping` for `requestDocs` /
  `requestTransmittedDocs` / `requestMyIncome` / `requestMyExpenses`). **Jsonix lower-cases the first
  letter of every unmarshalled element name** (and camelCases underscore-separated names, e.g.
  `V_Class_Category` → `vClassCategory`) — this is why `src/models/VatInfo.ts` and `E3Info.ts` use
  camelCase fields even though AADE's XSD spells them in PascalCase/snake_case.
- Delivery-note lifecycle: `registerTransfer`, `confirmDeliveryOutcome`, `rejectDeliveryNote`,
  `getDeliveryNoteStatus`, `generateGroupQRCode`, `requestGroupQRDetails`. These send/receive
  unqualified (no XML namespace) XML bodies, unlike the invoice/classification endpoints.

## Notes

- Comments/JSDoc in `src/index.ts` and `src/models/*.ts` for the public API are written in Greek
  (mirroring AADE's own terminology) — keep that convention for new myDATA-domain code.
- `tsconfig.json` targets `es5`/`commonjs` with `strict: true` but `strictNullChecks: false`.
- `AadeBookInvoiceType.paymentMethods` / `.taxesTotals` are wrapper objects
  (`{ paymentMethodDetails: [...] }` / `{ taxes: [...] }`), not bare arrays — matches the actual XML
  schema (a bare array serializes to invalid, unwrapped XML via `xml-js`).
- AADE has fixed a couple of its own XSD typos across versions (e.g. `invoiveDeliveryStatus` →
  `invoiceDeliveryStatus`, a Greek-epsilon `EndToΕndReferenceID` → `EndToEndReferenceID`, both in
  v2.0.1) and renamed a few fields outright (`RegisterTransfer`'s `transportMark` → `transferMark`,
  `GetDeliveryNoteStatus`'s `mark` → `invoiceMark`). Expect more of this kind of churn between versions.
