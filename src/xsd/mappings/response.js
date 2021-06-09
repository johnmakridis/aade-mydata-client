var response_Module_Factory = function () {
  var response = {
    name: 'response',
    typeInfos: [{
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
            },
            typeInfo: 'Int'
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
            name: 'authenticationCode',
            elementName: {
              localPart: 'authenticationCode'
            }
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