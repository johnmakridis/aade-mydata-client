
// Χαρατηρισμοί Εσόδων Πρότυπων Παραστατικών ΑΑΔΕ

export class IncomeClassification {
    public classificationType: 'E3_106' | 'E3_205' | 'E3_210' | 'E3_305' | 'E3_310' | 'E3_318' | 'E3_561_001' | 'E3_561_002' | 'E3_561_003' | 'E3_561_004' | 'E3_561_005' | 'E3_561_006' | 'E3_561_007' | 'E3_562' | 'E3_563' | 'E3_564' | 'E3_565' | 'E3_566' | 'E3_567' | 'E3_568' | 'E3_570' | 'E3_595' | 'E3_596' | 'E3_597' | 'E3_880_001' | 'E3_880_002' | 'E3_880_003' | 'E3_880_004' | 'E3_881_001' | 'E3_881_002' | 'E3_881_003' | 'E3_881_004';
    public classificationCategory: 'category1_1' | 'category1_2' | 'category1_3' | 'category1_4' | 'category1_5' | 'category1_6' | 'category1_7' | 'category1_8' | 'category1_9' | 'category1_10' | 'category1_95';
    public amount: number;
    public id?: number;

    public constructor(props?: IncomeClassification) {

        if (props) {

            this.classificationType = props.classificationType;
            this.classificationCategory = props.classificationCategory;
            this.amount = props.amount;
            this.id = props.id;
        }

    }

}
