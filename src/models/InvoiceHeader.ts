
export class InvoiceHeaderType {

    /** Σειρά παραστατικού */
    public series: string;

    /** ΑΑ παραστατικού */
    public aa: string; // AA

    /** Ημερομηνία έκδοσης παραστατικού */
    public issueDate: Date | string;

    /**
     * Είδος παραστατικού
     ** 1.1 = Τιμολόγιο Πώλησης
     ** 1.2 = Τιμολόγιο Πώλησης / Ενδοκοινοτικές Παραδόσεις
     ** 1.3 = Τιμολόγιο Πώλησης / Παραδόσεις Τρίτων Χωρών
     ** 1.4 = Τιμολόγιο Πώλησης / Πώληση για Λογαριασμό Τρίτων
     ** 1.5 = Τιμολόγιο Πώλησης / Εκκαθάριση Πωλήσεων Τρίτων - Αμοιβή από Πωλήσεις Τρίτων
     ** 1.6 = Τιμολόγιο Πώλησης / Συμπληρωματικό Παραστατικό
     ** 2.1 = Τιμολόγιο Παροχής
     ** 2.2 = Τιμολόγιο Παροχής / Ενδοκοινοτική Παροχή Υπηρεσιών
     ** 2.3 = Τιμολόγιο Παροχής / Παροχή Υπηρεσιών σε λήπτη Τρίτης Χώρας
     ** 2.4 = Τιμολόγιο Παροχής / Συμπληρωματικό Παραστατικό
     ** 3.1 = Τίτλος Κτήσης (μη υπόχρεος Εκδότης)
     ** 3.2 = Τίτλος Κτήσης (άρνηση έκδοσης από υπόχρεο Εκδότη)
     ** 4 =
     ** 5.1 = Πιστωτικό Τιμολόγιο / Συσχετιζόμενο
     ** 5.2 = Πιστωτικό Τιμολόγιο / Μη Συσχετιζόμενο
     ** 6.1 = Στοιχείο Αυτοπαράδοσης
     ** 6.2 = Στοιχείο Ιδιοχρησιμοποίησης
     ** 7.1 = Συμβόλαιο - Έσοδο
     ** 8.1 = Ενοίκια - Έσοδο
     ** 8.2 = Ειδικό Στοιχείο – Απόδειξης Είσπραξης Φόρου Διαμονής
     ** 11.1 = ΑΛΠ
     ** 11.2 = ΑΠΥ
     ** 11.3 = Απλοποιημένο Τιμολόγιο
     ** 11.4 = Πιστωτικό Στοιχ. Λιανικής
     ** 11.5 = Απόδειξη Λιανικής Πώλησης για Λογ/σμό Τρίτων
     ** 12 =
     ** 13.1 = Έξοδα - Αγορές Λιανικών Συναλλαγών ημεδαπής / αλλοδαπής
     ** 13.2 = Παροχή Λιανικών Συναλλαγών ημεδαπής / αλλοδαπής
     ** 13.3 = Κοινόχρηστα
     ** 13.4 = Συνδρομές
     ** 13.30 = Παραστατικά Οντότητας ως Αναγράφονται από την ίδια (Δυναμικό)
     ** 13.31 = Πιστωτικό Στοιχ. Λιανικής ημεδαπής / αλλοδαπής
     ** 14.1 = Τιμολόγιο / Ενδοκοινοτικές Αποκτήσεις
     ** 14.2 = Τιμολόγιο / Αποκτήσεις Τρίτων Χωρών
     ** 14.3 = Τιμολόγιο / Ενδοκοινοτική Λήψη Υπηρεσιών
     ** 14.4 = Τιμολόγιο / Λήψη Υπηρεσιών Τρίτων Χωρών
     ** 14.5 = ΕΦΚΑ και λοιποί Ασφαλιστικοί Οργανισμοί
     ** 14.30 = Παραστατικά Οντότητας ως Αναγράφονται από την ίδια (Δυναμικό)
     ** 14.31 = Πιστωτικό ημεδαπής / αλλοδαπής
     ** 15.1 = Συμβόλαιο - Έξοδο
     ** 16.1 = Ενοίκιο Έξοδο
     ** 17.1 = Μισθοδοσία
     ** 17.2 = Αποσβέσεις
     ** 17.3 = Λοιπές Εγγραφές Τακτοποίησης Εσόδων - Λογιστική Βάση
     ** 17.4 = Λοιπές Εγγραφές Τακτοποίησης Εσόδων - Φορολογική Βάση
     ** 17.5 = Λοιπές Εγγραφές Τακτοποίησης Εξόδων - Λογιστική Βάση
     ** 17.6 = Λοιπές Εγγραφές Τακτοποίησης Εξόδων - Φορολογική Βάση
     *  */
    public invoiceType:
        '1.1' |
        '1.2' |
        '1.3' |
        '1.4' |
        '1.5' |
        '1.6' |
        '2.1' |
        '2.2' |
        '2.3' |
        '2.4' |
        '3.1' |
        '3.2' |
        '4' |
        '5.1' |
        '5.2' |
        '6.1' |
        '6.2' |
        '7.1' |
        '8.1' |
        '8.2' |
        '11.1' |
        '11.2' |
        '11.3' |
        '11.4' |
        '11.5' |
        '12' |
        '13.1' |
        '13.2' |
        '13.3' |
        '13.4' |
        '13.30' |
        '13.31' |
        '14.1' |
        '14.2' |
        '14.3' |
        '14.4' |
        '14.5' |
        '14.30' |
        '14.31' |
        '15.1' |
        '16.1' |
        '17.1' |
        '17.2' |
        '17.3' |
        '17.4' |
        '17.5' |
        '17.6';

    /** Αναστολή Καταβολής ΦΠΑ */
    public vatPaymentSuspension?: boolean;

    /** Νόμισμα */
    public currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BOV' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLF' | 'CLP' | 'CNY' | 'COP' | 'COU' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EEK' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GWP' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRO' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MXV' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'STD' | 'SVC' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TVD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPD' | 'XPF' | 'YER' | 'ZAR' | 'ZMK' | 'ZWL';

    /** Ισοτιμία */
    public exchangeRate?: number;

    /** Συσχετιζόμενα Παραστατικά */
    public correlatedInvoices?: number[];

    /** Ένδειξη Αυτοτιμολόγησης */
    public selfPricing?: boolean;

    /** Ημερομηνία Έναρξης Αποστολής */
    public dispatchDate?: Date;

    /** Ώρα Έναρξης Αποστολής */
    public dispatchTime?: string;

    /** Αριθμός Μεταφορικού Μέσου */
    public vehicleNumber?: string;


    /** Σκοπός Διακίνησης */
    public movePurpose?: number;


    public constructor(props?: InvoiceHeaderType) {

        if (props) {

            this.series = props.series;
            this.aa = props.aa;
            this.issueDate = props.issueDate;
            this.invoiceType = props.invoiceType;
            this.vatPaymentSuspension = props.vatPaymentSuspension;
            this.currency = props.currency;
            this.exchangeRate = props.exchangeRate;
            this.correlatedInvoices = props.correlatedInvoices?.map(o => o);
            this.selfPricing = props.selfPricing;
            this.dispatchDate = props.dispatchDate;
            this.dispatchTime = props.dispatchTime;
            this.vehicleNumber = props.vehicleNumber;
            this.movePurpose = props.movePurpose;

        }

    }
}



