
interface PaymentMethodProperties {
    /** Τρόπος πληρωμής
         ** 1 = Επαγ. Λογαριασμός Πληρωμών Ημεδαπής
         ** 2 = Επαγ. Λογαριασμός Πληρωμών Αλλοδαπής
         ** 3 = Μετρητά
         ** 4 = Επιταγή
         ** 5 = Επί Πιστώσει
         */
    type: number;

    /** Ποσό Πληρωμής
     ** μπορεί να αντιστοιχεί σε ένα τμήμα της συνολικής αξίας του παραστατικού
     */
    amount: number;

    /** Πληροφορίες
     ** μπορεί να περιέχει επιπλέον πληροφορίες σχετικά με τον συγκεκριμένο τύπο (πχ Αρ. Λογαριασμού Τραπέζης)
     */
    paymentMethodInfo?: string;


}

export class PaymentMethodDetailType {


    public paymentMethodDetails: PaymentMethodProperties;


    public constructor(props?: PaymentMethodProperties) {

        if (props) {
            this.paymentMethodDetails.type = props.type;
            this.paymentMethodDetails.amount = props.amount;
            this.paymentMethodDetails.paymentMethodInfo = props.paymentMethodInfo;
        }

    }
}
