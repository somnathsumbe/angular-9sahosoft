import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-servicecompo2',
  templateUrl: './servicecompo2.component.html',
  styleUrls: ['./servicecompo2.component.css']
})
export class Servicecompo2Component implements OnInit {

  constructor(private _NumlistService:NumlistService) { }
  mylist:number[]=[]
    ngOnInit(): void {
      this.mylist=this._NumlistService.getnum();
    }
  
    addData(val:number){
  this._NumlistService.addnum(val);
  this.mylist=this._NumlistService.getnum();
    }

}
