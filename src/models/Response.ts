import { ExpensesClassification } from './ExpensesClassification';
import { IncomeClassification } from './IncomeClassification';
import { CancelledInvoice } from './CancelledInvoice';
import { Invoice } from './Invoice';


// Response for queries
export class QueryResponse {
    public continuationToken?: ContinuationToken;
    public invoicesDoc?: Invoice;
    public cancelledInvoicesDoc?: CancelledInvoice;
    public incomeClassificationsDoc?: IncomeClassification;
    public expensesClassificationDoc?: ExpensesClassification;

    public constructor(props?: QueryResponse) {

        if (props) {

            this.continuationToken = (props.continuationToken) ? new ContinuationToken(props.continuationToken) : undefined;
            this.invoicesDoc = (props.invoicesDoc) ? new Invoice(props.invoicesDoc) : undefined;
            this.cancelledInvoicesDoc = (props.cancelledInvoicesDoc) ? new CancelledInvoice(props.cancelledInvoicesDoc) : undefined;
            this.incomeClassificationsDoc = (props.incomeClassificationsDoc) ? new IncomeClassification(props.incomeClassificationsDoc) : undefined;
            this.expensesClassificationDoc = (props.expensesClassificationDoc) ? new ExpensesClassification(props.expensesClassificationDoc) : undefined;
        }

    }

}

export class ContinuationToken {
    public nextPartitionKey: string;
    public nextRowKey: string;

    public constructor(props?: ContinuationToken) {

        if (props) {

            this.nextPartitionKey = props.nextPartitionKey;
            this.nextRowKey = props.nextRowKey;
        }

    }

}






// Response for submissions
export class SubmissionResponse {
    public index?: number;
    public statusCode: string;

    public errors?: SubmissionError[];

    public constructor(props?: SubmissionResponse) {

        if (props) {

            this.index = props.index;
            this.statusCode = props.statusCode;
        }

    }

}

export class SubmissionError {
    public message: string;
    public code: number;

    public constructor(props?: SubmissionError) {

        if (props) {

            this.message = props.message;
            this.code = props.code;
        }

    }

}
