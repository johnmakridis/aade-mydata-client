import { TransportDetailType } from './TransportDetail';
import { PackagingDetailType } from './PackagingDetail';

export type DeliveryOutcomeType = 'FULL' | 'PARTIAL' | 'NONE';

// Λεπτομέρειες Αποτελέσματος Παράδοσης
export class OutcomeDetailsType {
    /** Το αποτέλεσμα της παράδοσης */
    public outcome: DeliveryOutcomeType;

    /** true αν η παράδοση έγινε χωρίς την παρουσία του παραλήπτη */
    public deliveredWithoutRecipient?: boolean;

    /** Παραδοθείσες συσκευασίες */
    public deliveredPackaging?: PackagingDetailType[];

    public constructor(props?: OutcomeDetailsType) {

        if (props) {

            this.outcome = props.outcome;
            this.deliveredWithoutRecipient = props.deliveredWithoutRecipient;
            this.deliveredPackaging = props.deliveredPackaging?.map(o => new PackagingDetailType(o));
        }

    }
}

// Λεπτομέρειες Απόρριψης
export class RejectionDetailsType {
    /** Προαιρετική αιτιολογία απόρριψης */
    public reason?: string;

    public constructor(props?: RejectionDetailsType) {

        if (props)
            this.reason = props.reason;

    }
}

/**
 * Ένα γεγονός του ιστορικού (lifecycle) διακίνησης. Είναι read-only, παρέχεται από
 * το myDATA κατά την ανάκτηση παραστατικού/Δελτίου Αποστολής. Τα πεδία transportDetails,
 * outcomeDetails και rejectionDetails είναι αμοιβαία αποκλειόμενα (choice), ανάλογα με το eventType.
 */
export class DeliveryEventType {
    /** RegisterTransfer, ConfirmOutcome, Rejection */
    public eventType: string;

    /** Η χρονική σήμανση (timestamp) του γεγονότος */
    public eventTimestamp: Date | string;

    /** ΑΦΜ χρήστη που δημιούργησε το συμβάν */
    public actorVat: string;

    /** Μοναδικός Αριθμός Καταχώρησης Συμβάντος */
    public mark?: number;

    /** Στοιχεία μεταφοράς (choice — παρόν μόνο όταν eventType = RegisterTransfer) */
    public transportDetails?: TransportDetailType;

    /** Λεπτομέρειες αποτελέσματος παράδοσης (choice — παρόν μόνο όταν eventType = ConfirmOutcome) */
    public outcomeDetails?: OutcomeDetailsType;

    /** Λεπτομέρειες απόρριψης (choice — παρόν μόνο όταν eventType = Rejection) */
    public rejectionDetails?: RejectionDetailsType;

    public constructor(props?: DeliveryEventType) {

        if (props) {

            this.eventType = props.eventType;
            this.eventTimestamp = props.eventTimestamp;
            this.actorVat = props.actorVat;
            this.mark = props.mark;
            this.transportDetails = (props.transportDetails) ? new TransportDetailType(props.transportDetails) : undefined;
            this.outcomeDetails = (props.outcomeDetails) ? new OutcomeDetailsType(props.outcomeDetails) : undefined;
            this.rejectionDetails = (props.rejectionDetails) ? new RejectionDetailsType(props.rejectionDetails) : undefined;
        }

    }
}
