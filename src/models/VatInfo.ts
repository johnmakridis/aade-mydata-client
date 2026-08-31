
/**
 * Μία εγγραφή της απάντησης RequestVatInfo (ανά τιμολόγιο ή ανά ημέρα, αναλόγως GroupedPerDay).
 * Το XSD ονομάζει τα πεδία σε PascalCase (Mark, Vat301, ...), αλλά ο Jsonix unmarshaller τα
 * μετατρέπει αυτόματα σε camelCase κατά την ανάγνωση (Mark -> mark, Vat301 -> vat301, ...), οπότε
 * τα πεδία εδώ ακολουθούν την πραγματική (camelCase) μορφή που επιστρέφεται.
 */
export class InvoiceVatDetailType {
    public mark?: string;
    public isCancelled?: boolean;
    public issueDate: Date | string;

    public vat301?: number;
    public vat302?: number;
    public vat303?: number;
    public vat304?: number;
    public vat305?: number;
    public vat306?: number;
    public vat310?: number;
    public vat331?: number;
    public vat332?: number;
    public vat333?: number;
    public vat334?: number;
    public vat335?: number;
    public vat336?: number;
    public vat342?: number;
    public vat345?: number;
    public vat348?: number;
    public vat349?: number;
    public vat361?: number;
    public vat362?: number;
    public vat363?: number;
    public vat364?: number;
    public vat365?: number;
    public vat366?: number;
    public vat381?: number;
    public vat382?: number;
    public vat383?: number;
    public vat384?: number;
    public vat385?: number;
    public vat386?: number;
    public vat402?: number;
    public vat407?: number;
    public vat411?: number;
    public vat422?: number;
    public vat423?: number;
    public vatUnclassified361?: number;
    public vatUnclassified381?: number;

    public constructor(props?: InvoiceVatDetailType) {

        // all fields are flat decimals, so a manual field-by-field copy adds no value here
        if (props)
            Object.assign(this, props);

    }
}
