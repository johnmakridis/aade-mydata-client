# aade-mydata-client

[![npm version](https://img.shields.io/npm/v/aade-mydata-client.svg)](https://www.npmjs.com/package/aade-mydata-client)
[![license](https://img.shields.io/npm/l/aade-mydata-client.svg)](./LICENSE)
[![CI](https://github.com/johnmakridis/aade-mydata-client/actions/workflows/ci.yml/badge.svg)](https://github.com/johnmakridis/aade-mydata-client/actions/workflows/ci.yml)

Node.js Client for AADE myDATA (my Digital Accounting and Tax Application) REST API

## Features

✅ &nbsp;&nbsp;HTTP requests to AADE myDATA REST API through axios <br />
✅ &nbsp;&nbsp;XML to JSON conversion (currently myData API only supports response data in XML. The client parses these data in JSON format.)<br />
✅ &nbsp;&nbsp;JSON to XML conversion (The client parses your JSON data to XML for the request body.)<br />
✅ &nbsp;&nbsp;Javascript/Typescript support<br />
✅ &nbsp;&nbsp;Compatible with myDATA REST API v2.0.1 (2026-03)<br />
✅ &nbsp;&nbsp;Digital Goods Movement / Delivery Notes (Ψηφιακό Δελτίο Αποστολής)<br />

## Breaking changes since 1.x

- `AadeBookInvoiceType.paymentMethods` and `.taxesTotals` are now wrapper objects
  (`{ paymentMethodDetails: [...] }` / `{ taxes: [...] }`) instead of bare arrays, matching the
  actual myDATA XML schema (the old shape produced invalid XML for these two fields).
- The `dev` (non-`livemode`) base URL changed from `https://mydata-dev.azure-api.net` to
  `https://mydataapidev.aade.gr`, per AADE's v2.0.1 documentation.

## References

Official AADE documentation, all under the
[myDATA technical specifications page](https://www.aade.gr/mydata/tehnikes-prodiagrafes-ekdoseis-mydata):

- [REST API for ERP users (v2.0.1)](https://aade.gr/sites/default/files/2026-03/myDATA%20API%20Documentation%20v2.0.1_official_erp.pdf) — the main spec this client implements
- [REST API for the digital goods movement / delivery note (v2.0.1)](https://aade.gr/sites/default/files/2026-03/myDATA%20API%20Documentation_DeliveryNote_v2.0.1_official.pdf)
- [XSD schemas (v2.0.1, zip)](https://aade.gr/sites/default/files/2026-03/v2.0.1%20XSDs.zip) — mirrored under [`src/xsd/v2.0.1`](./src/xsd/v2.0.1) in this repo (older `v1.0.2`/`v2.0.0` schemas are kept alongside for reference)
- [Income/expenses classification combinations (xlsx)](https://aade.gr/sites/default/files/2026-03/syndiasmoi_xaraktirismwn_v2.0.1.xlsx) — which `classificationType`/`classificationCategory` pairs are valid together

## Installation
    npm install -S aade-mydata-client


## Usage

#### TypeScript

   ```ts
import { AADEmyDataClient } from 'aade-mydata-client';

class YourClass {

    public myDataClient: AADEmyDataClient;

    constructor() {

        this.myDataClient = new AADEmyDataClient({
            userId: 'YOUR_USER_ID',
            subscriptionKey: 'YOUR_SUBSCRIPTION_KEY',
            livemode: false // true for production API requests
        });

    }

    // Example call for RequestDocs
    async main(): Promise<void> {

        const invoices = await this.myDataClient.requestDocs({ mark: 0 });
        // this method returns Invoice[] for credentials you defined in the client above

    }

}
```

#### CommonJS
```js
const AADEmyDataClient = require('aade-mydata-client').AADEmyDataClient;

const myDataClient = new AADEmyDataClient({
    userId: 'YOUR_USER_ID',
    subscriptionKey: 'YOUR_SUBSCRIPTION_KEY',
    livemode: false // true for production API requests
});

const main = async () => {

    try {

        const invoices = await myDataClient.requestDocs({ mark: 0 });
        console.log(invoices);

    } catch (error) {

    }

}

main();

```

See [`docs/EXAMPLES.md`](./docs/EXAMPLES.md) for a runnable snippet of every method, including the
classification, VAT/E3 info, and delivery-note calls.

## Methods

#### `sendInvoices()`
Submits one or more invoices, including corrected/amending

#### `sendIncomeClassification()`
Submits one or more income classifications for already-submitted invoices

#### `sendExpensesClassification()`
Submits one or more expenses classifications for already-submitted invoices

#### `sendPaymentsMethod()`
Submits one or more payment methods for already-submitted invoices

#### `requestDocs()`
Returns all documents submitted by other users concerning this account (as recipient)

#### `requestTransmittedDocs()`
Returns all documents submitted by this account

#### `requestMyIncome()` / `requestMyExpenses()`
Returns income / expenses information for a date range

#### `requestVatInfo()` / `requestE3Info()`
Returns detailed VAT / E3 information for a date range

#### `cancelInvoice()`
Method for cancelling an invoice

### Ψηφιακό Δελτίο Αποστολής (digital goods movement / delivery notes)

#### `registerTransfer()`
Declares receipt of goods by a carrier — starts or hands off a shipment in transit

#### `confirmDeliveryOutcome()`
Declares the delivery outcome (by carrier) or confirms receipt (by recipient)

#### `rejectDeliveryNote()`
Declares total rejection of a shipment by the recipient

#### `getDeliveryNoteStatus()`
Returns the current status and full event history of a delivery note

#### `generateGroupQRCode()` / `requestGroupQRDetails()`
Groups multiple delivery notes' QR codes into one, and retrieves the individual QR codes back out of a group

## Author

<table>
	<tr>
		<td align="center"><a href="https://johnmakridis.github.io"><img src="https://avatars.githubusercontent.com/u/19326052?v=4" width="120px;" alt="John Makridis"/>	<br />John Makridis</a>
		</td>
	</tr>
</table>

## Contributors

If you want to contribute to this repository  <a href="https://johnmakridis.github.io">send me a message</a>.
