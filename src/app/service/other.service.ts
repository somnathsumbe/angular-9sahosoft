import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

 @Injectable()
export class OtherService {

  constructor( private _http:HttpClient) { }

  myotherservicetext(){
    return "sunita sumbe get text from OtherService "
  }

}
