import {
    AADEmyDataClientConfig,
    SubmissionResponse,
    AadeBookInvoiceType,
    RequestDocsParams,
    RequestMyIncomeExpensesParams,
    RequestVatE3InfoParams,
    InvoiceIncomeClassification,
    InvoiceExpensesClassification,
    PaymentMethodSubmissionType,
    TransportType,
    ConfirmDeliveryOutcomeRequestType,
    RejectDeliveryNoteRequestType,
    GetDeliveryNoteStatusResponseType,
    GenerateGroupQRCodeResponseType,
    RequestGroupQRDetailsResponseType,
    InvoiceVatDetailType,
    InvoiceE3DetailType,
    ContinuationToken
} from './models';
import axios from 'axios';
import * as xmlJS from 'xml-js';


// tslint:disable:variable-name
const Jsonix = require('jsonix');

const responseMapping = require('./xsd/mappings/response.js').response;
const requestedInvoicesDocMapping = require('./xsd/mappings/requestedInvoicesDoc.js').requestedInvoicesDoc;
const requestVatInfoResponseMapping = require('./xsd/mappings/requestVatInfoResponse.js').requestVatInfoResponse;
const requestE3InfoResponseMapping = require('./xsd/mappings/requestE3InfoResponse.js').requestE3InfoResponse;
const getDeliveryNoteStatusResponseMapping = require('./xsd/mappings/getDeliveryNoteStatusResponse.js').getDeliveryNoteStatusResponse;
const generateGroupQRCodeResponseMapping = require('./xsd/mappings/generateGroupQRCodeResponse.js').generateGroupQRCodeResponse;
const requestGroupQRDetailsResponseMapping = require('./xsd/mappings/requestGroupQRDetailsResponse.js').requestGroupQRDetailsResponse;
// tslint:enable:variable-name

const INCOME_CLASSIFICATION_NAMESPACE = 'https://www.aade.gr/myDATA/incomeClassificaton/v1.0';
const EXPENSES_CLASSIFICATION_NAMESPACE = 'https://www.aade.gr/myDATA/expensesClassificaton/v1.0';
const PAYMENT_METHOD_NAMESPACE = 'https://www.aade.gr/myDATA/paymentMethod/v1.0';

export class AADEmyDataClient {

    private config: AADEmyDataClientConfig;
    private myDataURLdev = 'https://mydataapidev.aade.gr';
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

            invoices = this.setClassificationNamespaces(invoices); // set n1:/n2: for embedded income/expenses classifications


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
                        'xmlns:n1': INCOME_CLASSIFICATION_NAMESPACE,
                        'xmlns:n2': EXPENSES_CLASSIFICATION_NAMESPACE
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

