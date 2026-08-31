export { AddressType } from './Address';
export { Country } from './Country';
export { CancelledInvoice } from './CancelledInvoice';
export { ExpensesClassificationType } from './ExpensesClassification';
export { IncomeClassificationType } from './IncomeClassification';
export { AadeBookInvoiceType, InvoicePaymentMethods, InvoiceTaxesTotals } from './Invoice';
export { InvoiceExpensesClassification } from './InvoiceExpensesClassification';
export { InvoiceHeaderType } from './InvoiceHeader';
export { InvoiceIncomeClassification } from './InvoiceIncomeClassification';
export { InvoiceRowType } from './InvoiceRow';
export { InvoicesExpensesClassificationDetail } from './InvoicesExpensesClassificationDetail';
export { InvoicesIncomeClassificationDetail } from './InvoicesIncomeClassificationDetail';
export { InvoiceSummaryType } from './InvoiceSummary';
export { PartyType, CountryCodeType } from './PartyType';
export { PaymentMethodDetailType } from './PaymentMethodDetail';
export { PaymentMethodSubmissionType } from './PaymentMethodSubmission';
export { ProviderSignatureType } from './ProviderSignature';
export { ECRTokenType } from './ECRToken';
export { ShipType } from './Ship';
export { TaxTotalsType } from './TaxTotals';
export { EntityType } from './EntityType';
export { OtherDeliveryNoteHeaderType } from './OtherDeliveryNoteHeader';
export { PackagingDetailType, PackingsDeclaration } from './PackagingDetail';
export { LocationType, TransportDetailType } from './TransportDetail';
export { DeliveryEventType, DeliveryOutcomeType, OutcomeDetailsType, RejectionDetailsType } from './DeliveryEvent';
export {
    TransportType,
    ConfirmDeliveryOutcomeRequestType,
    RejectDeliveryNoteRequestType,
    GetDeliveryNoteStatusResponseType,
    GenerateGroupQRCodeRequestType,
    GenerateGroupQRCodeResponseType,
    RequestGroupQRDetailsResponseType
} from './DeliveryNoteRequests';
export { InvoiceVatDetailType } from './VatInfo';
export { InvoiceE3DetailType } from './E3Info';
export {
    QueryResponse,
    ContinuationToken,
    SubmissionResponse,
    SubmissionError
} from './Response';
export { AADEmyDataClientConfig } from './AADEmyDataClientConfig';



/**
 *
 * @param {number} mark Μοναδικός αριθμός καταχώρησης
 * @param {string} entityVatNumber ΑΦΜ οντότητας (μόνο όταν η κλήση γίνεται από τρίτο πρόσωπο)
 * @param {string} dateFrom Αρχή χρονικού διαστήματος αναζήτησης για την ημερομηνία έκδοσης (dd/MM/yyyy)
 * @param {string} dateTo Τέλος χρονικού διαστήματος αναζήτησης για την ημερομηνία έκδοσης (dd/MM/yyyy)
 * @param {string} receiverVatNumber ΑΦΜ αντισυμβαλλόμενου
 * @param {number} invType Τύπος παραστατικού
 * @param {number} maxMark Μέγιστος Αριθμός ΜΑΡΚ
 * @param {string} nextPartitionKey Παράμετρος για την τμηματική λήψη των αποτελεσμάτων
 * @param {string} nextRowKey Παράμετρος για την τμηματική λήψη των αποτελεσμάτων
 * @interface RequestDocsParams
 */
export interface RequestDocsParams {
    mark: number;
    entityVatNumber?: string;
    dateFrom?: string;
    dateTo?: string;
    receiverVatNumber?: string;
    invType?: number;
    maxMark?: number;
    nextPartitionKey?: string;
    nextRowKey?: string;
}

/**
 * Παράμετροι για τα RequestMyIncome / RequestMyExpenses
 * @interface RequestMyIncomeExpensesParams
 */
export interface RequestMyIncomeExpensesParams {
    dateFrom: string;
    dateTo: string;
    counterVatNumber?: string;
    entityVatNumber?: string;
    invType?: number;
    nextPartitionKey?: string;
    nextRowKey?: string;
}

/**
 * Παράμετροι για τα RequestVatInfo / RequestE3Info
 * @interface RequestVatE3InfoParams
 */
export interface RequestVatE3InfoParams {
    entityVatNumber?: string;
    dateFrom: string;
    dateTo: string;
    GroupedPerDay?: boolean;
    nextPartitionKey?: string;
    nextRowKey?: string;
}



export { AADEmyDataClient } from '../';
