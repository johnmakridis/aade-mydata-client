import { InvoicesIncomeClassificationDetail } from './InvoicesIncomeClassificationDetail';

export class InvoiceIncomeClassification {
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

    /** Λίστα Χαρακτηρισμών Εσόδων ανά γραμμή του παραστατικού */
    public invoicesIncomeClassificationDetails?: InvoicesIncomeClassificationDetail[];

    public constructor(props?: InvoiceIncomeClassification) {

        if (props) {

            this.invoiceMark = props.invoiceMark;
            this.classificationMark = props.classificationMark;
            this.entityVatNumber = props.entityVatNumber;
            this.transactionMode = props.transactionMode;
            this.invoicesIncomeClassificationDetails = props.invoicesIncomeClassificationDetails?.map(o => new InvoicesIncomeClassificationDetail(o));
        }

    }

}
