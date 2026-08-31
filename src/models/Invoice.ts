import { InvoiceSummaryType } from './InvoiceSummary';
import { TaxTotalsType } from './TaxTotals';
import { PaymentMethodDetailType } from './PaymentMethodDetail';
import { InvoiceRowType } from './InvoiceRow';
import { InvoiceHeaderType } from './InvoiceHeader';
import { PartyType } from './PartyType';
import { PackingsDeclaration } from './PackagingDetail';
import { DeliveryEventType } from './DeliveryEvent';

// Πληρωμές: wrapper element γύρω από τη λίστα PaymentMethodDetailType
export class InvoicePaymentMethods {
    /** Στοιχεία Πληρωμών */
    public paymentMethodDetails: PaymentMethodDetailType[];

    public constructor(props?: InvoicePaymentMethods) {

        if (props)
            this.paymentMethodDetails = props.paymentMethodDetails?.map(o => new PaymentMethodDetailType(o));

    }
}

// Σύνολα Φόρων: wrapper element γύρω από τη λίστα TaxTotalsType
export class InvoiceTaxesTotals {
    /** Σύνολα Φόρων εκτός ΦΠΑ που αφορούν όλο το παραστατικό */
    public taxes: TaxTotalsType[];

    public constructor(props?: InvoiceTaxesTotals) {

        if (props)
            this.taxes = props.taxes?.map(o => new TaxTotalsType(o));

    }
}

// Παραστατικό ΑΑΔΕ
export class AadeBookInvoiceType {
    /** Αναγνωριστικό Παραστατικού. Μήκος = 40. Συμπληρώνεται από την Υπηρεσία */
    public uid?: string;

    /** Μοναδικός Αριθμός Καταχώρησης Παραστατικού. Συμπληρώνεται από την Υπηρεσία */
    public mark?: number;

    /** Μοναδικός Αριθμός Καταχώρησης Ακυρωτικού. Συμπληρώνεται μόνο εφόσον το παραστατικό έχει ακυρωθεί */
    public cancelledByMark?: number;

    /**
     * Συμβολοσειρά Αυθεντικοποίησης. Συμπληρώνεται από την Υπηρεσία για την περίπτωση
     * που η αποστολή γίνεται μέσω Παρόχου Ηλεκτρονικής Τιμολόγησης
     */
    public authenticationCode?: string;

    /**
     * Αδυναμία Επικοινωνίας Παρόχου ή Αδυναμία διαβίβασης ERP ή διαβίβαση μέσω Παρόχου
     ** 1 = Αδυναμία επικοινωνίας οντότητας με τον πάροχο κατά την έκδοση/διαβίβαση
     ** 2 = Αδυναμία επικοινωνίας του παρόχου με το myDATA κατά τη διαβίβαση
     ** 3 = Απώλεια διασύνδεσης (μόνο για αποστολή από ERP)
     ** 4 = Οντότητες παρόχων ηλεκτρικής ενέργειας/φυσικού αερίου (περ. γ' παρ. 2 αρ. 5 ν. 1138/2020) — μόνο για αποστολή από παρόχους
     */
    public transmissionFailure?: 1 | 2 | 3 | 4;

    /** Εκδότης Παραστατικού */
    public issuer?: PartyType;

    /** Λήπτης Παραστατικού */
    public counterpart?: PartyType;

    /** Επικεφαλίδα Παραστατικού */
    public invoiceHeader: InvoiceHeaderType;

    /** Πληρωμές */
    public paymentMethods?: InvoicePaymentMethods;

    /** Γραμμές Παραστατικού */
    public invoiceDetails: InvoiceRowType[];

    /** Σύνολα Φόρων */
    public taxesTotals?: InvoiceTaxesTotals;

    /** Συγκεντρωτικά Στοιχεία Παραστατικού */
    public invoiceSummary: InvoiceSummaryType;

    /** Κωδικοποιημένο αλφαριθμητικό για τη δημιουργία QR Code. Συμπληρώνεται από την Υπηρεσία */
    public qrCodeUrl?: string;

    /**
     * Url με το οποίο ο λήπτης του παραστατικού θα μπορεί να το λαμβάνει.
     * Έγκυρο μόνο στην περίπτωση διαβίβασης μέσω καναλιού παρόχου.
     */
    public downloadingInvoiceUrl?: string;

    /** Δηλώσεις Συσκευασιών (έγκυρο μόνο για παραστατικά διακίνησης) */
    public packingsDeclarations?: PackingsDeclaration[];

    /**
     * Κατάσταση (Status) Παραστατικού Δελτίου Διακίνησης. Είναι read-only, παρέχεται από
     * το myDATA κατά την ανάκτηση.
     ** 1 = Registered
     ** 2 = Cancelled
     ** 3 = InTransit
     ** 4 = Rejected
     ** 5 = DeliveredByCarrier
     ** 7 = FailedDelivery
     ** 8 = Completed
     */
    public invoiceDeliveryStatus?: 1 | 2 | 3 | 4 | 5 | 7 | 8;

    /**
     * Το σύνολο των γεγονότων του κύκλου ζωής (lifecycle) του παραστατικού διακίνησης.
     * Είναι read-only, παρέχεται από το myDATA κατά την ανάκτηση.
     */
    public deliveryLifecycle?: { deliveryEvents: DeliveryEventType[] };

    public constructor(props?: AadeBookInvoiceType) {


        if (props) {

            this.uid = props.uid;
            this.mark = props.mark;
            this.cancelledByMark = props.cancelledByMark;
            this.authenticationCode = props.authenticationCode;
            this.transmissionFailure = props.transmissionFailure;
            this.issuer = (props.issuer) ? new PartyType(props.issuer) : undefined;
            this.counterpart = (props.counterpart) ? new PartyType(props.counterpart) : undefined;
            this.invoiceHeader = (props.invoiceHeader) ? new InvoiceHeaderType(props.invoiceHeader) : undefined;
            this.paymentMethods = (props.paymentMethods) ? new InvoicePaymentMethods(props.paymentMethods) : undefined;
            this.invoiceDetails = props.invoiceDetails?.map(o => new InvoiceRowType(o));
            this.taxesTotals = (props.taxesTotals) ? new InvoiceTaxesTotals(props.taxesTotals) : undefined;
            this.invoiceSummary = (props.invoiceSummary) ? new InvoiceSummaryType(props.invoiceSummary) : undefined;
            this.qrCodeUrl = props.qrCodeUrl;
            this.downloadingInvoiceUrl = props.downloadingInvoiceUrl;
            this.packingsDeclarations = props.packingsDeclarations?.map(o => new PackingsDeclaration(o));
            this.invoiceDeliveryStatus = props.invoiceDeliveryStatus;
            this.deliveryLifecycle = props.deliveryLifecycle ? { deliveryEvents: props.deliveryLifecycle.deliveryEvents?.map(o => new DeliveryEventType(o)) } : undefined;
        }

    }

}
