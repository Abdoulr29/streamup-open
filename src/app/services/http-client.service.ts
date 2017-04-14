import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClientService {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    //don't use this key get your own! on streamupbox.com and change URL from localhost to https://streamupbox.com
    // tslint:disable-next-line:max-line-length
    headers.append('authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgzMzA2MjIwYmMyODk3NzNiMmM4OWE2ZWMxZDRmZjNhOGMyYTk3NmMyNDc3ZmUyZTcxMWI0NWRlMDkzZGM0ZmRhYTM0NTgwY2Y4NzlkNmZmIn0.eyJhdWQiOiI0IiwianRpIjoiODMzMDYyMjBiYzI4OTc3M2IyYzg5YTZlYzFkNGZmM2E4YzJhOTc2YzI0NzdmZTJlNzExYjQ1ZGUwOTNkYzRmZGFhMzQ1ODBjZjg3OWQ2ZmYiLCJpYXQiOjE0OTEyMDAzNjIsIm5iZiI6MTQ5MTIwMDM2MiwiZXhwIjoxODA2NzMzMTYyLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.MfDr3i-5Jj77ZwdJp6ZRo8FSvguKR-HJbFHIzq_gsqoEwOHoW7aFmpAFy7v7yuuRuff4azhwDWAD9ZDYCFWOZhSnfRqVN0PT0SGzlLCKfOiNTYaH5rFcqAbBysL1slcdcxnEk9B3dK_R-h4nZx5waFvE68DIEonzr4OO69_LFuRDg0TAtM8V75XdiA1FY6rXfTO6Sr3Sa1SU5O0r3gus87i6waZkDRpaRC1Xu2IyTyPoIBf60AF-awxGY1n4BrLfEywVHxcD3SKf2UtnzQQF3YMDfId0Ua9ml4SHkWdCVtfxqAiCUwAt-OyvjiswplecjHSXWGJ8zqBLQdZlC9A2pexqwCfvXCHaDRk0TjgY3KLKZ8bmNmnMmwZn9M9w5pvKeiAFQbLDxDo5J_W1tqGGH2mWIFJoI6xdE5ntzduY9L3-8GFlVFgAapi3QzYvilKcTxNtvTXyVjOOCWomZz821TIJNu-kpXOqopOlAA1OA_f2iUXRHRXDIhU9cSize6Grnvgwmpxzg9kdHfnGe2BwpRzd63uPSZQvzV-ZXmni1l4n1LZ3h6EWSOeNiJAjUxfP-1Arcw0qIohi78C9eAl8J2fYPLVoqKf-eI6FVegLCzL5KyJGwZ1z0iXHmN7cvGTWRKX4WrV-D4ZH-Ncu6aq_f8HHR-k6cQMmU9jb3ID5w1g');
  }


  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }


  getFolders() {
    // {undefined/undefined} is supposed to be the parent/subfolders of a folder id if any
    return this.get(process.env.sbox + '/api/folders/list')
      .map(res => res.json());
  }

  getPath(childId: number) {
    return this.get(process.env.sbox + '/api/gmePath/' + childId)
      .map(res => res.json());
  }
}
