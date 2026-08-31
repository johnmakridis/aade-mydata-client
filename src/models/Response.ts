import { ExpensesClassificationType } from './ExpensesClassification';
import { IncomeClassificationType } from './IncomeClassification';
import { CancelledInvoice } from './CancelledInvoice';
import { AadeBookInvoiceType } from './Invoice';


// Response for queries
export class QueryResponse {
    public continuationToken?: ContinuationToken;
    public invoicesDoc?: AadeBookInvoiceType;
    public cancelledInvoicesDoc?: CancelledInvoice;
    public incomeClassificationsDoc?: IncomeClassificationType;
    public expensesClassificationDoc?: ExpensesClassificationType;

    public constructor(props?: QueryResponse) {

        if (props) {

            this.continuationToken = (props.continuationToken) ? new ContinuationToken(props.continuationToken) : undefined;
            this.invoicesDoc = (props.invoicesDoc) ? new AadeBookInvoiceType(props.invoicesDoc) : undefined;
            this.cancelledInvoicesDoc = (props.cancelledInvoicesDoc) ? new CancelledInvoice(props.cancelledInvoicesDoc) : undefined;
            this.incomeClassificationsDoc = (props.incomeClassificationsDoc) ? new IncomeClassificationType(props.incomeClassificationsDoc) : undefined;
            this.expensesClassificationDoc = (props.expensesClassificationDoc) ? new ExpensesClassificationType(props.expensesClassificationDoc) : undefined;
        }

    }

}

export class ContinuationToken {
    public nextPartitionKey: string;
    public nextRowKey: string;

    public constructor(props?: ContinuationToken) {

        if (props) {

            this.nextPartitionKey = props.nextPartitionKey;
            this.nextRowKey = props.nextRowKey;
        }

    }

}






// Response for submissions
export class SubmissionResponse {

    /** Αριθμός Σειράς Οντότητας εντός του υποβληθέντος xml */
    public index?: number;

    /** Κωδικός Αποτελέσματος */
    public statusCode: 'Success' | 'ValidationError' | 'TechnicalError' | 'XMLSyntaxError';

    /** Αναγνωριστικό Παραστατικού */
    public invoiceUid?: string;

    /** Μοναδικός Αριθμός Καταχώρησης Παραστατικού */
    public invoiceMark?: string;

    /** Μοναδικός Αριθμός Παραλαβής Χαρακτηρισμού */
    public classificationMark?: string;

    /** Συμβολοσειρά Αυθεντικοποίησης */
    public authenticationCode?: string;

    /** Μοναδικός Αριθμός Ακύρωσης */
    public cancellationMark?: string;

    /** Μοναδικός Αριθμός Καταχώρησης Τρόπου Πληρωμής (SendPaymentsMethod) */
    public paymentMethodMark?: string;

    /** Κωδικοποιημένο αλφαριθμητικό για τη δημιουργία QR Code τύπου Url (μόνο για παραστατικά τύπου 1.1 έως 11.5) */
    public qrUrl?: string;

    /** Μοναδικός Αριθμός Καταχώρησης Γεγονότος Μεταφοράς (RegisterTransfer) */
    public transferMark?: number;

    /** Μοναδικός Αριθμός Απόρριψης Διακίνησης (RejectDeliveryNote) */
    public rejectMark?: number;

    /** Μοναδικός Αριθμός Αποτελέσματος Παράδοσης Διακίνησης (ConfirmDeliveryOutcome) */
    public deliveryOutcomeMark?: number;

    /** Λίστα Σφαλμάτων */
    public errors?: SubmissionError[];

    public constructor(props?: SubmissionResponse) {

        if (props) {

            this.index = props.index || null;
            this.statusCode = props.statusCode || null;
            this.invoiceUid = props.invoiceUid || null;
            this.invoiceMark = props.invoiceMark || null;
            this.classificationMark = props.classificationMark || null;
            this.authenticationCode = props.authenticationCode || null;
            this.cancellationMark = props.cancellationMark || null;
            this.paymentMethodMark = props.paymentMethodMark || null;
            this.qrUrl = props.qrUrl || null;
            this.transferMark = props.transferMark || null;
            this.rejectMark = props.rejectMark || null;
            this.deliveryOutcomeMark = props.deliveryOutcomeMark || null;
            this.errors = props.errors || [];

        }

    }

}

export class SubmissionError {
    public message: string;
    public code: number;

    public constructor(props?: SubmissionError) {

        if (props) {

            this.message = props.message;
            this.code = props.code;
        }

    }

}
