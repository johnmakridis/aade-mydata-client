import { AADEmyDataClientConfig, QueryResponse, Invoice, RequestDocsParams } from './models';
import axios, { AxiosError } from 'axios';
import { join } from 'path';
import * as xsdSchemaValidator from 'xsd-schema-validator';


// tslint:disable:variable-name
const Jsonix = require('jsonix');

const requestDocMapping = require('./xsd/mappings/requestDoc.js').requestDoc;
const expensesClassificationMapping = require('./xsd/mappings/expensesClassification.js').expensesClassification;
const incomeClassificationMapping = require('./xsd/mappings/incomeClassification.js').incomeClassification;
const InvoicesDocMapping = require('./xsd/mappings/InvoicesDoc.js').InvoicesDoc;
const requestedInvoicesDocMapping = require('./xsd/mappings/requestedInvoicesDoc.js').requestedInvoicesDoc;
const RequestedProviderDocMapping = require('./xsd/mappings/RequestedProviderDoc.js').RequestedProviderDoc;
const responseMapping = require('./xsd/mappings/response.js').response;
// tslint:enable:variable-name

export class AADEmyDataClient {

    private config: AADEmyDataClientConfig;
    private myDataURLdev = 'https://mydata-dev.azure-api.net';
    private myDataURLproduction = 'https://mydata-prod-apim.azure-api.net/myDATA';

    private myDataApiUrl: string = null; // for API calls

    private requestHeaders: { [key: string]: any; };

    constructor(config: AADEmyDataClientConfig) {

        this.config = config;
        this.myDataApiUrl = this.config.livemode ? this.myDataURLproduction : this.myDataURLdev;

        this.requestHeaders = {
            'aade-user-id': this.config.userId,
            'Ocp-Apim-Subscription-Key': this.config.subscriptionKey,
            'Content-Type': 'text/xml'
        };

    }



    /**
     * Διαδικασία υποβολής ενός ή περισσότερων παραστατικών, συμπεριλαμβανομένων και διορθωμένων/τροποποιητικών
     *
     * @returns {void}
     * @memberof AADEmyDataClient
     */
    async sendInvoices(): Promise<void> {

        try {

            console.log('requestDocs');
            return;

        } catch (error) {
            return Promise.reject(error);
        }

    }



    /**
     * Η κλήση επιστρέφει όσα παραστατικά, χαρακτηρισμούς και ακυρώσεις παραστατικών έχουν υποβάλλει άλλοι χρήστες και αφορούν ως λήπτη την οντότητα που αντιστοιχεί στο όνομα χρήστη και subscription key, και αναγνωριστικό Μοναδικό Αριθμό Καταχώρησης μεγαλύτερο του mark.
     *
     * @param {RequestDocsParams} params
     * @returns {Promise<Invoice[]>}
     * @memberof AADEmyDataClient
     */
    async requestDocs(params: RequestDocsParams): Promise<Invoice[]> {

        try {

            const response = await axios.get(`${this.myDataApiUrl}/RequestDocs`, {
                params: params,
                headers: { ...this.requestHeaders }
            });



            const schemaValidateResponse = await this.validateXMLschema(response.data, join(__dirname, '/xsd/requestDoc-v1.0.2.xsd'));
            if (!schemaValidateResponse.valid)
                return Promise.reject({ message: `XSD Schema validation failed. Result is not valid.` });



            const context = new Jsonix.Jsonix.Context([requestDocMapping]);
            const unmarshaller = context.createUnmarshaller();

            const jsonData = unmarshaller.unmarshalString(response.data);


            if (jsonData?.value?.invoicesDoc?.invoice?.length > 0)
                return Promise.resolve(jsonData.value.invoicesDoc.invoice);


            return Promise.resolve([]);


        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Διαδικασία λήψης ενός ή περισσότερων παραστατικών, χαρακτηρισμών, ή ακυρώσεων παραστατικών που έχει υποβάλλει ο χρήστης
     *
     * @returns {void}
     * @memberof AADEmyDataClient
     */
    requestTransmittedDocs(): void {
        console.log('requestTransmittedDocs');
        return;
    }



    /**
     * Διαδικασία υποβολής χαρακτηρισμών εσόδων, ενός ή περισσότερων, που θα αντιστοιχούν σε ήδη υποβεβλημένα παραστατικά
     *
     * @returns {void}
     * @memberof AADEmyDataClient
     */
    sendIncomeClassification(): void {
        console.log('sendIncomeClassification');
        return;
    }



    /**
     * Διαδικασία υποβολής χαρακτηρισμών εξόδων, ενός ή περισσότερων, που θα αντιστοιχούν σε ήδη υποβεβλημένα παραστατικά
     *
     * @returns {void}
     * @memberof AADEmyDataClient
     */
    sendExpensesClassification(): void {
        console.log('sendExpensesClassification');
        return;
    }



    /**
     * Διαδικασία ακύρωσης παραστατικού, δίχως ταυτόχρονη υποβολή νέου
     *
     * @returns {void}
     * @memberof AADEmyDataClient
     */
    cancelInvoice(): void {
        console.log('cancelInvoice');
        return;
    }





    // Utilities
    async validateXMLschema(xmlString: string, xsdPath: string): Promise<{ valid: boolean, result: string, messages: any[] }> {

        return new Promise((resolve, reject) => {

            try {

                xsdSchemaValidator.validateXML(xmlString, xsdPath, (error: any, result: any) => {
                    if (error)
                        return reject(error);

                    return resolve(result);

                });

            } catch (error) {
                return reject(error);
            }

        });

    }

}
