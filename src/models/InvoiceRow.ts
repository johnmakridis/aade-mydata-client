import { ExpensesClassification } from './ExpensesClassification';
import { IncomeClassification } from './IncomeClassification';
import { Ship } from './Ship';


export class InvoiceRow {
    public measurementUnit?: number;
    public invoiceDetail?: number;
    public netValue: number;
    public vatCategory: number;
    public vatAmount: number;
    public vatExemptionCategory?: number; // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
    public dienergia?: Ship;
    public discountOption?: boolean;
    public withheldAmount?: number;
    public withheldPercentCategory?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
    public stampDutyAmount?: number;
    public stampDutyPercentCategory?: number;
    public feesAmount?: number;
    public feesPercentCategory?: number;
    public otherTaxesPercentCategory?: number;
    public otherTaxesAmount?: number;
    public deductionsAmount?: number;
    public incomeClassification?: IncomeClassification[];
    public expensesClassification?: ExpensesClassification[];

    public constructor(props?: InvoiceRow) {

        if (props) {

            this.measurementUnit = props.measurementUnit;
            this.invoiceDetail = props.invoiceDetail;
            this.netValue = props.netValue;
            this.vatCategory = props.vatCategory;
            this.vatAmount = props.vatAmount;
            this.vatExemptionCategory = props.vatExemptionCategory;
            this.dienergia = (props.dienergia) ? new Ship(props.dienergia) : undefined;
            this.discountOption = props.discountOption;
            this.withheldAmount = props.withheldAmount;
            this.withheldPercentCategory = props.withheldPercentCategory;
            this.stampDutyAmount = props.stampDutyAmount;
            this.stampDutyPercentCategory = props.stampDutyPercentCategory;
            this.feesAmount = props.feesAmount;
            this.feesPercentCategory = props.feesPercentCategory;
            this.otherTaxesPercentCategory = props.otherTaxesPercentCategory;
            this.otherTaxesAmount = props.otherTaxesAmount;
            this.deductionsAmount = props.deductionsAmount;
            this.incomeClassification = props.incomeClassification?.map(o => o);
            this.expensesClassification = props.expensesClassification?.map(o => o);
        }
    }
}
