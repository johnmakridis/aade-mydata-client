
export class AddressType {

    /** Οδός */
    public street?: string;

    /** Αριθμός */
    public number?: string;

    /**  Ταχυδρομικός Κώδικας */
    public postalCode: string;

    /** Χώρα */
    public city: string;

    public constructor(props?: AddressType) {

        if (props) {
            this.street = props.street;
            this.number = props.number;
            this.postalCode = props.postalCode;
            this.city = props.city;
        }

    }
}
