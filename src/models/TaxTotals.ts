
export class TaxTotalsType {
    public underlyingValue?: number;
    public id?: number;

    public constructor(props?: TaxTotalsType) {

        if (props) {

            this.underlyingValue = props.underlyingValue;
            this.id = props.id;
        }

    }
}
