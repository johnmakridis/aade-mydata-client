var InvoicesDoc_Module_Factory = function () {
  var InvoicesDoc = {
    name: 'InvoicesDoc',
    defaultElementNamespaceURI: 'http:\/\/www.aade.gr\/myDATA\/invoice\/v1.0',
    typeInfos: [{
        localName: 'InvoiceSummaryType',
        propertyInfos: [{
            name: 'totalNetValue',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'totalVatAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'totalWithheldAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'totalFeesAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'totalStampDutyAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'totalOtherTaxesAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'totalDeductionsAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'totalGrossValue',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'incomeClassification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.IncomeClassificationType'
          }, {
            name: 'expensesClassification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ExpensesClassificationType'
          }]
      }, {
        localName: 'IncomeClassificationType',
        typeName: {
          namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0',
          localPart: 'IncomeClassificationType'
        },
        propertyInfos: [{
            name: 'classificationType',
            required: true,
            elementName: {
              localPart: 'classificationType',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            }
          }, {
            name: 'classificationCategory',
            required: true,
            elementName: {
              localPart: 'classificationCategory',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            }
          }, {
            name: 'amount',
            required: true,
            elementName: {
              localPart: 'amount',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'id',
            elementName: {
              localPart: 'id',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            },
            typeInfo: 'Byte'
          }]
      }, {
        localName: 'ExpensesClassificationsDoc',
        typeName: null,
        propertyInfos: [{
            name: 'expensesInvoiceClassification',
            required: true,
            collection: true,
            elementName: {
              localPart: 'expensesInvoiceClassification',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            },
            typeInfo: '.InvoiceExpensesClassificationType'
          }]
      }, {
        localName: 'InvoicesIncomeClassificationDetailType',
        typeName: {
          namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0',
          localPart: 'InvoicesIncomeClassificationDetailType'
        },
        propertyInfos: [{
            name: 'lineNumber',
            required: true,
            elementName: {
              localPart: 'lineNumber',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            },
            typeInfo: 'Int'
          }, {
            name: 'incomeClassificationDetailData',
            required: true,
            collection: true,
            elementName: {
              localPart: 'incomeClassificationDetailData',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            },
            typeInfo: '.IncomeClassificationType'
          }]
      }, {
        localName: 'InvoiceRowType',
        propertyInfos: [{
            name: 'lineNumber',
            required: true,
            typeInfo: 'Int'
          }, {
            name: 'recType',
            typeInfo: 'Int'
          }, {
            name: 'quantity',
            typeInfo: 'Decimal'
          }, {
            name: 'measurementUnit',
            typeInfo: 'Int'
          }, {
            name: 'invoiceDetailType',
            typeInfo: 'Int'
          }, {
            name: 'netValue',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'vatCategory',
            required: true,
            typeInfo: 'Int'
          }, {
            name: 'vatAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'vatExemptionCategory',
            typeInfo: 'Int'
          }, {
            name: 'dienergia',
            typeInfo: '.ShipType'
          }, {
            name: 'discountOption',
            typeInfo: 'Boolean'
          }, {
            name: 'withheldAmount',
            typeInfo: 'Decimal'
          }, {
            name: 'withheldPercentCategory',
            typeInfo: 'Int'
          }, {
            name: 'stampDutyAmount',
            typeInfo: 'Decimal'
          }, {
            name: 'stampDutyPercentCategory',
            typeInfo: 'Int'
          }, {
            name: 'feesAmount',
            typeInfo: 'Decimal'
          }, {
            name: 'feesPercentCategory',
            typeInfo: 'Int'
          }, {
            name: 'otherTaxesPercentCategory',
            typeInfo: 'Int'
          }, {
            name: 'otherTaxesAmount',
            typeInfo: 'Decimal'
          }, {
            name: 'deductionsAmount',
            typeInfo: 'Decimal'
          }, {
            name: 'lineComments'
          }, {
            name: 'incomeClassification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.IncomeClassificationType'
          }, {
            name: 'expensesClassification',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ExpensesClassificationType'
          }]
      }, {
        localName: 'InvoiceIncomeClassificationType',
        typeName: {
          namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0',
          localPart: 'InvoiceIncomeClassificationType'
        },
        propertyInfos: [{
            name: 'invoiceMark',
            required: true,
            elementName: {
              localPart: 'invoiceMark',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            },
            typeInfo: 'Long'
          }, {
            name: 'classificationMark',
            elementName: {
              localPart: 'classificationMark',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            },
            typeInfo: 'Long'
          }, {
            name: 'entityVatNumber',
            elementName: {
              localPart: 'entityVatNumber',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            }
          }, {
            name: 'transactionMode',
            required: true,
            elementName: {
              localPart: 'transactionMode',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            },
            typeInfo: 'Int'
          }, {
            name: 'invoicesIncomeClassificationDetails',
            required: true,
            collection: true,
            elementName: {
              localPart: 'invoicesIncomeClassificationDetails',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            },
            typeInfo: '.InvoicesIncomeClassificationDetailType'
          }]
      }, {
        localName: 'AadeBookInvoiceType.PaymentMethods',
        typeName: null,
        propertyInfos: [{
            name: 'paymentMethodDetails',
            required: true,
            collection: true,
            typeInfo: '.PaymentMethodDetailType'
          }]
      }, {
        localName: 'InvoicesExpensesClassificationDetailType',
        typeName: {
          namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0',
          localPart: 'InvoicesExpensesClassificationDetailType'
        },
        propertyInfos: [{
            name: 'lineNumber',
            required: true,
            elementName: {
              localPart: 'lineNumber',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            },
            typeInfo: 'Int'
          }, {
            name: 'expensesClassificationDetailData',
            required: true,
            collection: true,
            elementName: {
              localPart: 'expensesClassificationDetailData',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            },
            typeInfo: '.ExpensesClassificationType'
          }]
      }, {
        localName: 'ExpensesClassificationType',
        typeName: {
          namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0',
          localPart: 'ExpensesClassificationType'
        },
        propertyInfos: [{
            name: 'classificationType',
            elementName: {
              localPart: 'classificationType',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            }
          }, {
            name: 'classificationCategory',
            elementName: {
              localPart: 'classificationCategory',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            }
          }, {
            name: 'amount',
            required: true,
            elementName: {
              localPart: 'amount',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'id',
            elementName: {
              localPart: 'id',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            },
            typeInfo: 'Byte'
          }]
      }, {
        localName: 'PartyType',
        propertyInfos: [{
            name: 'vatNumber',
            required: true
          }, {
            name: 'country',
            required: true
          }, {
            name: 'branch',
            required: true,
            typeInfo: 'Int'
          }, {
            name: 'name'
          }, {
            name: 'address',
            typeInfo: '.AddressType'
          }]
      }, {
        localName: 'PaymentMethodDetailType',
        propertyInfos: [{
            name: 'type',
            required: true,
            typeInfo: 'Int'
          }, {
            name: 'amount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'paymentMethodInfo'
          }]
      }, {
        localName: 'AadeBookInvoiceType.TaxesTotals',
        typeName: null,
        propertyInfos: [{
            name: 'taxes',
            required: true,
            collection: true,
            typeInfo: '.TaxTotalsType'
          }]
      }, {
        localName: 'IncomeClassificationsDoc',
        typeName: null,
        propertyInfos: [{
            name: 'incomeInvoiceClassification',
            required: true,
            collection: true,
            elementName: {
              localPart: 'incomeInvoiceClassification',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
            },
            typeInfo: '.InvoiceIncomeClassificationType'
          }]
      }, {
        localName: 'InvoiceExpensesClassificationType',
        typeName: {
          namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0',
          localPart: 'InvoiceExpensesClassificationType'
        },
        propertyInfos: [{
            name: 'invoiceMark',
            required: true,
            elementName: {
              localPart: 'invoiceMark',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            },
            typeInfo: 'Long'
          }, {
            name: 'classificationMark',
            elementName: {
              localPart: 'classificationMark',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            },
            typeInfo: 'Long'
          }, {
            name: 'entityVatNumber',
            elementName: {
              localPart: 'entityVatNumber',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            }
          }, {
            name: 'transactionMode',
            required: true,
            elementName: {
              localPart: 'transactionMode',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            },
            typeInfo: 'Int'
          }, {
            name: 'invoicesExpensesClassificationDetails',
            required: true,
            collection: true,
            elementName: {
              localPart: 'invoicesExpensesClassificationDetails',
              namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
            },
            typeInfo: '.InvoicesExpensesClassificationDetailType'
          }]
      }, {
        localName: 'ShipType',
        propertyInfos: [{
            name: 'applicationId',
            required: true
          }, {
            name: 'applicationDate',
            required: true,
            typeInfo: 'Date'
          }, {
            name: 'doy'
          }, {
            name: 'shipId',
            required: true
          }]
      }, {
        localName: 'InvoicesDoc',
        typeName: null,
        propertyInfos: [{
            name: 'invoice',
            required: true,
            collection: true,
            typeInfo: '.AadeBookInvoiceType'
          }]
      }, {
        localName: 'AadeBookInvoiceType',
        propertyInfos: [{
            name: 'uid'
          }, {
            name: 'mark',
            typeInfo: 'Long'
          }, {
            name: 'cancelledByMark',
            typeInfo: 'Long'
          }, {
            name: 'authenticationCode'
          }, {
            name: 'transmissionFailure',
            typeInfo: 'Byte'
          }, {
            name: 'issuer',
            typeInfo: '.PartyType'
          }, {
            name: 'counterpart',
            typeInfo: '.PartyType'
          }, {
            name: 'invoiceHeader',
            required: true,
            typeInfo: '.InvoiceHeaderType'
          }, {
            name: 'paymentMethods',
            typeInfo: '.AadeBookInvoiceType.PaymentMethods'
          }, {
            name: 'invoiceDetails',
            required: true,
            collection: true,
            typeInfo: '.InvoiceRowType'
          }, {
            name: 'taxesTotals',
            typeInfo: '.AadeBookInvoiceType.TaxesTotals'
          }, {
            name: 'invoiceSummary',
            required: true,
            typeInfo: '.InvoiceSummaryType'
          }]
      }, {
        localName: 'InvoiceHeaderType',
        propertyInfos: [{
            name: 'series',
            required: true
          }, {
            name: 'aa',
            required: true
          }, {
            name: 'issueDate',
            required: true,
            typeInfo: 'Date'
          }, {
            name: 'invoiceType',
            required: true
          }, {
            name: 'vatPaymentSuspension',
            typeInfo: 'Boolean'
          }, {
            name: 'currency'
          }, {
            name: 'exchangeRate',
            typeInfo: 'Decimal'
          }, {
            name: 'correlatedInvoices',
            minOccurs: 0,
            collection: true,
            typeInfo: 'Long'
          }, {
            name: 'selfPricing',
            typeInfo: 'Boolean'
          }, {
            name: 'dispatchDate',
            typeInfo: 'Date'
          }, {
            name: 'dispatchTime',
            typeInfo: 'Time'
          }, {
            name: 'vehicleNumber'
          }, {
            name: 'movePurpose',
            typeInfo: 'Int'
          }]
      }, {
        localName: 'TaxTotalsType',
        propertyInfos: [{
            name: 'taxType',
            required: true,
            typeInfo: 'Byte'
          }, {
            name: 'taxCategory',
            typeInfo: 'Byte'
          }, {
            name: 'underlyingValue',
            typeInfo: 'Decimal'
          }, {
            name: 'taxAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'id',
            typeInfo: 'Byte'
          }]
      }, {
        localName: 'AddressType',
        propertyInfos: [{
            name: 'street'
          }, {
            name: 'number'
          }, {
            name: 'postalCode',
            required: true
          }, {
            name: 'city',
            required: true
          }]
      }, {
        type: 'enumInfo',
        localName: 'CountryType',
        values: ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AN', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'ST', 'SV', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
      }, {
        type: 'enumInfo',
        localName: 'IncomeClassificationCategoryType',
        values: ['category1_1', 'category1_2', 'category1_3', 'category1_4', 'category1_5', 'category1_6', 'category1_7', 'category1_8', 'category1_9', 'category1_10', 'category1_95']
      }, {
        type: 'enumInfo',
        localName: 'ExpensesClassificationValueType',
        values: ['E3_101', 'E3_102_001', 'E3_102_002', 'E3_102_003', 'E3_102_004', 'E3_102_005', 'E3_102_006', 'E3_104', 'E3_201', 'E3_202_001', 'E3_202_002', 'E3_202_003', 'E3_202_004', 'E3_202_005', 'E3_204', 'E3_207', 'E3_209', 'E3_301', 'E3_302_001', 'E3_302_002', 'E3_302_003', 'E3_302_004', 'E3_302_005', 'E3_304', 'E3_307', 'E3_309', 'E3_312', 'E3_313_001', 'E3_313_002', 'E3_313_003', 'E3_313_004', 'E3_313_005', 'E3_315', 'E3_581_001', 'E3_581_002', 'E3_581_003', 'E3_582', 'E3_583', 'E3_584', 'E3_585_001', 'E3_585_002', 'E3_585_003', 'E3_585_004', 'E3_585_005', 'E3_585_006', 'E3_585_007', 'E3_585_008', 'E3_585_009', 'E3_585_010', 'E3_585_011', 'E3_585_012', 'E3_585_013', 'E3_585_014', 'E3_585_015', 'E3_585_016', 'E3_586', 'E3_587', 'E3_588', 'E3_589', 'E3_881_001', 'E3_881_002', 'E3_881_003', 'E3_881_004', 'E3_882_001', 'E3_882_002', 'E3_882_003', 'E3_882_004', 'E3_883_001', 'E3_883_002', 'E3_883_003', 'E3_883_004', 'VAT_361', 'VAT_362', 'VAT_363', 'VAT_364', 'VAT_365', 'VAT_366']
      }, {
        type: 'enumInfo',
        localName: 'CurrencyType',
        values: ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BOV', 'BRL', 'BSD', 'BTN', 'BWP', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 'COP', 'COU', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EEK', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GWP', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MXV', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPD', 'XPF', 'YER', 'ZAR', 'ZMK', 'ZWL']
      }, {
        type: 'enumInfo',
        localName: 'IncomeClassificationValueType',
        values: ['E3_106', 'E3_205', 'E3_210', 'E3_305', 'E3_310', 'E3_318', 'E3_561_001', 'E3_561_002', 'E3_561_003', 'E3_561_004', 'E3_561_005', 'E3_561_006', 'E3_561_007', 'E3_562', 'E3_563', 'E3_564', 'E3_565', 'E3_566', 'E3_567', 'E3_568', 'E3_570', 'E3_595', 'E3_596', 'E3_597', 'E3_880_001', 'E3_880_002', 'E3_880_003', 'E3_880_004', 'E3_881_001', 'E3_881_002', 'E3_881_003', 'E3_881_004']
      }, {
        type: 'enumInfo',
        localName: 'ExpensesClassificationCategoryType',
        values: ['category2_1', 'category2_2', 'category2_3', 'category2_4', 'category2_5', 'category2_6', 'category2_7', 'category2_8', 'category2_9', 'category2_10', 'category2_11', 'category2_12', 'category2_13', 'category2_14', 'category2_95']
      }],
    elementInfos: [{
        elementName: {
          localPart: 'ExpensesClassificationsDoc',
          namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/expensesClassificaton\/v1.0'
        },
        typeInfo: '.ExpensesClassificationsDoc'
      }, {
        elementName: 'InvoicesDoc',
        typeInfo: '.InvoicesDoc'
      }, {
        elementName: {
          localPart: 'IncomeClassificationsDoc',
          namespaceURI: 'https:\/\/www.aade.gr\/myDATA\/incomeClassificaton\/v1.0'
        },
        typeInfo: '.IncomeClassificationsDoc'
      }]
  };
  return {
    InvoicesDoc: InvoicesDoc
  };
};
if (typeof define === 'function' && define.amd) {
  define([], InvoicesDoc_Module_Factory);
}
else {
  var InvoicesDoc_Module = InvoicesDoc_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.InvoicesDoc = InvoicesDoc_Module.InvoicesDoc;
  }
  else {
    var InvoicesDoc = InvoicesDoc_Module.InvoicesDoc;
  }
}