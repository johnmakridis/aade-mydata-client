
export class TaxTotalsType {
    /** Κατηγορία Φόρου */
    public taxType: number;

    /** Κατηγορία Συντελεστή Φόρου */
    public taxCategory?: number;

    public underlyingValue?: number;

    /** Ποσό Φόρου */
    public taxAmount: number;

    public id?: number;

    public constructor(props?: TaxTotalsType) {

        if (props) {

            this.taxType = props.taxType;
            this.taxCategory = props.taxCategory;
            this.underlyingValue = props.underlyingValue;
            this.taxAmount = props.taxAmount;
            this.id = props.id;
        }

    }
}
