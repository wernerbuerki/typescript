var RequestBuilder = /** @class */ (function () {
    function RequestBuilder() {
        this.url = null;
        this.data = null;
        this.method = null;
    }
    RequestBuilder.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    RequestBuilder.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    RequestBuilder.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    return RequestBuilder;
}());
var MyRequest = /** @class */ (function () {
    function MyRequest(requestBuilder) {
        this.url = null;
        this.data = null;
        this.method = null;
        this.url = requestBuilder.url;
        this.data = requestBuilder.data;
        this.method = requestBuilder.method;
    }
    MyRequest.prototype.send = function () {
        console.log(this.url + ", " + JSON.stringify(this.data) + ", " + this.method);
        return this;
    };
    return MyRequest;
}());
new MyRequest(new RequestBuilder()
    .setUrl('bla')
    .setData({ headers: 'allow' })
    .setMethod('GET')).send();
