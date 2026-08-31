// tslint:disable:variable-name  (field names must match AADE's PascalCase wire format)
export class ProviderSignatureType {
    public SigningAuthor: string;
    public Signature: string;

    /**
     * AADE's v2.0.0 XSD spelled this field with a Greek capital epsilon (Ε, U+0395) instead
     * of a Latin "E" (EndToΕndReferenceID); v2.0.1 fixed the typo to plain ASCII.
     */
    public EndToEndReferenceID?: string;

    public constructor(props?: ProviderSignatureType) {

        if (props) {

            this.SigningAuthor = props.SigningAuthor;
            this.Signature = props.Signature;
            this.EndToEndReferenceID = props.EndToEndReferenceID;
        }

    }
}
// tslint:enable:variable-name
