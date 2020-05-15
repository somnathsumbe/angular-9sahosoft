import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-mainservicepage',
  templateUrl: './mainservicepage.component.html',
  styleUrls: ['./mainservicepage.component.css'],
  // providers:[MyService]
})
export class MainservicepageComponent implements OnInit {

  myname:string;
  otherservicename:string;
  constructor( private _myservice:MyService) { }

  ngOnInit(): void {
this.myname=this._myservice.getnamefromservice();
this.otherservicename=this._myservice.getdatafromother();
  }

}
