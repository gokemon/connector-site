/* the API service that handles making requests to the server */
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
/* imports Angular "core" library modules above and my stuff below */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/* TypeDecorator */
@Injectable()
/* Export the service class */
export class ApiService {
  constructor(
    private http: Http
  ) {}

  // set our header information 
  // as a function that returns headersConfig
  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }

  // formatErrors() returns any errors from our server as JSON.
  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

  // both login and register endpoints require a POST request
  post(path: string, body: Object = {}): Observable<any> { 
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors)
        .map((res:Response) => res.json());
  }

}