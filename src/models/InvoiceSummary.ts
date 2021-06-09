import { ExpensesClassification } from './ExpensesClassification';
import { IncomeClassification } from './IncomeClassification';


export class InvoiceSummary {
    public totalNetValue: number;
    public totalVatAmount: number;
    public totalWithheldAmount: number;
    public totalFeesAmount: number;
    public totalStampDutyAmount: number;
    public totalOtherTaxesAmount: number;
    public totalDeductionsAmount: number;
    public totalGrossValue: number;
    public incomeClassification?: IncomeClassification[];
    public expensesClassification?: ExpensesClassification[];

    public constructor(props?: InvoiceSummary) {

        if (props) {

            this.totalNetValue = props.totalNetValue;
            this.totalVatAmount = props.totalVatAmount;
            this.totalWithheldAmount = props.totalWithheldAmount;
            this.totalFeesAmount = props.totalFeesAmount;
            this.totalStampDutyAmount = props.totalStampDutyAmount;
            this.totalOtherTaxesAmount = props.totalOtherTaxesAmount;
            this.totalDeductionsAmount = props.totalDeductionsAmount;
            this.totalGrossValue = props.totalGrossValue;
            this.incomeClassification = props.incomeClassification?.map(o => o);
            this.expensesClassification = props.expensesClassification?.map(o => o);
        }
    }
}
