import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  list: number[] = [300]
  constructor() {}

currantMoney(){
 return  this.list;
}

  addMoney(money) {
    debugger;
    this.list.push(money)
  }
}
