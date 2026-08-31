import { InvoicesExpensesClassificationDetail } from './InvoicesExpensesClassificationDetail';

export class InvoiceExpensesClassification {
    /** Μοναδικός Αριθμός Καταχώρησης Παραστατικού */
    public invoiceMark: number;

    /** Μοναδικός Αριθμός Καταχώρησης Χαρακτηρισμού. Συμπληρώνεται από την υπηρεσία */
    public classificationMark?: number;

    /** ΑΦΜ Οντότητας Αναφοράς (μόνο όταν η μέθοδος καλείται από τρίτο πρόσωπο) */
    public entityVatNumber?: string;

    /**
     * Είδος Συναλλαγής
     ** 1 = Reject (απόρριψη του παραστατικού λόγω διαφωνίας)
     ** 2 = Deviation (απόκλιση στα ποσά)
     */
    public transactionMode?: 1 | 2;

    /** Λίστα Χαρακτηρισμών Εξόδων ανά γραμμή του παραστατικού */
    public invoicesExpensesClassificationDetails?: InvoicesExpensesClassificationDetail[];

    /** Τρόπος υποβολής χαρακτηρισμού (true = ανά παραστατικό, false/κενό = ανά γραμμή) */
    public postPerInvoice?: boolean;

    public constructor(props?: InvoiceExpensesClassification) {

        if (props) {

            this.invoiceMark = props.invoiceMark;
            this.classificationMark = props.classificationMark;
            this.entityVatNumber = props.entityVatNumber;
            this.transactionMode = props.transactionMode;
            this.invoicesExpensesClassificationDetails = props.invoicesExpensesClassificationDetails?.map(o => new InvoicesExpensesClassificationDetail(o));
            this.postPerInvoice = props.postPerInvoice;
        }

    }

}
