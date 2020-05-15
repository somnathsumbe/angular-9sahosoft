import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-servicecompo8',
  templateUrl: './servicecompo8.component.html',
  styleUrls: ['./servicecompo8.component.css'],
  providers:[BankService]
})
export class Servicecompo8Component implements OnInit {
  currantMonrys:number[]=[]
  constructor(private _BankService:BankService) { }

  ngOnInit(): void {
  this.currantMonrys=  this._BankService.currantMoney();
  }

  depositeMoney(val){
    debugger;
    this._BankService.addMoney(val);
  }

}
