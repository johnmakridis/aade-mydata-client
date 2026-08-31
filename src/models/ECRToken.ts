// tslint:disable:variable-name  (field names must match AADE's PascalCase wire format)
export class ECRTokenType {
    public SigningAuthor: string;
    public SessionNumber: string;

    public constructor(props?: ECRTokenType) {

        if (props) {

            this.SigningAuthor = props.SigningAuthor;
            this.SessionNumber = props.SessionNumber;
        }

    }
}
// tslint:enable:variable-name
