import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class NumlistService {
list:number[]=[100];
  constructor() { }

  addnum(num:number){
    this.list.push(num);
  }
  getnum(){
    return this.list;
  }
}
