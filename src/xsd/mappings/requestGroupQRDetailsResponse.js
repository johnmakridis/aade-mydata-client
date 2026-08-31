var requestGroupQRDetailsResponse_Module_Factory = function () {
  var requestGroupQRDetailsResponse = {
    name: 'requestGroupQRDetailsResponse',
    defaultElementNamespaceURI: 'http:\/\/www.aade.gr\/myDATA\/invoice\/v1.0',
    typeInfos: [{
        localName: 'RequestGroupQRDetailsResponse.QrUrls',
        typeName: null,
        propertyInfos: [{
            name: 'qrUrl',
            minOccurs: 0,
            collection: true
          }]
      }, {
        localName: 'RequestGroupQRDetailsResponse',
        typeName: null,
        propertyInfos: [{
            name: 'groupId'
          }, {
            name: 'qrUrls',
            typeInfo: '.RequestGroupQRDetailsResponse.QrUrls'
          }, {
            name: 'qrUrlsCount',
            typeInfo: 'Int'
          }, {
            name: 'groupQrCreatorVatNumber'
          }, {
            name: 'createdAt',
            typeInfo: 'DateTime'
          }, {
            name: 'expiresAt',
            typeInfo: 'DateTime'
          }, {
            name: 'statusCode'
          }, {
            name: 'message'
          }]
      }],
    elementInfos: [{
        elementName: 'RequestGroupQRDetailsResponse',
        typeInfo: '.RequestGroupQRDetailsResponse'
      }]
  };
  return {
    requestGroupQRDetailsResponse: requestGroupQRDetailsResponse
  };
};
if (typeof define === 'function' && define.amd) {
  define([], requestGroupQRDetailsResponse_Module_Factory);
}
else {
  var requestGroupQRDetailsResponse_Module = requestGroupQRDetailsResponse_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.requestGroupQRDetailsResponse = requestGroupQRDetailsResponse_Module.requestGroupQRDetailsResponse;
  }
  else {
    var requestGroupQRDetailsResponse = requestGroupQRDetailsResponse_Module.requestGroupQRDetailsResponse;
  }
}