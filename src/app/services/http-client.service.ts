import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClientService {

  constructor(private http: Http) { }


  createAuthorizationHeader(headers: Headers) {
    //don't use this key get your own! on streamupbox.com and change URL from localhost to https://streamupbox.com
    // tslint:disable-next-line:max-line-length

    headers.append('authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVlNjYzYTdjODczNGRjMmJkN2VlZjNkNTAwNGI3OWRmMmQxMzUzMDJjYjZlZjExOTE5MTBkNTI2ZjFkMTE4ZjRmZDBjYTc5MWZhYTMyMWFlIn0.eyJhdWQiOiIxIiwianRpIjoiNWU2NjNhN2M4NzM0ZGMyYmQ3ZWVmM2Q1MDA0Yjc5ZGYyZDEzNTMwMmNiNmVmMTE5MTkxMGQ1MjZmMWQxMThmNGZkMGNhNzkxZmFhMzIxYWUiLCJpYXQiOjE0OTIyNzEwOTYsIm5iZiI6MTQ5MjI3MTA5NiwiZXhwIjoxODA3ODAzODk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.XH3VinULXxq-vzCrjpzkpol0QyKAyLE6_HwYXtbps56DYO5mooS8Ba4XwwVHLOOUsxjFLgVdFw226kar6Rbl19TQqdknnjjbiPfYQSYxqxSQmXDuaLOCPz7ChVsvOBJ6Xe-6AQLSNQ9BTUoR-cyWx7TbN1-Zf96TDckMPA_QRPz8ziYspTYBpabCjfsEQh-1CHiA-1Y7UdrEfFMaA8iH7sE1Sp9MyzZca3kRuQSjjE3SdomMyn3teTxvBy-UkZZS1PR4qKzRRE9cN_WrenZqsQqKxP2iCYU0k_rJ_-lgW10OP9riU5iGFk2wvX559HZslgqoij2Fx0evQsKBRZF9IRe00QSi-nQ2ZXs_VUBTpjMpbBepB_q8nR72lPfQypby8zAzOMKTh8BiVfQmiv-991o_3FyG3RQm4Flt7RVOFKvU6YSwFzH42rIC1_4fpU5FfIzYVfyc6rWZyfzXv7tlqtCgliE_GSl2XNUovgX0JYPSozuJ5QIAEvqdouBXpmZ2DHuxkJFHwHLZQ4NX2BE6yJPsYB7xSwSD1yS36iNg9HuOb5TV8z0v8W4z7jNhmTJ6Z5WbW4uiUKpLQeUpTsbvmGrWUAh6UieCLB32siD3vUqm0a7QbNuRwlCTVI0H3ZxLMvozMGkROQ9LruoAP4BbQrGK_Dc_dSOCtgp1wd5Fp34');

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

    return this.get( 'http://localhost:8000/api/folders/list')

      .map(res => res.json());
  }

  getPath(childId: number) {
    return this.get(process.env.sbox + '/api/gmePath/' + childId)
      .map(res => res.json());
  }
}
