var incomeClassification_Module_Factory = function () {
  var incomeClassification = {
    name: 'incomeClassification',
    defaultElementNamespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0',
    typeInfos: [{
        localName: 'IncomeClassificationType',
        propertyInfos: [{
            name: 'classificationType',
            required: true
          }, {
            name: 'classificationCategory',
            required: true
          }, {
            name: 'amount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'id',
            typeInfo: 'Byte'
          }]
      }, {
        localName: 'IncomeClassificationsDoc',
        typeName: null,
        propertyInfos: [{
            name: 'incomeInvoiceClassification',
            required: true,
            collection: true,
            typeInfo: '.InvoiceIncomeClassificationType'
          }]
      }, {
        localName: 'InvoiceIncomeClassificationType',
        propertyInfos: [{
            name: 'invoiceMark',
            required: true,
            typeInfo: 'Long'
          }, {
            name: 'classificationMark',
            typeInfo: 'Long'
          }, {
            name: 'entityVatNumber'
          }, {
            name: 'transactionMode',
            required: true,
            typeInfo: 'Int'
          }, {
            name: 'invoicesIncomeClassificationDetails',
            required: true,
            collection: true,
            typeInfo: '.InvoicesIncomeClassificationDetailType'
          }]
      }, {
        localName: 'InvoicesIncomeClassificationDetailType',
        propertyInfos: [{
            name: 'lineNumber',
            required: true,
            typeInfo: 'Int'
          }, {
            name: 'incomeClassificationDetailData',
            required: true,
            collection: true,
            typeInfo: '.IncomeClassificationType'
          }]
      }, {
        type: 'enumInfo',
        localName: 'IncomeClassificationValueType',
        values: ['E3_106', 'E3_205', 'E3_210', 'E3_305', 'E3_310', 'E3_318', 'E3_561_001', 'E3_561_002', 'E3_561_003', 'E3_561_004', 'E3_561_005', 'E3_561_006', 'E3_561_007', 'E3_562', 'E3_563', 'E3_564', 'E3_565', 'E3_566', 'E3_567', 'E3_568', 'E3_570', 'E3_595', 'E3_596', 'E3_597', 'E3_880_001', 'E3_880_002', 'E3_880_003', 'E3_880_004', 'E3_881_001', 'E3_881_002', 'E3_881_003', 'E3_881_004']
      }, {
        type: 'enumInfo',
        localName: 'IncomeClassificationCategoryType',
        values: ['category1_1', 'category1_2', 'category1_3', 'category1_4', 'category1_5', 'category1_6', 'category1_7', 'category1_8', 'category1_9', 'category1_10', 'category1_95']
      }],
    elementInfos: [{
        elementName: 'IncomeClassificationsDoc',
        typeInfo: '.IncomeClassificationsDoc'
      }]
  };
  return {
    incomeClassification: incomeClassification
  };
};
if (typeof define === 'function' && define.amd) {
  define([], incomeClassification_Module_Factory);
}
else {
  var incomeClassification_Module = incomeClassification_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.incomeClassification = incomeClassification_Module.incomeClassification;
  }
  else {
    var incomeClassification = incomeClassification_Module.incomeClassification;
  }
}