var response_Module_Factory = function () {
  var response = {
    name: 'response',
    typeInfos: [{
        localName: 'ErrorType',
        propertyInfos: [{
            name: 'message',
            required: true,
            elementName: {
              localPart: 'message'
            }
          }, {
            name: 'code',
            required: true,
            elementName: {
              localPart: 'code'
            }
          }]
      }, {
        localName: 'ResponseDoc',
        typeName: null,
        propertyInfos: [{
            name: 'response',
            required: true,
            collection: true,
            elementName: {
              localPart: 'response'
            },
            typeInfo: '.ResponseType'
          }]
      }, {
        localName: 'ProviderInfoType',
        propertyInfos: [{
            name: 'vatNumber',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'VATNumber'
            }
          }]
      }, {
        localName: 'ResponseType.Errors',
        typeName: null,
        propertyInfos: [{
            name: 'error',
            required: true,
            collection: true,
            elementName: {
              localPart: 'error'
            },
            typeInfo: '.ErrorType'
          }]
      }, {
        localName: 'ReceptionEmailsType',
        typeName: 'receptionEmailsType',
        propertyInfos: [{
            name: 'email',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'email'
            }
          }]
      }, {
        localName: 'ResponseType',
        propertyInfos: [{
            name: 'index',
            elementName: {
              localPart: 'index'
            },
            typeInfo: 'Int'
          }, {
            name: 'invoiceUid',
            elementName: {
              localPart: 'invoiceUid'
            }
          }, {
            name: 'invoiceMark',
            elementName: {
              localPart: 'invoiceMark'
            },
            typeInfo: 'Long'
          }, {
            name: 'classificationMark',
            elementName: {
              localPart: 'classificationMark'
            },
            typeInfo: 'Long'
          }, {
            name: 'cancellationMark',
            elementName: {
              localPart: 'cancellationMark'
            },
            typeInfo: 'Long'
          }, {
            name: 'paymentMethodMark',
            elementName: {
              localPart: 'paymentMethodMark'
            },
            typeInfo: 'Long'
          }, {
            name: 'authenticationCode',
            elementName: {
              localPart: 'authenticationCode'
            }
          }, {
            name: 'receptionProviders',
            elementName: {
              localPart: 'receptionProviders'
            },
            typeInfo: '.ReceptionProvidersType'
          }, {
            name: 'receptionEmails',
            elementName: {
              localPart: 'receptionEmails'
            },
            typeInfo: '.ReceptionEmailsType'
          }, {
            name: 'qrUrl',
            elementName: {
              localPart: 'qrUrl'
            }
          }, {
            name: 'statementId',
            elementName: {
              localPart: 'statementId'
            }
          }, {
            name: 'recallId',
            elementName: {
              localPart: 'recallId'
            }
          }, {
            name: 'transferMark',
            elementName: {
              localPart: 'transferMark'
            },
            typeInfo: 'Long'
          }, {
            name: 'rejectMark',
            elementName: {
              localPart: 'rejectMark'
            },
            typeInfo: 'Long'
          }, {
            name: 'deliveryOutcomeMark',
            elementName: {
              localPart: 'deliveryOutcomeMark'
            },
            typeInfo: 'Long'
          }, {
            name: 'errors',
            required: true,
            elementName: {
              localPart: 'errors'
            },
            typeInfo: '.ResponseType.Errors'
          }, {
            name: 'statusCode',
            required: true,
            elementName: {
              localPart: 'statusCode'
            }
          }]
      }, {
        localName: 'ReceptionProvidersType',
        typeName: 'receptionProvidersType',
        propertyInfos: [{
            name: 'providerInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'ProviderInfo'
            },
            typeInfo: '.ProviderInfoType'
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'ResponseDoc'
        },
        typeInfo: '.ResponseDoc'
      }]
  };
  return {
    response: response
  };
};
if (typeof define === 'function' && define.amd) {
  define([], response_Module_Factory);
}
else {
  var response_Module = response_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.response = response_Module.response;
  }
  else {
    var response = response_Module.response;
  }
}