import { InvoiceSummary } from './InvoiceSummary';
import { TaxTotals } from './TaxTotals';
import { PaymentMethodDetail } from './PaymentMethodDetail';
import { InvoiceRow } from './InvoiceRow';
import { InvoiceHeader } from './InvoiceHeader';
import { PartyType } from './PartyType';


// Παραστατικό ΑΑΔΕ
export class Invoice {
    public uid?: string;
    public mark?: number;
    public cancelledByMark?: number;
    public authenticationCode?: string;
    public issuer?: PartyType;
    public counterpart?: PartyType;
    public invoiceHeader: InvoiceHeader;
    public paymentMethods?: PaymentMethodDetail[];
    public invoiceDetails: InvoiceRow[];
    public taxesTotals?: TaxTotals[];
    public invoiceSummary: InvoiceSummary;

    public constructor(props?: Invoice) {


        if (props) {

            this.uid = props.uid;
            this.mark = props.mark;
            this.cancelledByMark = props.cancelledByMark;
            this.authenticationCode = props.authenticationCode;
            this.issuer = (props.issuer) ? new PartyType(props.issuer) : undefined;
            this.counterpart = (props.counterpart) ? new PartyType(props.counterpart) : undefined;
            this.invoiceHeader = (props.invoiceHeader) ? new InvoiceHeader(props.invoiceHeader) : undefined;
            this.paymentMethods = props.paymentMethods?.map(o => new PaymentMethodDetail(o));
            this.invoiceDetails = props.invoiceDetails?.map(o => new InvoiceRow(o));
            this.taxesTotals = props.taxesTotals?.map(o => new TaxTotals(o));
            this.invoiceSummary = (props.invoiceSummary) ? new InvoiceSummary(props.invoiceSummary) : undefined;
        }

    }

}
