
export class InvoiceHeader {
    public issueDate: Date;
    public invoiceType: '1.1' | '1.2' | '1.3' | '1.4' | '1.5' | '1.6' | '2.1' | '2.2' | '2.3' | '2.4' | '3.1' | '3.2' | '4' | '5.1' | '5.2' | '6.1' | '6.2' | '7.1' | '8.1' | '8.2' | '11.1' | '11.2' | '11.3' | '11.4' | '11.5' | '12' | '13.1' | '13.2' | '13.3' | '13.4' | '13.30' | '13.31' | '14.1' | '14.2' | '14.3' | '14.4' | '14.5' | '14.30' | '14.31' | '15.1' | '16.1' | '17.1' | '17.2' | '17.3' | '17.4' | '17.5' | '17.6';
    public vatPaymentSuspension?: boolean;
    public currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BOV' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLF' | 'CLP' | 'CNY' | 'COP' | 'COU' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EEK' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GWP' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRO' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MXV' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'STD' | 'SVC' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TVD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPD' | 'XPF' | 'YER' | 'ZAR' | 'ZMK' | 'ZWL';
    public exchangeRate?: number;
    public correlatedInvoices?: number[];
    public selfPricing?: boolean;
    public dispatchDate?: Date;
    public dispatchTime?: string; // HH:mm:ss

    public constructor(props?: InvoiceHeader) {

        if (props) {

            this.issueDate = props.issueDate;
            this.invoiceType = props.invoiceType;
            this.vatPaymentSuspension = props.vatPaymentSuspension;
            this.currency = props.currency;
            this.exchangeRate = props.exchangeRate;
            this.correlatedInvoices = props.correlatedInvoices?.map(o => o);
            this.selfPricing = props.selfPricing;
            this.dispatchDate = props.dispatchDate;
            this.dispatchTime = props.dispatchTime;
        }

    }
}
