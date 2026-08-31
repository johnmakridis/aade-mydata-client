import { AddressType } from './Address';

// Λοιπά Γενικά Στοιχεία Διακίνησης
export class OtherDeliveryNoteHeaderType {
    /** Διεύθυνση Φόρτωσης */
    public loadingAddress: AddressType;

    /** Διεύθυνση Παράδοσης */
    public deliveryAddress: AddressType;

    /** Αρ. Εγκατάστασης Έναρξης Διακίνησης */
    public startShippingBranch?: number;

    /** Αρ. Εγκατάστασης Ολοκλήρωσης Διακίνησης */
    public completeShippingBranch?: number;

    public constructor(props?: OtherDeliveryNoteHeaderType) {

        if (props) {

            this.loadingAddress = (props.loadingAddress) ? new AddressType(props.loadingAddress) : undefined;
            this.deliveryAddress = (props.deliveryAddress) ? new AddressType(props.deliveryAddress) : undefined;
            this.startShippingBranch = props.startShippingBranch;
            this.completeShippingBranch = props.completeShippingBranch;
        }

    }
}
