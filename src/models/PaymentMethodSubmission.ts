import { PaymentMethodDetailType } from './PaymentMethodDetail';

// Body of SendPaymentsMethod: ένας ή περισσότεροι τρόποι πληρωμής για ένα παραστατικό
export class PaymentMethodSubmissionType {
    /** Μοναδικός Αριθμός Καταχώρησης Παραστατικού */
    public invoiceMark: number;

    /** Μοναδικός Αριθμός Καταχώρησης Τρόπου Πληρωμής. Συμπληρώνεται από την υπηρεσία */
    public paymentMethodMark?: number;

    /** ΑΦΜ Οντότητας Αναφοράς (μόνο όταν η μέθοδος καλείται από τρίτο πρόσωπο, π.χ. πάροχος) */
    public entityVatNumber?: string;

    public paymentMethodDetails: PaymentMethodDetailType[];

    public constructor(props?: PaymentMethodSubmissionType) {

        if (props) {

            this.invoiceMark = props.invoiceMark;
            this.paymentMethodMark = props.paymentMethodMark;
            this.entityVatNumber = props.entityVatNumber;
            this.paymentMethodDetails = props.paymentMethodDetails?.map(o => new PaymentMethodDetailType(o));
        }

    }
}
