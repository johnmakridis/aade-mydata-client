import { AddressType } from './Address';

export type CountryCodeType = 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AN' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BR' | 'BS' | 'BT' | 'BV' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HM' | 'HN' | 'HR' | 'HT' | 'HU' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OC' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'ST' | 'SV' | 'SY' | 'SZ' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';

export class PartyType {


    /** ΑΦΜ */
    public vatNumber: string;

    /** Κωδικός Χώρας */
    public country: CountryCodeType;

    /**
     * Αρ. Εγκατάστασης
     ** Σε περίπτωση που η εγκατάσταση του εκδότη είναι η έδρα ή δεν υφίσταται, το πεδίο branch πρέπει να έχει την τιμή 0
     *  */
    public branch: number;

    /** Επωνυμία */
    public name?: string;

    /** Διεύθυνση */
    public address?: AddressType;

    /** Αριθμός επίσημου εγγράφου (για οντότητες χωρίς ΑΦΜ) */
    public documentIdNo?: string;

    /** Αριθμός Μητρώου Υποκαταστήματος Εφοδιασμού */
    public supplyAccountNo?: string;

    /** Χώρα Έκδοσης Επίσημου Εγγράφου */
    public countryDocumentId?: CountryCodeType;

    public constructor(props?: PartyType) {

        if (props) {

            this.vatNumber = props.vatNumber || null;
            this.country = props.country || null;
            this.branch = props.branch || null;
            this.name = props.name || null;
            this.address = (props.address) ? new AddressType(props.address) : null;
            this.documentIdNo = props.documentIdNo;
            this.supplyAccountNo = props.supplyAccountNo;
            this.countryDocumentId = props.countryDocumentId;

        }

    }
}

