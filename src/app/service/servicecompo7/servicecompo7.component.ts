import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-servicecompo7',
  templateUrl: './servicecompo7.component.html',
  styleUrls: ['./servicecompo7.component.css'],
  providers:[BankService]
})
export class Servicecompo7Component implements OnInit {

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
