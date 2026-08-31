var generateGroupQRCodeResponse_Module_Factory = function () {
  var generateGroupQRCodeResponse = {
    name: 'generateGroupQRCodeResponse',
    typeInfos: [{
        localName: 'GenerateGroupQRCodeResponseType',
        propertyInfos: [{
            name: 'groupQrUrl',
            required: true,
            elementName: {
              localPart: 'groupQrUrl'
            }
          }, {
            name: 'qrUrlsCount',
            required: true,
            elementName: {
              localPart: 'qrUrlsCount'
            },
            typeInfo: 'Int'
          }, {
            name: 'expiresAt',
            required: true,
            elementName: {
              localPart: 'expiresAt'
            }
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
          localPart: 'GenerateGroupQRCodeResponse'
        },
        typeInfo: '.GenerateGroupQRCodeResponseType'
      }]
  };
  return {
    generateGroupQRCodeResponse: generateGroupQRCodeResponse
  };
};
if (typeof define === 'function' && define.amd) {
  define([], generateGroupQRCodeResponse_Module_Factory);
}
else {
  var generateGroupQRCodeResponse_Module = generateGroupQRCodeResponse_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.generateGroupQRCodeResponse = generateGroupQRCodeResponse_Module.generateGroupQRCodeResponse;
  }
  else {
    var generateGroupQRCodeResponse = generateGroupQRCodeResponse_Module.generateGroupQRCodeResponse;
  }
}