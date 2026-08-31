# Changelog

## 2.0.0

Updated to the AADE myDATA REST API v2.0.1 schema, and closed out the long-standing TODOs.

### Breaking changes

- `AadeBookInvoiceType.paymentMethods` and `.taxesTotals` are now wrapper objects
  (`{ paymentMethodDetails: [...] }` / `{ taxes: [...] }`) instead of bare arrays. The old
  array shape produced invalid XML for these two fields — this is a bugfix as well as a
  breaking change.
- The `dev` (non-`livemode`) base URL changed from `https://mydata-dev.azure-api.net` to
  `https://mydataapidev.aade.gr`, per AADE's v2.0.1 documentation.
- `InvoiceRowType.invoiceDetail` renamed to `invoiceDetailType`, matching the XSD element name
  (the old name never matched what AADE expected on the wire).

### Added

- `sendIncomeClassification()` and `sendExpensesClassification()` are now fully implemented
  (previously stubs).
- `requestTransmittedDocs()` is now fully implemented (previously a stub).
- New methods: `sendPaymentsMethod()`, `requestMyIncome()`, `requestMyExpenses()`,
  `requestVatInfo()`, `requestE3Info()`.
- Ψηφιακό Δελτίο Αποστολής (digital goods movement / delivery notes): `registerTransfer()`,
  `confirmDeliveryOutcome()`, `rejectDeliveryNote()`, `getDeliveryNoteStatus()`,
  `generateGroupQRCode()`, `requestGroupQRDetails()`.
- New invoice/model fields matching the v2.0.1 schema: `transmissionFailure`, `qrCodeUrl`,
  `downloadingInvoiceUrl`, `packingsDeclarations`, `invoiceDeliveryStatus`, `deliveryLifecycle`,
  and several new invoice types / income-expense classification codes.
- `cancelInvoice()` accepts an optional `entityVatNumber` (for third-party callers).
- `rejectDeliveryNote()` accepts an `invoiceMark` as an alternative to `qrUrl`.
- `src/xsd/` now keeps one subfolder per schema version (`v1.0.2/`, `v2.0.0/`, `v2.0.1/`) instead
  of overwriting the previous version on upgrade — see `docs/XSD.MD`.
- [`docs/EXAMPLES.md`](./EXAMPLES.md): a runnable snippet for every method.

### Fixed

- `AddressType` copied `number` into `street` instead of `street` — the `street` field was
  never actually sent.
- Embedded `expensesClassification` entries inside `invoiceDetails`/`invoiceSummary` were never
  given the required `n2:` XML namespace prefix (only `incomeClassification` was), so they were
  silently malformed on the wire.
- `PaymentMethodDetailType`'s constructor dereferenced an uninitialized field and would throw if
  ever used.
