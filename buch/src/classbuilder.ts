class RequestBuilder {
    url: string | null = null;
    data: object | null = null;
    method: string | null = null;

    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    setData(data: object): this {
        this.data = data;
        return this;
    }

    setMethod(method: string): this  {
        this.method = method
        return this;
    }
}

class MyRequest {
    private url: string | null = null;
    private data: object | null = null;
    private method: string | null = null;
    
    constructor (requestBuilder: RequestBuilder) {
        this.url = requestBuilder.url;
        this.data = requestBuilder.data;
        this.method = requestBuilder.method;
    }

    send() : this {
        console.log(this.url + ", " + JSON.stringify(this.data) + ", " + this.method); 
        return this;
    }
}

new MyRequest(new RequestBuilder()
                    .setUrl('bla')
                    .setData({headers: 'allow'})
                    .setMethod('GET')).send();