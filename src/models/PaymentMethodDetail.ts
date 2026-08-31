import { ProviderSignatureType } from './ProviderSignature';
import { ECRTokenType } from './ECRToken';

export class PaymentMethodDetailType {

    /** Τρόπος πληρωμής
         ** 1 = Επαγ. Λογαριασμός Πληρωμών Ημεδαπής
         ** 2 = Επαγ. Λογαριασμός Πληρωμών Αλλοδαπής
         ** 3 = Μετρητά
         ** 4 = Επιταγή
         ** 5 = Επί Πιστώσει
         ** 6 = Web Banking
         ** 7 = POS / e-POS
         ** 8 = IRIS
         */
    public type: number;

    /** Ποσό Πληρωμής
     ** μπορεί να αντιστοιχεί σε ένα τμήμα της συνολικής αξίας του παραστατικού
     */
    public amount: number;

    /** Πληροφορίες
     ** μπορεί να περιέχει επιπλέον πληροφορίες σχετικά με τον συγκεκριμένο τύπο (πχ Αρ. Λογαριασμού Τραπέζης)
     */
    public paymentMethodInfo?: string;

    /** Ποσό Φιλοδωρήματος (μόνο για POS / e-POS) */
    public tipAmount?: number;

    /** Αναγνωριστικό Συναλλαγής */
    public transactionId?: string;

    /** Terminal ID POS */
    public tid?: string;

    /** Ψηφιακή Υπογραφή Παρόχου (υποχρεωτικό για τύπο πληρωμής POS) */
    // tslint:disable-next-line:variable-name
    public ProvidersSignature?: ProviderSignatureType;

    /** Στοιχεία ECR Token */
    // tslint:disable-next-line:variable-name
    public ECRToken?: ECRTokenType;

    public constructor(props?: PaymentMethodDetailType) {

        if (props) {

            this.type = props.type;
            this.amount = props.amount;
            this.paymentMethodInfo = props.paymentMethodInfo;
            this.tipAmount = props.tipAmount;
            this.transactionId = props.transactionId;
            this.tid = props.tid;
            this.ProvidersSignature = (props.ProvidersSignature) ? new ProviderSignatureType(props.ProvidersSignature) : undefined;
            this.ECRToken = (props.ECRToken) ? new ECRTokenType(props.ECRToken) : undefined;
        }

    }
}
