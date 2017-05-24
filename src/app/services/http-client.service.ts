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
    
    headers.set('authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEwMGNjMjBlZjcxYmVkYzllMjYwOGUxNmQ0MTAwMzZhNDExZmNjNzliMjZkMjUxZDQ2NjgxNmI3NzQxNjJmMWMyYTM5ZmQ2NWYxN2E1Y2U0In0.eyJhdWQiOiIxIiwianRpIjoiYTAwY2MyMGVmNzFiZWRjOWUyNjA4ZTE2ZDQxMDAzNmE0MTFmY2M3OWIyNmQyNTFkNDY2ODE2Yjc3NDE2MmYxYzJhMzlmZDY1ZjE3YTVjZTQiLCJpYXQiOjE0OTU1MTcyNjYsIm5iZiI6MTQ5NTUxNzI2NiwiZXhwIjoxODExMDUwMDY2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jVPHnEU4OJSUp_TV6RxXrTI9uKn2BALoVdrpeo2dJRw4jk5g4oXy5gXyxa2QKpOR6va42aMH21XOYcGJTcgSCT3FKTK41ixZWLgErMUrgaz6G1-6pwXrJhqPhZEmkhOFcARNzdJ5Qqlju3HyKCuF1vVV8gBH6CZEcaiCzUr7zwDY__GMQz0UzLOsFkJzblTYv1w9j9DT358TxR4J7n2Hl6K0FhW09DRugkFKqMaaOqrdsuh7uQlGoaFQYlHn33eP89-N4oMGwtKphCRMyUQGru4B5cpzhDcDjGw0oUxvfC7CQFk_FabpG4ZIhzcUQFFac3iVUOFFYTy03RiDgf17nuWH7YP2c7SKuKkHv5Ic-bNScMZM5oa13NNgT2vWQbs44JigqaHOsbilzYszMmaasW5wN06KSXxRFZTVWLydtAUNXlredvhIOwkVR7zUaBspqUNP7uy0AhFkq_2f8j4icAhGy6q444uTYkKFtkcUuCM-mMJ0vi5kUzW8nve46B18ofxS58QvWpWeiox_1cjQYymU77AXaU-w_Tc8Qz_yiGNlNxt09vyBaYDtidUBVnw8ZA3B7P8T4VdPtuD5YsqGwJGA-Wwj6ek-qv9xclTWePY9tvu_u4oJL7G_CsbDbo09eKQWnEd-kZdiO7_se4u4xQk_6pzX3_H9dk4M1HyEQCg');

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
    return this.get('http://localhost:8000/api/folders/list')
     .map(res => res.json());   
  }

  getPath(childId: number) {
   
  }
}
