var getDeliveryNoteStatusResponse_Module_Factory = function () {
  var getDeliveryNoteStatusResponse = {
    name: 'getDeliveryNoteStatusResponse',
    typeInfos: [{
        localName: 'PackagingDetailType',
        propertyInfos: [{
            name: 'packagingType',
            required: true,
            elementName: {
              localPart: 'packagingType'
            },
            typeInfo: 'Int'
          }, {
            name: 'quantity',
            required: true,
            elementName: {
              localPart: 'quantity'
            },
            typeInfo: 'Int'
          }, {
            name: 'otherPackagingTypeTitle',
            elementName: {
              localPart: 'otherPackagingTypeTitle'
            }
          }]
      }, {
        localName: 'RejectionDetailsType',
        propertyInfos: [{
            name: 'reason',
            elementName: {
              localPart: 'reason'
            }
          }]
      }, {
        localName: 'OutcomeDetailsType',
        propertyInfos: [{
            name: 'outcome',
            required: true,
            elementName: {
              localPart: 'outcome'
            }
          }, {
            name: 'deliveredWithoutRecipient',
            elementName: {
              localPart: 'deliveredWithoutRecipient'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'deliveredPackaging',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'deliveredPackaging'
            },
            typeInfo: '.PackagingDetailType'
          }]
      }, {
        localName: 'LocationType',
        propertyInfos: [{
            name: 'longitude',
            required: true,
            elementName: {
              localPart: 'longitude'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'latitude',
            required: true,
            elementName: {
              localPart: 'latitude'
            },
            typeInfo: 'Decimal'
          }]
      }, {
        localName: 'TransportDetailType',
        propertyInfos: [{
            name: 'vehicleNumber',
            required: true,
            elementName: {
              localPart: 'vehicleNumber'
            }
          }, {
            name: 'transportType',
            required: true,
            elementName: {
              localPart: 'transportType'
            },
            typeInfo: 'Int'
          }, {
            name: 'timeStamp',
            elementName: {
              localPart: 'timeStamp'
            },
            typeInfo: 'DateTime'
          }, {
            name: 'carrierVatNumber',
            required: true,
            elementName: {
              localPart: 'carrierVatNumber'
            }
          }, {
            name: 'pNumber',
            elementName: {
              localPart: 'pNumber'
            }
          }, {
            name: 'location',
            elementName: {
              localPart: 'location'
            },
            typeInfo: '.LocationType'
          }]
      }, {
        localName: 'PackingsDeclaration',
        propertyInfos: [{
            name: 'packages',
            required: true,
            collection: true,
            elementName: {
              localPart: 'Packages'
            },
            typeInfo: '.PackagingDetailType'
          }]
      }, {
        localName: 'DeliveryEventType',
        propertyInfos: [{
            name: 'eventType',
            required: true,
            elementName: {
              localPart: 'eventType'
            }
          }, {
            name: 'eventTimestamp',
            required: true,
            elementName: {
              localPart: 'eventTimestamp'
            },
            typeInfo: 'DateTime'
          }, {
            name: 'actorVat',
            required: true,
            elementName: {
              localPart: 'actorVat'
            }
          }, {
            name: 'mark',
            elementName: {
              localPart: 'mark'
            },
            typeInfo: 'Long'
          }, {
            name: 'transportDetails',
            required: true,
            elementName: {
              localPart: 'transportDetails'
            },
            typeInfo: '.TransportDetailType'
          }, {
            name: 'outcomeDetails',
            required: true,
            elementName: {
              localPart: 'outcomeDetails'
            },
            typeInfo: '.OutcomeDetailsType'
          }, {
            name: 'rejectionDetails',
            required: true,
            elementName: {
              localPart: 'rejectionDetails'
            },
            typeInfo: '.RejectionDetailsType'
          }]
      }, {
        localName: 'GetDeliveryNoteStatusResponseType',
        propertyInfos: [{
            name: 'invoiceMark',
            required: true,
            elementName: {
              localPart: 'invoiceMark'
            }
          }, {
            name: 'status',
            required: true,
            elementName: {
              localPart: 'status'
            }
          }, {
            name: 'dispatchTimestamp',
            required: true,
            elementName: {
              localPart: 'dispatchTimestamp'
            },
            typeInfo: 'DateTime'
          }, {
            name: 'lifecycleHistory',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'lifecycleHistory'
            },
            typeInfo: '.DeliveryEventType'
          }]
      }, {
        type: 'enumInfo',
        localName: 'IncomeClassificationCategoryType',
        values: ['category1_1', 'category1_2', 'category1_3', 'category1_4', 'category1_5', 'category1_6', 'category1_7', 'category1_8', 'category1_9', 'category1_10', 'category1_95', 'category3']
      }, {
        type: 'enumInfo',
        localName: 'ExpensesClassificationCategoryType',
        values: ['category2_1', 'category2_2', 'category2_3', 'category2_4', 'category2_5', 'category2_6', 'category2_7', 'category2_8', 'category2_9', 'category2_10', 'category2_11', 'category2_12', 'category2_13', 'category2_14', 'category2_95']
      }, {
        type: 'enumInfo',
        localName: 'DeliveryOutcomeType',
        values: ['FULL', 'PARTIAL', 'NONE']
      }, {
        type: 'enumInfo',
        localName: 'CountryType',
        values: ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AN', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OC', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'ST', 'SV', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
      }, {
        type: 'enumInfo',
        localName: 'ExpensesClassificationValueType',
        values: ['E3_101', 'E3_102_001', 'E3_102_002', 'E3_102_003', 'E3_102_004', 'E3_102_005', 'E3_102_006', 'E3_104', 'E3_201', 'E3_202_001', 'E3_202_002', 'E3_202_003', 'E3_202_004', 'E3_202_005', 'E3_204', 'E3_207', 'E3_209', 'E3_301', 'E3_302_001', 'E3_302_002', 'E3_302_003', 'E3_302_004', 'E3_302_005', 'E3_304', 'E3_307', 'E3_309', 'E3_312', 'E3_313_001', 'E3_313_002', 'E3_313_003', 'E3_313_004', 'E3_313_005', 'E3_315', 'E3_581_001', 'E3_581_002', 'E3_581_003', 'E3_582', 'E3_583', 'E3_584', 'E3_585_001', 'E3_585_002', 'E3_585_003', 'E3_585_004', 'E3_585_005', 'E3_585_006', 'E3_585_007', 'E3_585_008', 'E3_585_009', 'E3_585_010', 'E3_585_011', 'E3_585_012', 'E3_585_013', 'E3_585_014', 'E3_585_015', 'E3_585_016', 'E3_586', 'E3_587', 'E3_588', 'E3_589', 'E3_881_001', 'E3_881_002', 'E3_881_003', 'E3_881_004', 'E3_882_001', 'E3_882_002', 'E3_882_003', 'E3_882_004', 'E3_883_001', 'E3_883_002', 'E3_883_003', 'E3_883_004', 'VAT_361', 'VAT_362', 'VAT_363', 'VAT_364', 'VAT_365', 'VAT_366', 'E3_103', 'E3_203', 'E3_303', 'E3_208', 'E3_308', 'E3_314', 'E3_106', 'E3_205', 'E3_305', 'E3_210', 'E3_310', 'E3_318', 'E3_598_002', 'NOT_VAT_295']
      }, {
        type: 'enumInfo',
        localName: 'IncomeClassificationValueType',
        values: ['E3_106', 'E3_205', 'E3_210', 'E3_305', 'E3_310', 'E3_318', 'E3_561_001', 'E3_561_002', 'E3_561_003', 'E3_561_004', 'E3_561_005', 'E3_561_006', 'E3_561_007', 'E3_562', 'E3_563', 'E3_564', 'E3_565', 'E3_566', 'E3_567', 'E3_568', 'E3_570', 'E3_595', 'E3_596', 'E3_597', 'E3_880_001', 'E3_880_002', 'E3_880_003', 'E3_880_004', 'E3_881_001', 'E3_881_002', 'E3_881_003', 'E3_881_004', 'E3_598_001', 'E3_598_003']
      }, {
        type: 'enumInfo',
        localName: 'CurrencyType',
        values: ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BOV', 'BRL', 'BSD', 'BTN', 'BWP', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 'COP', 'COU', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EEK', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GWP', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MXV', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPD', 'XPF', 'YER', 'ZAR', 'ZMK', 'ZWL']
      }],
    elementInfos: [{
        elementName: {
          localPart: 'GetDeliveryNoteStatusResponse'
        },
        typeInfo: '.GetDeliveryNoteStatusResponseType'
      }]
  };
  return {
    getDeliveryNoteStatusResponse: getDeliveryNoteStatusResponse
  };
};
if (typeof define === 'function' && define.amd) {
  define([], getDeliveryNoteStatusResponse_Module_Factory);
}
else {
  var getDeliveryNoteStatusResponse_Module = getDeliveryNoteStatusResponse_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.getDeliveryNoteStatusResponse = getDeliveryNoteStatusResponse_Module.getDeliveryNoteStatusResponse;
  }
  else {
    var getDeliveryNoteStatusResponse = getDeliveryNoteStatusResponse_Module.getDeliveryNoteStatusResponse;
  }
}