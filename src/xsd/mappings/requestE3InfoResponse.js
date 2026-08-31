var requestE3InfoResponse_Module_Factory = function () {
  var requestE3InfoResponse = {
    name: 'requestE3InfoResponse',
    defaultElementNamespaceURI: 'http:\/\/www.aade.gr\/myDATA\/invoice\/v1.0',
    typeInfos: [{
        localName: 'InvoiceE3DetailType',
        propertyInfos: [{
            name: 'vAfm',
            elementName: 'V_Afm'
          }, {
            name: 'vMark',
            elementName: 'V_Mark'
          }, {
            name: 'vBook'
          }, {
            name: 'isCancelled',
            elementName: 'IsCancelled',
            typeInfo: 'Boolean'
          }, {
            name: 'issueDate',
            required: true,
            elementName: 'IssueDate',
            typeInfo: 'DateTime'
          }, {
            name: 'vClassCategory',
            elementName: 'V_Class_Category'
          }, {
            name: 'vClassType',
            elementName: 'V_Class_Type'
          }, {
            name: 'vClassValue',
            elementName: 'V_Class_Value',
            typeInfo: 'Decimal'
          }]
      }, {
        localName: 'ContinuationTokenType',
        propertyInfos: [{
            name: 'nextPartitionKey'
          }, {
            name: 'nextRowKey'
          }]
      }, {
        localName: 'RequestedE3InfoType',
        propertyInfos: [{
            name: 'continuationToken',
            typeInfo: '.ContinuationTokenType'
          }, {
            name: 'e3Info',
            minOccurs: 0,
            collection: true,
            elementName: 'E3Info',
            typeInfo: '.InvoiceE3DetailType'
          }]
      }],
    elementInfos: [{
        elementName: 'RequestedE3Info',
        typeInfo: '.RequestedE3InfoType'
      }]
  };
  return {
    requestE3InfoResponse: requestE3InfoResponse
  };
};
if (typeof define === 'function' && define.amd) {
  define([], requestE3InfoResponse_Module_Factory);
}
else {
  var requestE3InfoResponse_Module = requestE3InfoResponse_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.requestE3InfoResponse = requestE3InfoResponse_Module.requestE3InfoResponse;
  }
  else {
    var requestE3InfoResponse = requestE3InfoResponse_Module.requestE3InfoResponse;
  }
}