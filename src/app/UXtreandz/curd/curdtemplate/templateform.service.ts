import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateformService {
// saveProductUrl='https://curdusingtemplatefrom.firebaseio.com/';
  constructor(private _http:HttpClient) { }

  saveProduct(products:any[]){
    return this._http.post('https://curdusingtemplatefrom.firebaseio.com/',products);
  }

}
