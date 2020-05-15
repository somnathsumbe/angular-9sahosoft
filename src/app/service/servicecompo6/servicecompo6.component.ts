import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-servicecompo6',
  templateUrl: './servicecompo6.component.html',
  styleUrls: ['./servicecompo6.component.css']
})
export class Servicecompo6Component implements OnInit {

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
