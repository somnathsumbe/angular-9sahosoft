import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-servicecompo5',
  templateUrl: './servicecompo5.component.html',
  styleUrls: ['./servicecompo5.component.css']
})
export class Servicecompo5Component implements OnInit {
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
