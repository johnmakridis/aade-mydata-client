import { AADEmyDataClientConfig, QueryResponse, SubmissionResponse, AadeBookInvoiceType, RequestDocsParams } from './models';
import axios, { AxiosError } from 'axios';
import { join } from 'path';
import * as xmlJS from 'xml-js';


// tslint:disable:variable-name
const Jsonix = require('jsonix');

const requestDocMapping = require('./xsd/mappings/requestDoc.js').requestDoc;
const expensesClassificationMapping = require('./xsd/mappings/expensesClassification.js').expensesClassification;
const incomeClassificationMapping = require('./xsd/mappings/incomeClassification.js').incomeClassification;
const invoicesDocMapping = require('./xsd/mappings/InvoicesDoc.js').InvoicesDoc;
const requestedInvoicesDocMapping = require('./xsd/mappings/requestedInvoicesDoc.js').requestedInvoicesDoc;
const requestedProviderDocMapping = require('./xsd/mappings/RequestedProviderDoc.js').RequestedProviderDoc;
const responseMapping = require('./xsd/mappings/response.js').response;
// tslint:enable:variable-name

export class AADEmyDataClient {

    private config: AADEmyDataClientConfig;
    private myDataURLdev = 'https://mydata-dev.azure-api.net';
    private myDataURLproduction = 'https://mydatapi.aade.gr/myDATA'; // 'https://mydata-prod-apim.azure-api.net/myDATA';

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
     * @param {AadeBookInvoiceType[]} invoices
     * @returns {Promise<SubmissionResponse>}
     * @memberof AADEmyDataClient
     */
    async sendInvoices(invoices: AadeBookInvoiceType[]): Promise<SubmissionResponse> {

        try {

            invoices = this.setIncomeClassificationNameSpace(invoices); // set n1:xxx for IncomeClassification namespace


            const jsonData: xmlJS.ElementCompact = {
                _declaration: {
                    _attributes: {
                        version: '1.0',
                        encoding: 'utf-8',
                    }
                },


                InvoicesDoc: {

                    _attributes: {
                        'xmlns': 'http://www.aade.gr/myDATA/invoice/v1.0',
                        'xmlns:n1': 'https://www.aade.gr/myDATA/incomeClassificaton/v1.0',
                        'xmlns:n2': 'https://www.aade.gr/myDATA/expensesClassificaton/v1.0'
                    },

                    invoice: invoices.map(inv => inv)
                }
            };


            // Convert JSON data to XML
            let xml = xmlJS.js2xml(jsonData, { compact: true, spaces: '\t' });
            xml = xml.split('n1:n1:').join('n1:');
            xml = xml.split('n2:n2:').join('n2:');


            const response = await axios.post(`${this.myDataApiUrl}/SendInvoices`, xml, {
                headers: { ...this.requestHeaders }
            });


            const context = new Jsonix.Jsonix.Context([responseMapping]);
            const unmarshaller = context.createUnmarshaller();

            const jsonResponse = unmarshaller.unmarshalString(response.data);

            let submissionResponse = new SubmissionResponse();

            if (jsonResponse?.value?.response?.length > 0) {

                if (jsonResponse.value.response[0].errors?.error?.length > 0) {
                    jsonResponse.value.response[0].errors = jsonResponse.value.response[0].errors.error;

                    submissionResponse = new SubmissionResponse(jsonResponse.value.response[0]);
                    return Promise.reject(jsonResponse.value.response[0]);
                }

                submissionResponse = new SubmissionResponse(jsonResponse.value.response[0]);
                return Promise.resolve(submissionResponse);
            }

            return Promise.resolve(submissionResponse);

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
    async requestDocs(params: RequestDocsParams): Promise<AadeBookInvoiceType[]> {

        try {

            const response = await axios.get(`${this.myDataApiUrl}/RequestDocs`, {
                params: params,
                headers: { ...this.requestHeaders }
            });


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
        console.log('TODO: sendIncomeClassification()');
        return;
    }



    /**
     * Διαδικασία υποβολής χαρακτηρισμών εξόδων, ενός ή περισσότερων, που θα αντιστοιχούν σε ήδη υποβεβλημένα παραστατικά
     *
     * @returns {void}
     * @memberof AADEmyDataClient
     */
    sendExpensesClassification(): void {
        console.log('TODO: sendExpensesClassification()');
        return;
    }




    /**
     * Διαδικασία ακύρωσης παραστατικού, δίχως ταυτόχρονη υποβολή νέου
     *
     * @param {(string | number)} mark
     * @returns {Promise<SubmissionResponse>}
     * @memberof AADEmyDataClient
     */
    async cancelInvoice(mark: string | number): Promise<SubmissionResponse> {
        try {


            const response = await axios.post(`${this.myDataApiUrl}/CancelInvoice`, {}, {
                params: { mark: mark },
                headers: { ...this.requestHeaders },
            });


            const context = new Jsonix.Jsonix.Context([responseMapping]);
            const unmarshaller = context.createUnmarshaller();

            const jsonResponse = unmarshaller.unmarshalString(response.data);

            let submissionResponse = new SubmissionResponse();

            if (jsonResponse?.value?.response?.length > 0) {

                if (jsonResponse.value.response[0].errors?.error?.length > 0)
                    jsonResponse.value.response[0].errors = jsonResponse.value.response[0].errors.error;

                submissionResponse = new SubmissionResponse(jsonResponse.value.response[0]);
                return Promise.resolve(submissionResponse);
            }


            return Promise.resolve(submissionResponse);


        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }





    // Utilities

    private setIncomeClassificationNameSpace(invoices: AadeBookInvoiceType[]): AadeBookInvoiceType[] {

        for (const invoice of invoices) {

            // tslint:disable:forin
            if (invoice?.invoiceDetails?.length > 0)
                for (const row of invoice.invoiceDetails)
                    Object.keys(row).forEach((key) => {

                        if (key === 'incomeClassification')
                            for (let ic = 0; ic < row[key].length; ic++)
                                for (const icKey in row[key][ic]) {
                                    row[key][ic][`n1:${icKey}`] = row[key][ic][icKey];
                                    delete row[key][ic][icKey];
                                }
                    });



            if (invoice?.invoiceSummary)
                for (const key in invoice.invoiceSummary)
                    if (key === 'incomeClassification')
                        for (let ic = 0; ic < invoice.invoiceSummary[key].length; ic++)
                            for (const icKey in invoice.invoiceSummary[key][ic]) {
                                invoice.invoiceSummary[key][ic][`n1:${icKey}`] = invoice.invoiceSummary[key][ic][icKey];
                                delete invoice.invoiceSummary[key][ic][icKey];
                            }
            // tslint:enable:forin

        }


        return invoices;

    }

}
