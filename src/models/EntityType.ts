import { PartyType } from './PartyType';

// Λοιπές συσχετιζόμενες οντότητες παραστατικού (π.χ. μεταφορέας, παραγγελιοδόχος)
export class EntityType {
    /** Τύπος Οντότητας */
    public type: number;

    /** Στοιχεία Οντότητας */
    public entityData: PartyType;

    public constructor(props?: EntityType) {

        if (props) {

            this.type = props.type;
            this.entityData = (props.entityData) ? new PartyType(props.entityData) : undefined;
        }

    }
}
