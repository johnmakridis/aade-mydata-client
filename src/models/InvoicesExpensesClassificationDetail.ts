import { ExpensesClassification } from './ExpensesClassification';


export class InvoicesExpensesClassificationDetail {
    public lineNumber: number;
    public expensesClassificationDetailData: ExpensesClassification[];

    public constructor(props?: InvoicesExpensesClassificationDetail) {

        if (props) {

            this.lineNumber = props.lineNumber;
            this.expensesClassificationDetailData = props.expensesClassificationDetailData?.map(o => new ExpensesClassification(o));
        }

    }

}
