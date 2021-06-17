import { ExpensesClassificationType } from './ExpensesClassification';
import { IncomeClassificationType } from './IncomeClassification';


export class InvoiceSummaryType {

    /** Σύνολο Καθαρής Αξίας */
    public totalNetValue: number;

    /** Σύνολο ΦΠΑ  */
    public totalVatAmount: number;

    /** Σύνολο Παρακρατήσεων Φόρων */
    public totalWithheldAmount: number;

    /** Σύνολο Τελών  */
    public totalFeesAmount: number;

    /** Σύνολο Χαρτοσήμου  */
    public totalStampDutyAmount: number;

    /** Σύνολο Λοιπών Φόρων */
    public totalOtherTaxesAmount: number;

    /** Σύνολο Κρατήσεων */
    public totalDeductionsAmount: number;

    /** Συνολική Αξία */
    public totalGrossValue: number;

    /** Χαρακτηρισμοί Εσόδων */
    public incomeClassification?: IncomeClassificationType[];

    /** Χαρακτηρισμοί Εξόδων */
    public expensesClassification?: ExpensesClassificationType[];

    public constructor(props?: InvoiceSummaryType) {

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