            return this.parseSubmissionResponse(response.data);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Διαδικασία υποβολής χαρακτηρισμών εσόδων, ενός ή περισσότερων, που θα αντιστοιχούν σε ήδη υποβεβλημένα παραστατικά
     *
     * @param {InvoiceIncomeClassification[]} classifications
     * @returns {Promise<SubmissionResponse>}
     * @memberof AADEmyDataClient
     */
    async sendIncomeClassification(classifications: InvoiceIncomeClassification[]): Promise<SubmissionResponse> {

        try {

            const jsonData: xmlJS.ElementCompact = {
                _declaration: {
                    _attributes: {
                        version: '1.0',
                        encoding: 'utf-8',
                    }
                },

                IncomeClassificationsDoc: {

                    _attributes: {
                        'xmlns': INCOME_CLASSIFICATION_NAMESPACE
                    },

                    incomeInvoiceClassification: classifications.map(c => c)
                }
            };

            const xml = xmlJS.js2xml(jsonData, { compact: true, spaces: '\t' });

            const response = await axios.post(`${this.myDataApiUrl}/SendIncomeClassification`, xml, {
                headers: { ...this.requestHeaders }
            });

            return this.parseSubmissionResponse(response.data);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Διαδικασία υποβολής χαρακτηρισμών εξόδων, ενός ή περισσότερων, που θα αντιστοιχούν σε ήδη υποβεβλημένα παραστατικά
     *
     * @param {InvoiceExpensesClassification[]} classifications
     * @returns {Promise<SubmissionResponse>}
     * @memberof AADEmyDataClient
     */
    async sendExpensesClassification(classifications: InvoiceExpensesClassification[]): Promise<SubmissionResponse> {

        try {

            const jsonData: xmlJS.ElementCompact = {
                _declaration: {
                    _attributes: {
                        version: '1.0',
                        encoding: 'utf-8',
                    }
                },

                ExpensesClassificationsDoc: {

                    _attributes: {
                        'xmlns': EXPENSES_CLASSIFICATION_NAMESPACE
                    },

                    expensesInvoiceClassification: classifications.map(c => c)
                }
            };

            const xml = xmlJS.js2xml(jsonData, { compact: true, spaces: '\t' });

            const response = await axios.post(`${this.myDataApiUrl}/SendExpensesClassification`, xml, {
                headers: { ...this.requestHeaders }
            });

            return this.parseSubmissionResponse(response.data);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Διαδικασία υποβολής ενός ή περισσότερων τρόπων πληρωμής, που θα αντιστοιχούν σε ήδη υποβεβλημένα παραστατικά
     *
     * @param {PaymentMethodSubmissionType[]} paymentMethods
     * @returns {Promise<SubmissionResponse>}
     * @memberof AADEmyDataClient
     */
    async sendPaymentsMethod(paymentMethods: PaymentMethodSubmissionType[]): Promise<SubmissionResponse> {

        try {

            const jsonData: xmlJS.ElementCompact = {
                _declaration: {
                    _attributes: {
                        version: '1.0',
                        encoding: 'utf-8',
                    }
                },

                PaymentMethodsDoc: {

                    _attributes: {
                        'xmlns': PAYMENT_METHOD_NAMESPACE
                    },

                    paymentMethods: paymentMethods.map(p => p)
                }
            };

            const xml = xmlJS.js2xml(jsonData, { compact: true, spaces: '\t' });

            const response = await axios.post(`${this.myDataApiUrl}/SendPaymentsMethod`, xml, {
                headers: { ...this.requestHeaders }
            });

            return this.parseSubmissionResponse(response.data);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Η κλήση επιστρέφει όσα παραστατικά, χαρακτηρισμούς και ακυρώσεις παραστατικών έχουν υποβάλλει άλλοι χρήστες και αφορούν ως λήπτη την οντότητα που αντιστοιχεί στο όνομα χρήστη και subscription key, και αναγνωριστικό Μοναδικό Αριθμό Καταχώρησης μεγαλύτερο του mark.
     *
     * @param {RequestDocsParams} params
     * @returns {Promise<AadeBookInvoiceType[]>}
     * @memberof AADEmyDataClient
     */
    async requestDocs(params: RequestDocsParams): Promise<AadeBookInvoiceType[]> {
        return this.requestInvoicesDoc('RequestDocs', params);
    }



    /**
     * Διαδικασία λήψης ενός ή περισσότερων παραστατικών, χαρακτηρισμών, ή ακυρώσεων παραστατικών που έχει υποβάλλει ο χρήστης
     *
     * @param {RequestDocsParams} params
     * @returns {Promise<AadeBookInvoiceType[]>}
     * @memberof AADEmyDataClient
     */
    async requestTransmittedDocs(params: RequestDocsParams): Promise<AadeBookInvoiceType[]> {
        return this.requestInvoicesDoc('RequestTransmittedDocs', params);
    }



    /**
     * Η μέθοδος επιστρέφει πληροφορίες σχετικά με τα έσοδα του χρήστη για ένα συγκεκριμένο χρονικό διάστημα.
     *
     * @param {RequestMyIncomeExpensesParams} params
     * @returns {Promise<AadeBookInvoiceType[]>}
     * @memberof AADEmyDataClient
     */
    async requestMyIncome(params: RequestMyIncomeExpensesParams): Promise<AadeBookInvoiceType[]> {

        try {

            const response = await axios.get(`${this.myDataApiUrl}/RequestMyIncome`, {
                params,
                headers: { ...this.requestHeaders }
            });

            const jsonData = this.unmarshal(requestedInvoicesDocMapping, response.data);

            return Promise.resolve(jsonData?.value?.invoicesDoc?.invoice || []);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Η μέθοδος επιστρέφει πληροφορίες σχετικά με τα έξοδα του χρήστη για ένα συγκεκριμένο χρονικό διάστημα.
     *
     * @param {RequestMyIncomeExpensesParams} params
     * @returns {Promise<AadeBookInvoiceType[]>}
     * @memberof AADEmyDataClient
     */
    async requestMyExpenses(params: RequestMyIncomeExpensesParams): Promise<AadeBookInvoiceType[]> {

        try {

            const response = await axios.get(`${this.myDataApiUrl}/RequestMyExpenses`, {
                params,
                headers: { ...this.requestHeaders }
            });

            const jsonData = this.unmarshal(requestedInvoicesDocMapping, response.data);

            return Promise.resolve(jsonData?.value?.invoicesDoc?.invoice || []);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Λεπτομερείς πληροφορίες για τα στοιχεία ΦΠΑ που συνδέονται με τον ΑΦΜ μιας οντότητας για ένα συγκεκριμένο χρονικό διάστημα.
     *
     * @param {RequestVatE3InfoParams} params
     * @returns {Promise<{ items: InvoiceVatDetailType[]; continuationToken?: ContinuationToken }>}
     * @memberof AADEmyDataClient
     */
    async requestVatInfo(params: RequestVatE3InfoParams): Promise<{ items: InvoiceVatDetailType[]; continuationToken?: ContinuationToken }> {

        try {

            const response = await axios.get(`${this.myDataApiUrl}/RequestVatInfo`, {
                params,
                headers: { ...this.requestHeaders }
            });

            const jsonData = this.unmarshal(requestVatInfoResponseMapping, response.data);
            const value = jsonData?.value;

            return Promise.resolve({
                items: value?.vatInfo || [],
                continuationToken: (value?.continuationToken) ? new ContinuationToken(value.continuationToken) : undefined
            });

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Λεπτομερείς πληροφορίες για τα στοιχεία Ε3 που συνδέονται με τον ΑΦΜ μιας οντότητας για ένα συγκεκριμένο χρονικό διάστημα.
     *
     * @param {RequestVatE3InfoParams} params
     * @returns {Promise<{ items: InvoiceE3DetailType[]; continuationToken?: ContinuationToken }>}
     * @memberof AADEmyDataClient
     */
    async requestE3Info(params: RequestVatE3InfoParams): Promise<{ items: InvoiceE3DetailType[]; continuationToken?: ContinuationToken }> {

        try {

            const response = await axios.get(`${this.myDataApiUrl}/RequestE3Info`, {
                params,
                headers: { ...this.requestHeaders }
            });

            const jsonData = this.unmarshal(requestE3InfoResponseMapping, response.data);
            const value = jsonData?.value;

            return Promise.resolve({
                items: value?.e3Info || [],
                continuationToken: (value?.continuationToken) ? new ContinuationToken(value.continuationToken) : undefined
            });

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Διαδικασία ακύρωσης παραστατικού, δίχως ταυτόχρονη υποβολή νέου
     *
     * @param {(string | number)} mark
     * @param {string} [entityVatNumber] ΑΦΜ οντότητας (μόνο όταν η μέθοδος καλείται από τρίτο πρόσωπο)
     * @returns {Promise<SubmissionResponse>}
     * @memberof AADEmyDataClient
     */
    async cancelInvoice(mark: string | number, entityVatNumber?: string): Promise<SubmissionResponse> {
        try {

            const response = await axios.post(`${this.myDataApiUrl}/CancelInvoice`, {}, {
                params: { mark, entityVatNumber },
                headers: { ...this.requestHeaders },
            });

            return this.parseSubmissionResponse(response.data);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }
    }



    // Ψηφιακό Δελτίο Αποστολής (digital goods movement / delivery notes)


    /**
     * Δήλωση παραλαβής αγαθών από μεταφορέα, δηλαδή έναρξη διακίνησης, ή παραλαβή από προηγούμενο μεταφορέα (μεταφόρτωση).
     * Θέτει το Δελτίο Αποστολής σε κατάσταση InTransit.
     *
     * @param {TransportType} transport
     * @returns {Promise<SubmissionResponse>}
     * @memberof AADEmyDataClient
     */
    async registerTransfer(transport: TransportType): Promise<SubmissionResponse> {

        try {

            const xml = this.buildUnqualifiedXml('Transport', transport);

            const response = await axios.post(`${this.myDataApiUrl}/RegisterTransfer`, xml, {
                headers: { ...this.requestHeaders }
            });

            return this.parseSubmissionResponse(response.data);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Δήλωση αποτελέσματος παράδοσης από μεταφορέα, ή επιβεβαίωση παραλαβής από λήπτη.
     *
     * @param {ConfirmDeliveryOutcomeRequestType} outcome
     * @returns {Promise<SubmissionResponse>}
     * @memberof AADEmyDataClient
     */
    async confirmDeliveryOutcome(outcome: ConfirmDeliveryOutcomeRequestType): Promise<SubmissionResponse> {

        try {

            const xml = this.buildUnqualifiedXml('ConfirmDeliveryOutcomeRequest', outcome);

            const response = await axios.post(`${this.myDataApiUrl}/ConfirmDeliveryOutcome`, xml, {
                headers: { ...this.requestHeaders }
            });

            return this.parseSubmissionResponse(response.data);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Ολική απόρριψη διακίνησης από τον λήπτη. Θέτει το Δελτίο Αποστολής σε τελική κατάσταση Rejected.
     *
     * @param {RejectDeliveryNoteRequestType} rejection
     * @returns {Promise<SubmissionResponse>}
     * @memberof AADEmyDataClient
     */
    async rejectDeliveryNote(rejection: RejectDeliveryNoteRequestType): Promise<SubmissionResponse> {

        try {

            const xml = this.buildUnqualifiedXml('RejectDeliveryNoteRequest', rejection);

            const response = await axios.post(`${this.myDataApiUrl}/RejectDeliveryNote`, xml, {
                headers: { ...this.requestHeaders }
            });

            return this.parseSubmissionResponse(response.data);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Λήψη της τρέχουσας κατάστασης και του πλήρους ιστορικού ενός Δελτίου Αποστολής.
     *
     * @param {(string | number)} mark Ο Μοναδικός Αριθμός Καταχώρησης (ΜΑΡΚ) του Δελτίου Αποστολής
     * @param {string} [issuerVatNumber] Το ΑΦΜ του εκδότη (απαιτείται αν ο καλών δεν είναι ο εκδότης)
     * @returns {Promise<GetDeliveryNoteStatusResponseType>}
     * @memberof AADEmyDataClient
     */
    async getDeliveryNoteStatus(mark: string | number, issuerVatNumber?: string): Promise<GetDeliveryNoteStatusResponseType> {

        try {

            const response = await axios.get(`${this.myDataApiUrl}/GetDeliveryNoteStatus`, {
                params: { mark, issuerVatNumber },
                headers: { ...this.requestHeaders }
            });

            const jsonData = this.unmarshal(getDeliveryNoteStatusResponseMapping, response.data);

            return Promise.resolve(new GetDeliveryNoteStatusResponseType(jsonData?.value));

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Δημιουργία ομαδικού QR Code για πολλαπλά Δελτία Αποστολής (τουλάχιστον 2). Το ομαδικό
     * QR Code μπορεί να χρησιμοποιηθεί στις registerTransfer / confirmDeliveryOutcome /
     * rejectDeliveryNote για την ταυτόχρονη ενημέρωση όλων των ΔΑ της ομάδας.
     *
     * @param {string[]} qrUrls
     * @returns {Promise<GenerateGroupQRCodeResponseType>}
     * @memberof AADEmyDataClient
     */
    async generateGroupQRCode(qrUrls: string[]): Promise<GenerateGroupQRCodeResponseType> {

        try {

            const xml = this.buildUnqualifiedXml('GenerateGroupQRCodeRequest', { qrUrls: { qrUrl: qrUrls } });

            const response = await axios.post(`${this.myDataApiUrl}/GenerateGroupQRCode`, xml, {
                headers: { ...this.requestHeaders }
            });

            const jsonData = this.unmarshal(generateGroupQRCodeResponseMapping, response.data);

            return Promise.resolve(new GenerateGroupQRCodeResponseType(jsonData?.value));

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }



    /**
     * Ανάκτηση των επιμέρους QR Codes που περιέχονται σε ένα Ομαδικό QR Code (Group QR).
     *
     * @param {string} groupId
     * @returns {Promise<RequestGroupQRDetailsResponseType>}
     * @memberof AADEmyDataClient
     */
    async requestGroupQRDetails(groupId: string): Promise<RequestGroupQRDetailsResponseType> {

        try {

            const response = await axios.get(`${this.myDataApiUrl}/RequestGroupQRDetails`, {
                params: { groupId },
                headers: { ...this.requestHeaders }
            });

            const jsonData = this.unmarshal(requestGroupQRDetailsResponseMapping, response.data);
            const value = jsonData?.value;

            return Promise.resolve(new RequestGroupQRDetailsResponseType({
                ...value,
                qrUrls: value?.qrUrls?.qrUrl || []
            }));

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }




    // Utilities

    private async requestInvoicesDoc(endpoint: 'RequestDocs' | 'RequestTransmittedDocs', params: RequestDocsParams): Promise<AadeBookInvoiceType[]> {

        try {

            const response = await axios.get(`${this.myDataApiUrl}/${endpoint}`, {
                params,
                headers: { ...this.requestHeaders }
            });

            const jsonData = this.unmarshal(requestedInvoicesDocMapping, response.data);

            return Promise.resolve(jsonData?.value?.invoicesDoc?.invoice || []);

        } catch (error) {
            return Promise.reject(error?.response?.data || error?.response || error);
        }

    }

    private unmarshal(mapping: any, xml: string): any {

        const context = new Jsonix.Jsonix.Context([mapping]);
        const unmarshaller = context.createUnmarshaller();

        return unmarshaller.unmarshalString(xml);
    }

    private parseSubmissionResponse(xml: string): Promise<SubmissionResponse> {

        const jsonResponse = this.unmarshal(responseMapping, xml);

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
    }

    private buildUnqualifiedXml(rootElementName: string, body: any): string {

        const jsonData: xmlJS.ElementCompact = {
            _declaration: {
                _attributes: {
                    version: '1.0',
                    encoding: 'utf-8',
                }
            },

            [rootElementName]: body
        };

        return xmlJS.js2xml(jsonData, { compact: true, spaces: '\t' });
    }

    /**
     * Οι χαρακτηρισμοί εσόδων/εξόδων που ενσωματώνονται μέσα σε ένα invoiceDetails[]/invoiceSummary
     * παραστατικό πρέπει να είναι qualified στο namespace του icls:/ecls: σχήματός τους (n1:/n2:
     * αντίστοιχα, όπως δηλώνονται στο xmlns:n1/xmlns:n2 του SendInvoices), όχι στο default namespace
     * του inv: InvoicesDoc.
     */
    private setClassificationNamespaces(invoices: AadeBookInvoiceType[]): AadeBookInvoiceType[] {

        const prefixKeys = (items: any[], prefix: string) => {
            for (const item of items)
                // tslint:disable-next-line:forin
                for (const key in item) {
                    item[`${prefix}:${key}`] = item[key];
                    delete item[key];
                }
        };

        for (const invoice of invoices) {

            if (invoice?.invoiceDetails?.length > 0)
                for (const row of invoice.invoiceDetails) {
                    if (row.incomeClassification?.length > 0)
                        prefixKeys(row.incomeClassification, 'n1');
                    if (row.expensesClassification?.length > 0)
                        prefixKeys(row.expensesClassification, 'n2');
                }

            if (invoice?.invoiceSummary?.incomeClassification?.length > 0)
                prefixKeys(invoice.invoiceSummary.incomeClassification, 'n1');
            if (invoice?.invoiceSummary?.expensesClassification?.length > 0)
                prefixKeys(invoice.invoiceSummary.expensesClassification, 'n2');

        }


        return invoices;

    }

}
