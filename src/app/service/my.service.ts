import { Injectable } from '@angular/core';
import { OtherService } from './other.service';

// // @Injectable({
// //   providedIn: 'root'
// // })

@Injectable()
export class MyService {

  constructor(private _otherservice:OtherService) { }

  getnamefromservice(){
    return "somnath sumbe from my service";
  }

  
  getdatafromother(){
    return this._otherservice.myotherservicetext();
  }
}
