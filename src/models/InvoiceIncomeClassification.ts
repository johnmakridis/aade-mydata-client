
export class InvoiceIncomeClassification {
    public invoiceMark: number;
    public classificationMark?: number;
    public entityVatNumber?: string;

    public constructor(props?: InvoiceIncomeClassification) {

        if (props) {

            this.invoiceMark = props.invoiceMark;
            this.classificationMark = props.classificationMark;
            this.entityVatNumber = props.entityVatNumber;
        }

    }

}
