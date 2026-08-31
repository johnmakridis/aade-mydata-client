
// Πληροφορίες Συσκευασίας
export class PackagingDetailType {
    /**
     * Είδος Συσκευασίας
     ** 1 = Παλέτα
     ** 2 = Κούτα
     ** 3 = Κιβώτιο
     ** 4 = Βαρέλι
     ** 5 = Σάκος
     ** 6 = Λοιπά
     */
    public packagingType: 1 | 2 | 3 | 4 | 5 | 6;

    /** Πλήθος */
    public quantity: number;

    /** Τίτλος για Λοιπά Είδη Συσκευασίας */
    public otherPackagingTypeTitle?: string;

    public constructor(props?: PackagingDetailType) {

        if (props) {

            this.packagingType = props.packagingType;
            this.quantity = props.quantity;
            this.otherPackagingTypeTitle = props.otherPackagingTypeTitle;
        }

    }
}

// Δηλώσεις Συσκευασιών Διακίνησης
export class PackingsDeclaration {
    // tslint:disable-next-line:variable-name
    public Packages: PackagingDetailType[];

    public constructor(props?: PackingsDeclaration) {

        if (props)
            this.Packages = props.Packages?.map(o => new PackagingDetailType(o));

    }
}
