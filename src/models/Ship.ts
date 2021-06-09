
export class Ship {
    public applicationId: string;
    public applicationDate: Date;
    public shipId: string;

    public constructor(props?: Ship) {

        if (props) {

            this.applicationId = props.applicationId;
            this.applicationDate = props.applicationDate;
            this.shipId = props.shipId;
        }

    }
}
