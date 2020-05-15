import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { promise } from "protractor";
import { EmpService } from '../emp.service';

@Component({
  selector: "app-asyncexample",
  templateUrl: "./asyncexample.component.html",
  styleUrls: ["./asyncexample.component.css"]
})
export class AsyncexampleComponent implements OnInit {
  msg: Promise<any>;
  submsg: Promise<any>;
  Heading: Promise<any>;
  tdata: Promise<object>;
  allEmps:Promise<object>
  geturldatas: Promise<object>;

  constructor(private _massageService: MessageService, private _empservice:EmpService) {
    this.msg = _massageService.getmessage();
    this.submsg = _massageService.getsubmessage();

  }

  ngOnInit(): void {
    this.Heading = this._massageService.headingData();
    this.tdata = this._massageService.Tabledata();
    debugger;
    this.allEmps = this._empservice.getEmpData();
    console.log(this.allEmps);
    this.geturldatas = this._massageService.gettododata() ;



  }
}
