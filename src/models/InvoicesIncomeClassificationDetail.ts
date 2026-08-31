import { IncomeClassificationType } from './IncomeClassification';


export class InvoicesIncomeClassificationDetail {
    public lineNumber: number;
    public incomeClassificationDetailData: IncomeClassificationType[];

    public constructor(props?: InvoicesIncomeClassificationDetail) {

        if (props) {

            this.lineNumber = props.lineNumber;
            this.incomeClassificationDetailData = props.incomeClassificationDetailData?.map(o => new IncomeClassificationType(o));
        }

    }

}
