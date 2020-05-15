import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-servicecompo4',
  templateUrl: './servicecompo4.component.html',
  styleUrls: ['./servicecompo4.component.css'],
  providers:[PaymentService]
})
export class Servicecompo4Component implements OnInit {

  totalMoneys: number[];
  constructor(private _PaymentService: PaymentService) {}

  ngOnInit(): void {
    this.totalMoneys = this._PaymentService.getnum();
  }
  depositeMoney(val: number) {
    this._PaymentService.addnum(val);
  }

}
