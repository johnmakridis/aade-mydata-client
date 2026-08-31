# Examples

All examples assume:

```ts
import { AADEmyDataClient } from 'aade-mydata-client';

const myDataClient = new AADEmyDataClient({
    userId: 'YOUR_USER_ID',
    subscriptionKey: 'YOUR_SUBSCRIPTION_KEY',
    livemode: false // true for production API requests
});
```

## Invoices

### `sendInvoices()`

```ts
const response = await myDataClient.sendInvoices([{
    issuer: { vatNumber: '123456789', country: 'GR', branch: 0 },
    counterpart: { vatNumber: '987654321', country: 'GR', branch: 0 },
    invoiceHeader: {
        series: 'A',
        aa: '1',
        issueDate: '2026-01-01',
        invoiceType: '1.1',
        currency: 'EUR'
    },
    invoiceDetails: [{
        lineNumber: 1,
        netValue: 100,
        vatCategory: 1,
        vatAmount: 24
    }],
    paymentMethods: {
        paymentMethodDetails: [{ type: 3, amount: 124 }]
    },
    invoiceSummary: {
        totalNetValue: 100,
        totalVatAmount: 24,
        totalWithheldAmount: 0,
        totalFeesAmount: 0,
        totalStampDutyAmount: 0,
        totalOtherTaxesAmount: 0,
        totalDeductionsAmount: 0,
        totalGrossValue: 124
    }
}]);

console.log(response.invoiceMark, response.invoiceUid, response.qrUrl);
```

### `cancelInvoice()`

```ts
const response = await myDataClient.cancelInvoice(400001234567890);

// or, calling on behalf of a third party (e.g. as their accountant)
const response2 = await myDataClient.cancelInvoice(400001234567890, '123456789');
```

## Reading submitted data

### `requestDocs()`

Documents other users have submitted concerning your account (as recipient).

```ts
const invoices = await myDataClient.requestDocs({ mark: 0 });
```

### `requestTransmittedDocs()`

Documents your own account has submitted.

```ts
const invoices = await myDataClient.requestTransmittedDocs({ mark: 0 });
```

Both accept the same optional filters: `entityVatNumber`, `dateFrom`/`dateTo` (dd/MM/yyyy),
`receiverVatNumber`, `invType`, `maxMark`, `nextPartitionKey`/`nextRowKey` (for paging through
large result sets).

### `requestMyIncome()` / `requestMyExpenses()`

```ts
const income = await myDataClient.requestMyIncome({
    dateFrom: '01/01/2026',
    dateTo: '31/01/2026'
});

const expenses = await myDataClient.requestMyExpenses({
    dateFrom: '01/01/2026',
    dateTo: '31/01/2026'
});
```

### `requestVatInfo()` / `requestE3Info()`

```ts
const { items, continuationToken } = await myDataClient.requestVatInfo({
    dateFrom: '01/01/2026',
    dateTo: '31/01/2026',
    GroupedPerDay: false
});

const { items: e3Items } = await myDataClient.requestE3Info({
    dateFrom: '01/01/2026',
    dateTo: '31/01/2026'
});
```

## Classifications & payment methods

### `sendIncomeClassification()`

```ts
await myDataClient.sendIncomeClassification([{
    invoiceMark: 400001234567890,
    invoicesIncomeClassificationDetails: [{
        lineNumber: 1,
        incomeClassificationDetailData: [
            { classificationType: 'E3_561_003', classificationCategory: 'category1_3', amount: 100 }
        ]
    }]
}]);
```

### `sendExpensesClassification()`

```ts
await myDataClient.sendExpensesClassification([{
    invoiceMark: 400001234567890,
    invoicesExpensesClassificationDetails: [{
        lineNumber: 1,
        expensesClassificationDetailData: [
            { classificationType: 'E3_102_001', classificationCategory: 'category2_1', amount: 100 }
        ]
    }]
}]);
```

### `sendPaymentsMethod()`

```ts
await myDataClient.sendPaymentsMethod([{
    invoiceMark: 400001234567890,
    paymentMethodDetails: [{ type: 7, amount: 124 }] // 7 = POS / e-POS
}]);
```

## Ψηφιακό Δελτίο Αποστολής (digital goods movement / delivery notes)

### `registerTransfer()`

Declares a carrier picking up goods — starts, or hands off, a shipment in transit.

```ts
const { transferMark } = await myDataClient.registerTransfer({
    qrUrl: 'https://mydatapi.aade.gr/myDATA/...', // from the delivery note's qrCodeUrl
    transportDetail: {
        vehicleNumber: 'ΑΒΓ1234',
        transportType: 1, // 1 = Φορτηγό Δημόσιας Χρήσης
        carrierVatNumber: '123456789'
    }
});
```

### `confirmDeliveryOutcome()`

Called by the carrier to report the delivery outcome, or by the recipient to confirm receipt.

```ts
await myDataClient.confirmDeliveryOutcome({
    qrUrl: 'https://mydatapi.aade.gr/myDATA/...',
    outcome: 'FULL' // 'FULL' | 'PARTIAL' | 'NONE'
});
```

### `rejectDeliveryNote()`

Called by the recipient to reject a shipment outright, by `qrUrl` or by `invoiceMark`.

```ts
await myDataClient.rejectDeliveryNote({
    invoiceMark: 400001234567890,
    rejectionReason: 'Damaged in transit'
});
```

### `getDeliveryNoteStatus()`

```ts
const status = await myDataClient.getDeliveryNoteStatus(400001234567890);
console.log(status.status, status.lifecycleHistory);

// or, calling on behalf of a third party
const status2 = await myDataClient.getDeliveryNoteStatus(400001234567890, '123456789');
```

### `generateGroupQRCode()` / `requestGroupQRDetails()`

Group several delivery notes' QR codes into one, to update them all in a single
`registerTransfer` / `confirmDeliveryOutcome` / `rejectDeliveryNote` call.

```ts
const group = await myDataClient.generateGroupQRCode([
    'https://mydatapi.aade.gr/myDATA/...1',
    'https://mydatapi.aade.gr/myDATA/...2'
]);

const details = await myDataClient.requestGroupQRDetails(group.groupQrUrl);
console.log(details.qrUrls, details.qrUrlsCount);
```
