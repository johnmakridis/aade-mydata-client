import { IncomeClassification } from './IncomeClassification';


export class InvoicesIncomeClassificationDetail {
    public lineNumber: number;
    public incomeClassificationDetailData: IncomeClassification[];

    public constructor(props?: InvoicesIncomeClassificationDetail) {

        if (props) {

            this.lineNumber = props.lineNumber;
            this.incomeClassificationDetailData = props.incomeClassificationDetailData?.map(o => new IncomeClassification(o));
        }

    }

}
