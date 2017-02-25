import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CameraService {
  serviceUrl: any = 'http://localhost:61169/api/image';

  constructor(private http: Http) { }

  saveImage (imageData: string) {
    // console.log(imageData);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
console.log('ska spara');

    // this.http.post(this.serviceUrl, { imageData }, options)
    //                 .map(this.extractData)
    //                 .catch(this.handleError);

    return this.http.post(this.serviceUrl, imageData, {headers: headers, method: RequestMethod.Post})
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  // private handleError (error: Response | any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

      private handleError(error: Response) {
        console.error('Error in the DepartureScheduleService');
        return Observable.throw(error.json().error || 'Server error');
    }
}


    //     } else {
    //         return this.http.post(serviceUrl, search, {headers: headers, method: RequestMethod.Post})
    //              .map((res: Response) => res.json())
    //              .catch(this.handleError);
    //     }
    // }

