import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-sessionmenegment',
  templateUrl: './sessionmenegment.component.html',
  styleUrls: ['./sessionmenegment.component.css']
})
export class SessionmenegmentComponent implements OnInit {
  sessionkeyvalue: any;
  sessionkeyvaluearray: string[] = [];
  newgetobj: any;
  skey: string;
  svalue: any;
  family = {
    "name": "somnathSumbe",
    "age": 32,
    "mobile": 9028787219,
    "email": "somasumbe@gmail.com"
  }
  constructor() {}

  ngOnInit(): void {}

  support() {

    (window.localStorage && window.sessionStorage) ? alert(" window.localStorage && window.sessionStorage support to your Browser"): alert("Browser not Supported ");

  }


  setData() {
    localStorage.setItem("name", "SomnathSumbe");
    sessionStorage.setItem("name", "SunitaSumbe");
    localStorage.setItem("membername", "SumanSumbe");
    sessionStorage.setItem("membername", "MuktajiSumbe");
  }


  setobj() {
    localStorage.setItem("obj", JSON.stringify(this.family));
    alert("set object in local stroge");
  }
  getobj() {
debugger;
    var ss =localStorage.getItem("obj");
    this.newgetobj=JSON.parse(ss);
    console.log(this.newgetobj.name);
    console.log(this.newgetobj.age);
    console.log(this.newgetobj.mobile);
    console.log(this.newgetobj.email);

  }

  sessionkeys() {
    let getSessionLength = sessionStorage.length;
    for (let i = 0; i < getSessionLength; i++) {
      this.skey = sessionStorage.key(i);
      this.svalue = sessionStorage.getItem(this.skey);
      this.sessionkeyvalue = this.skey + ": " + this.svalue
      this.sessionkeyvaluearray.push(this.sessionkeyvalue);


    }

  }


}
