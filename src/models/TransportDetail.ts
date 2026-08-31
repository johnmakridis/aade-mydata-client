
// Τοποθεσία Μεταφόρτωσης
export class LocationType {
    /** Γεωγραφικό Μήκος */
    public longitude: number;

    /** Γεωγραφικό Πλάτος */
    public latitude: number;

    public constructor(props?: LocationType) {

        if (props) {

            this.longitude = props.longitude;
            this.latitude = props.latitude;
        }

    }
}

// Λεπτομέρειες Μεταφοράς
export class TransportDetailType {
    /**
     * Αριθμός Μεταφορικού Μέσου (Αριθμός κυκλοφορίας / Όνομα πλωτού μέσου /
     * Κωδικός Δρομολογίου ή πτήσης / Διακίνηση άνευ Μεταφορικού Μέσου)
     */
    public vehicleNumber: string;

    /**
     * Είδος Μεταφορικού Μέσου
     ** 1 = Φορτηγό Δημόσιας Χρήσης
     ** 2 = Φορτηγό Ιδιωτικής Χρήσης
     ** 3 = Πλοίο
     ** 4 = Τρένο
     ** 5 = Αεροπλάνο
     ** 6 = Λοιπά Μεταφορικά Μέσα (π.χ. Δίκυκλα)
     ** 7 = Άνευ
     */
    public transportType: 1 | 2 | 3 | 4 | 5 | 6 | 7;

    /** Χρονοσφραγίδα */
    public timeStamp?: Date | string;

    /** ΑΦΜ Μεταφορικής Εταιρείας */
    public carrierVatNumber: string;

    /** Αριθμός κυκλοφορίας "Ρ" (επικαθήμενου/ρυμουλκούμενου οχήματος) */
    public pNumber?: string;

    /** Τοποθεσία Μεταφόρτωσης */
    public location?: LocationType;

    public constructor(props?: TransportDetailType) {

        if (props) {

            this.vehicleNumber = props.vehicleNumber;
            this.transportType = props.transportType;
            this.timeStamp = props.timeStamp;
            this.carrierVatNumber = props.carrierVatNumber;
            this.pNumber = props.pNumber;
            this.location = (props.location) ? new LocationType(props.location) : undefined;
        }

    }
}
