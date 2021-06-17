
export class ShipType {
    public applicationId: string;
    public applicationDate: Date;
    public shipId: string;

    public constructor(props?: ShipType) {

        if (props) {

            this.applicationId = props.applicationId;
            this.applicationDate = props.applicationDate;
            this.shipId = props.shipId;
        }

    }
}
