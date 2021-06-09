# aade-mydata-rest-client
Node.js Client for AADE myDATA REST API

## Features

✅ HTTP requests to AADE myDATA REST API <br />
✅ XML to JSON conversion (currently their API only supports XML data in responses)<br />
✅ Javascript/Typescript support<br />
✅ Compatible with myDATA REST API v1.0.2<br />

## Installation
    npm install -S aade-mydata-rest-client


## Usage
   ```ts
import { AADEmyDataClient } from 'aade-mydata-rest-client';

class YourClass {

    public myDataClient: AADEmyDataClient;

    constructor() {

        this.myDataClient = new AADEmyDataClient({
            userId: 'YOUR_USER_ID',
            subscriptionKey: 'YOUR_SUBSCRIPTION_KEY'
        });

    }

    // Example call for RequestDocs
    async main(): Promise<void> {

        const invoices = await this.myDataClient.requestDocs({ mark: 0 });
        // this method returns Invoice[] for credentials you defined in the client above

    }

}
```


## Methods

#### `sendInvoices()` 
Submits one or more invoices, including corrected/amending

#### `requestDocs()`
Returns all documents submitted for the corresponding AADE account.

#### `requestTransmittedDocs()`
Request transmitted documents

#### `sendIncomeClassification()`
Submits invoice for income

#### `sendExpensesClassification()`
Submit invoice for expenses

#### `cancelInvoice()`
Method for cancelling a invoice

## Author

<table>
	<tr>
		<td align="center"><a href="https://johnmakridis.github.io"><img src="https://avatars.githubusercontent.com/u/19326052?v=4" width="120px;" alt="John Makridis"/>	<br />John Makridis</a>
		</td>
	</tr>
</table>

## Contributors

If you want to contribute to this repository  <a href="https://johnmakridis.github.io">send me a message</a>.
