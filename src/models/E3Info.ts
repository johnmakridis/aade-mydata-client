
/**
 * Μία εγγραφή της απάντησης RequestE3Info (ανά τιμολόγιο ή ανά ημέρα, αναλόγως GroupedPerDay).
 * Το XSD ονομάζει τα πεδία V_Afm, V_Mark, V_Class_Category, ... αλλά ο Jsonix unmarshaller τα
 * μετατρέπει αυτόματα σε camelCase κατά την ανάγνωση (V_Afm -> vAfm, V_Class_Category ->
 * vClassCategory, ...), οπότε τα πεδία εδώ ακολουθούν την πραγματική μορφή που επιστρέφεται.
 */
export class InvoiceE3DetailType {
    public vAfm?: string;
    public vMark?: string;
    public vBook?: string;
    public isCancelled?: boolean;
    public issueDate: Date | string;
    public vClassCategory?: string;
    public vClassType?: string;
    public vClassValue?: number;

    public constructor(props?: InvoiceE3DetailType) {

        if (props) {

            this.vAfm = props.vAfm;
            this.vMark = props.vMark;
            this.vBook = props.vBook;
            this.isCancelled = props.isCancelled;
            this.issueDate = props.issueDate;
            this.vClassCategory = props.vClassCategory;
            this.vClassType = props.vClassType;
            this.vClassValue = props.vClassValue;
        }

    }
}
