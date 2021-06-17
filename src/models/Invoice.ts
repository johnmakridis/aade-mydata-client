import { InvoiceSummaryType } from './InvoiceSummary';
import { TaxTotalsType } from './TaxTotals';
import { PaymentMethodDetailType } from './PaymentMethodDetail';
import { InvoiceRowType } from './InvoiceRow';
import { InvoiceHeaderType } from './InvoiceHeader';
import { PartyType } from './PartyType';


// Παραστατικό ΑΑΔΕ
export class AadeBookInvoiceType {
    public uid?: string;
    public mark?: number;
    public cancelledByMark?: number;
    public authenticationCode?: string;
    public issuer?: PartyType;
    public counterpart?: PartyType;
    public invoiceHeader: InvoiceHeaderType;
    public paymentMethods?: any[]; // PaymentMethodDetailType[];
    public invoiceDetails: InvoiceRowType[];
    public taxesTotals?: TaxTotalsType[];
    public invoiceSummary: InvoiceSummaryType;

    public constructor(props?: AadeBookInvoiceType) {


        if (props) {

            this.uid = props.uid;
            this.mark = props.mark;
            this.cancelledByMark = props.cancelledByMark;
            this.authenticationCode = props.authenticationCode;
            this.issuer = (props.issuer) ? new PartyType(props.issuer) : undefined;
            this.counterpart = (props.counterpart) ? new PartyType(props.counterpart) : undefined;
            this.invoiceHeader = (props.invoiceHeader) ? new InvoiceHeaderType(props.invoiceHeader) : undefined;
            this.paymentMethods = props.paymentMethods?.map(o => new PaymentMethodDetailType(o));
            this.invoiceDetails = props.invoiceDetails?.map(o => new InvoiceRowType(o));
            this.taxesTotals = props.taxesTotals?.map(o => new TaxTotalsType(o));
            this.invoiceSummary = (props.invoiceSummary) ? new InvoiceSummaryType(props.invoiceSummary) : undefined;
        }

    }

}
