import {
  Component,
  OnInit
} from '@angular/core';
import {
  NumlistService
} from '../numlist.service';

@Component({
  selector: 'app-servicecompo1',
  templateUrl: './servicecompo1.component.html',
  styleUrls: ['./servicecompo1.component.css']
})
export class Servicecompo1Component implements OnInit {

  constructor(private _NumlistService: NumlistService) {}
  mylist: number[] = []
  ngOnInit(): void {
    this.mylist = this._NumlistService.getnum();
  }

  addData(val: number) {
    this._NumlistService.addnum(val);
    this.mylist = this._NumlistService.getnum();
  }
}
