var RequestedProviderDoc_Module_Factory = function () {
  var RequestedProviderDoc = {
    name: 'RequestedProviderDoc',
    typeInfos: [{
        localName: 'RequestedProviderDoc',
        typeName: null,
        propertyInfos: [{
            name: 'continuationTokenAndInvoiceProviderType',
            minOccurs: 0,
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'continuationToken'
                },
                typeInfo: '.ContinuationTokenType'
              }, {
                elementName: {
                  localPart: 'InvoiceProviderType'
                },
                typeInfo: '.InvoiceProviderType'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'ContinuationTokenType',
        typeName: 'continuationTokenType',
        propertyInfos: [{
            name: 'nextPartitionKey',
            required: true,
            elementName: {
              localPart: 'nextPartitionKey'
            }
          }, {
            name: 'nextRowKey',
            required: true,
            elementName: {
              localPart: 'nextRowKey'
            }
          }]
      }, {
        localName: 'InvoiceProviderType',
        propertyInfos: [{
            name: 'issuerVAT',
            required: true,
            elementName: {
              localPart: 'issuerVAT'
            }
          }, {
            name: 'invoiceProviderMark',
            required: true,
            elementName: {
              localPart: 'invoiceProviderMark'
            },
            typeInfo: 'Long'
          }, {
            name: 'invoiceUid',
            required: true,
            elementName: {
              localPart: 'invoiceUid'
            }
          }, {
            name: 'authenticationCode',
            required: true,
            elementName: {
              localPart: 'authenticationCode'
            }
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'RequestedProviderDoc'
        },
        typeInfo: '.RequestedProviderDoc'
      }]
  };
  return {
    RequestedProviderDoc: RequestedProviderDoc
  };
};
if (typeof define === 'function' && define.amd) {
  define([], RequestedProviderDoc_Module_Factory);
}
else {
  var RequestedProviderDoc_Module = RequestedProviderDoc_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.RequestedProviderDoc = RequestedProviderDoc_Module.RequestedProviderDoc;
  }
  else {
    var RequestedProviderDoc = RequestedProviderDoc_Module.RequestedProviderDoc;
  }
}