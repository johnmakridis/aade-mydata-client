import { TransportDetailType } from './TransportDetail';
import { DeliveryOutcomeType } from './DeliveryEvent';
import { PackagingDetailType } from './PackagingDetail';
import { DeliveryEventType } from './DeliveryEvent';

// Body of RegisterTransfer: παραλαβή αγαθών από μεταφορέα / μεταφόρτωση
export class TransportType {
    /** Αποδεικτικό Λήψης Μεταφόρτωσης. Συμπληρώνεται από την Υπηρεσία */
    public transferMark?: number;

    /** Το url qr του Δελτίου Αποστολής ή του Ομαδικού QR Code */
    public qrUrl: string;

    /** Λεπτομέρειες Μεταφοράς */
    public transportDetail: TransportDetailType;

    public constructor(props?: TransportType) {

        if (props) {

            this.transferMark = props.transferMark;
            this.qrUrl = props.qrUrl;
            this.transportDetail = (props.transportDetail) ? new TransportDetailType(props.transportDetail) : undefined;
        }

    }
}

// Body of ConfirmDeliveryOutcome
export class ConfirmDeliveryOutcomeRequestType {
    /** Το url qr του Δελτίου Αποστολής ή του Ομαδικού QR Code */
    public qrUrl: string;

    /** Το αποτέλεσμα της παράδοσης */
    public outcome: DeliveryOutcomeType;

    /** true αν η παράδοση έγινε χωρίς την παρουσία του παραλήπτη */
    public deliveredWithoutRecipient?: boolean;

    /** Λίστα με τις συσκευασίες και τις ποσότητες που παραδόθηκαν */
    public deliveredPackaging?: PackagingDetailType[];

    public constructor(props?: ConfirmDeliveryOutcomeRequestType) {

        if (props) {

            this.qrUrl = props.qrUrl;
            this.outcome = props.outcome;
            this.deliveredWithoutRecipient = props.deliveredWithoutRecipient;
            this.deliveredPackaging = props.deliveredPackaging?.map(o => new PackagingDetailType(o));
        }

    }
}

/**
 * Body of RejectDeliveryNote. Exactly one of `qrUrl` / `invoiceMark` must be given
 * (choice, since v2.0.1 — v2.0.0 only accepted `qrUrl`).
 */
export class RejectDeliveryNoteRequestType {
    /** Το url qr του Δελτίου Αποστολής ή του Ομαδικού QR Code */
    public qrUrl?: string;

    /** Το ΜΑΡΚ του παραστατικού διακίνησης */
    public invoiceMark?: number;

    /** Περιγραφή του λόγου απόρριψης */
    public rejectionReason?: string;

    public constructor(props?: RejectDeliveryNoteRequestType) {

        if (props) {

            this.qrUrl = props.qrUrl;
            this.invoiceMark = props.invoiceMark;
            this.rejectionReason = props.rejectionReason;
        }

    }
}

// Response of GetDeliveryNoteStatus
export class GetDeliveryNoteStatusResponseType {
    /** Μοναδικός Αριθμός Καταχώρησης (ΜΑΡΚ) του Δελτίου Αποστολής */
    public invoiceMark: string;

    /**
     * Τρέχουσα κατάσταση, ως αριθμητικός κωδικός (βλ. InvoiceHeaderType.invoiceDeliveryStatus
     * για τους κωδικούς: 1=Registered, 2=Cancelled, 3=InTransit, 4=Rejected,
     * 5=DeliveredByCarrier, 7=FailedDelivery, 8=Completed)
     */
    public status: string;

    /** Ημερομηνία και Ώρα Έναρξης/Μεταφόρτωσης Διακίνησης */
    public dispatchTimestamp: Date | string;

    /** Ιστορικό Γεγονότων Διακίνησης */
    public lifecycleHistory?: DeliveryEventType[];

    public constructor(props?: GetDeliveryNoteStatusResponseType) {

        if (props) {

            this.invoiceMark = props.invoiceMark;
            this.status = props.status;
            this.dispatchTimestamp = props.dispatchTimestamp;
            this.lifecycleHistory = props.lifecycleHistory?.map(o => new DeliveryEventType(o));
        }

    }
}

// Body of GenerateGroupQRCode: τουλάχιστον 2 qrUrl προς ομαδοποίηση
export class GenerateGroupQRCodeRequestType {
    /** Λίστα με τα URL των QR code προς ομαδοποίηση (τουλάχιστον 2) */
    public qrUrls: string[];

    public constructor(props?: GenerateGroupQRCodeRequestType) {

        if (props)
            this.qrUrls = props.qrUrls?.map(o => o);

    }
}

// Response of GenerateGroupQRCode
export class GenerateGroupQRCodeResponseType {
    /** Το νέο, ομαδικό URL του QR Code */
    public groupQrUrl: string;

    /** Το πλήθος των Δελτίων Αποστολής που περιλαμβάνονται στην ομάδα */
    public qrUrlsCount: number;

    /** Η ημερομηνία και ώρα λήξης του ομαδικού QR Code */
    public expiresAt: string;

    /** Το αποτέλεσμα της επεξεργασίας */
    public statusCode: string;

    public constructor(props?: GenerateGroupQRCodeResponseType) {

        if (props) {

            this.groupQrUrl = props.groupQrUrl;
            this.qrUrlsCount = props.qrUrlsCount;
            this.expiresAt = props.expiresAt;
            this.statusCode = props.statusCode;
        }

    }
}

// Response of RequestGroupQRDetails
export class RequestGroupQRDetailsResponseType {
    /** Το μοναδικό αναγνωριστικό (ID) του Ομαδικού QR Code */
    public groupId?: string;

    /** Τα επιμέρους QR Codes που περιέχονται στο Ομαδικό QR Code */
    public qrUrls?: string[];

    /** Το πλήθος τους */
    public qrUrlsCount?: number;

    /** ΑΦΜ του δημιουργού της ομάδας */
    public groupQrCreatorVatNumber?: string;

    /** Ημερομηνία δημιουργίας της ομάδας */
    public createdAt?: Date | string;

    /** Ημερομηνία λήξης της ομάδας */
    public expiresAt?: Date | string;

    /** Το αποτέλεσμα της επεξεργασίας */
    public statusCode?: string;

    public message?: string;

    public constructor(props?: RequestGroupQRDetailsResponseType) {

        if (props) {

            this.groupId = props.groupId;
            this.qrUrls = props.qrUrls?.map(o => o);
            this.qrUrlsCount = props.qrUrlsCount;
            this.groupQrCreatorVatNumber = props.groupQrCreatorVatNumber;
            this.createdAt = props.createdAt;
            this.expiresAt = props.expiresAt;
            this.statusCode = props.statusCode;
            this.message = props.message;
        }

    }
}
