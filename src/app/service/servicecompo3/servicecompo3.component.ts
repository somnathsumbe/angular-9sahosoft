import {
  Component,
  OnInit
} from '@angular/core';
import {
  PaymentService
} from '../payment.service';

@Component({
  selector: 'app-servicecompo3',
  templateUrl: './servicecompo3.component.html',
  styleUrls: ['./servicecompo3.component.css'],
  providers: [PaymentService]
})
export class Servicecompo3Component implements OnInit {
  totalMoneys: number[];
  constructor(private _PaymentService: PaymentService) {}

  ngOnInit(): void {
    this.totalMoneys = this._PaymentService.getnum();
  }
  depositeMoney(val: number) {
    this._PaymentService.addnum(val);
  }
}
