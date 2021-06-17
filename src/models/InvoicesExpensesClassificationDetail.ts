import { ExpensesClassificationType } from './ExpensesClassification';


export class InvoicesExpensesClassificationDetail {
    public lineNumber: number;
    public expensesClassificationDetailData: ExpensesClassificationType[];

    public constructor(props?: InvoicesExpensesClassificationDetail) {

        if (props) {

            this.lineNumber = props.lineNumber;
            this.expensesClassificationDetailData = props.expensesClassificationDetailData?.map(o => new ExpensesClassificationType(o));
        }

    }

}
