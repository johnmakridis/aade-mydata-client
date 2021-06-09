
export class PaymentMethodDetail {
    public amount: number;
    public paymentMethodInfo?: string;

    public constructor(props?: PaymentMethodDetail) {

        if (props) {

            this.amount = props.amount;
            this.paymentMethodInfo = props.paymentMethodInfo;
        }

    }
}
