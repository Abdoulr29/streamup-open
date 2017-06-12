import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClientService {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    
    //don't use this key get your own! on streamupbox.com and change URL from localhost to https://streamupbox.com
    // tslint:disable-next-line:max-line-length
    // headers.set('application/json','text/javascript');
    headers.set('authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRiZjA1YTI4NGFmMmMwMGE2OWYzMWZjNjBiNjVjOGY5ZmE2M2E2MjEwY2FiNjI5M2VhZjdhMjdjMDVlMmU0NWNmODFjM2Y4N2JkZmY0YmQzIn0.eyJhdWQiOiIzIiwianRpIjoiNGJmMDVhMjg0YWYyYzAwYTY5ZjMxZmM2MGI2NWM4ZjlmYTYzYTYyMTBjYWI2MjkzZWFmN2EyN2MwNWUyZTQ1Y2Y4MWMzZjg3YmRmZjRiZDMiLCJpYXQiOjE0OTcyNDY4MjQsIm5iZiI6MTQ5NzI0NjgyNCwiZXhwIjoxODEyNzc5NjI0LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.CE_2uW2hzPOkocBd6-DdLM1h2u8muwX8bCGz060NiYQJ3C5LOvrxXvtjqaUequO9BXj7b-4iNhherjuYstbHIrA6vv3TI0nxyWXF53ehCQp1DAeA1lvV4Zx_U6iR4TfEWsmdCIikf2tSSRjm0iSHWSDzmorIzpdigvFOJXDb_4kxJofqzZzLJ8AcB8l_neFQjbCVx5n8QtdD0BGet4NwORgfjP3nLPLnFh436GjlTsLSnppVPQ-R8p2ojUu3GeEyPqdM778iJRwWVUROqD9HocW6aRTSVTh6LR1PBCkWIfiHxvgmJuP1hvVN5YzPzVWNYjmKXw2SlKRJlVMUlj0MgpS1TVoLyGoC54FuIMrJsLG8KRcrKOLG9Mgn6PeDf2ECTjJIPcUYgxxuOm7dcZkEtVLEota_SjoWYExy509glb3vaB4-5zAwX1C8zQoB4-Vj98S6uXDcQOT_dN92tfMhF1t35sEAGZ0i-T7zWPVLhsLkulaOuMab82Y1fPaKV33_Zz5mwE17UVQ0ey1k3YSKABhD5nTo6jwV0r6xQ16lDjxcwWr6KPrSeXOXSHgq0_dHmmqYslVal4zRGzotVNp-70xEZj01T8bKmK8EPOKxQMX0xKNZJnoiXeBhgVj1Y-yfJ4LAs_LbEO-xIL627dFb_0x-PLNL0X0piz41qNKqoII');

  }
  getUser(){
    return this.get('http://localhost:8000/api/users')
     .map(res => res.json());
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
    return this.get('http://localhost:8000/api/folders/list?parent_id=0')
     .map(res => res.json());   
  }

  getPath(childId: number) {
   
  }
}
