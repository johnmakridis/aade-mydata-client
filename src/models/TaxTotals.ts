
export class TaxTotals {
    public underlyingValue?: number;
    public id?: number;

    public constructor(props?: TaxTotals) {

        if (props) {

            this.underlyingValue = props.underlyingValue;
            this.id = props.id;
        }

    }
}
