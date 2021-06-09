export { Address } from './Address';
export { CancelledInvoice } from './CancelledInvoice';
export { ExpensesClassification } from './ExpensesClassification';
export { IncomeClassification } from './IncomeClassification';
export { Invoice } from './Invoice';
export { InvoiceExpensesClassification } from './InvoiceExpensesClassification';
export { InvoiceHeader } from './InvoiceHeader';
export { InvoiceIncomeClassification } from './InvoiceIncomeClassification';
export { InvoiceRow } from './InvoiceRow';
export { InvoicesExpensesClassificationDetail } from './InvoicesExpensesClassificationDetail';
export { InvoiceSummary } from './InvoiceSummary';
export { PartyType } from './PartyType';
export { PaymentMethodDetail } from './PaymentMethodDetail';
export { Ship } from './Ship';
export { TaxTotals } from './TaxTotals';
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

