
export class Address {
    public number?: string;
    public postalCode: string;

    public constructor(props?: Address) {

        if (props) {
            this.number = props.number;
            this.postalCode = props.postalCode;
        }

    }
}
