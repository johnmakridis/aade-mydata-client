
export class CancelledInvoice {
    public invoiceMark: number;
    public cancellationMark: number;
    public cancellationDate: Date;

    public constructor(props?: CancelledInvoice) {

        if (props) {

            this.invoiceMark = props.invoiceMark;
            this.cancellationMark = props.cancellationMark;
            this.cancellationDate = props.cancellationDate;
        }

    }

}
