export { AddressType } from './Address';
export { Country } from './Country';
export { CancelledInvoice } from './CancelledInvoice';
export { ExpensesClassificationType } from './ExpensesClassification';
export { IncomeClassificationType } from './IncomeClassification';
export { AadeBookInvoiceType } from './Invoice';
export { InvoiceExpensesClassification } from './InvoiceExpensesClassification';
export { InvoiceHeaderType } from './InvoiceHeader';
export { InvoiceIncomeClassification } from './InvoiceIncomeClassification';
export { InvoiceRowType } from './InvoiceRow';
export { InvoicesExpensesClassificationDetail } from './InvoicesExpensesClassificationDetail';
export { InvoiceSummaryType } from './InvoiceSummary';
export { PartyType } from './PartyType';
export { PaymentMethodDetailType } from './PaymentMethodDetail';
export { ShipType } from './Ship';
export { TaxTotalsType } from './TaxTotals';
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
 * @param {string} nextPartitionKey Παράμετρος για την τμηματική λήψη των αποτελεσμάτων
 * @param {string} nextRowKey Παράμετρος για την τμηματική λήψη των αποτελεσμάτων
 * @interface RequestDocsParams
 */
export interface RequestDocsParams {
    mark: number;
    nextPartitionKey?: string;
    nextRowKey?: string;
}

