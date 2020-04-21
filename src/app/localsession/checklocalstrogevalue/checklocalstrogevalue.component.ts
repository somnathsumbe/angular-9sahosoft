import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklocalstrogevalue',
  templateUrl: './checklocalstrogevalue.component.html',
  styleUrls: ['./checklocalstrogevalue.component.css']
})
export class ChecklocalstrogevalueComponent implements OnInit {
  localvalue:any="";
  locallength:number=0;
  localRemove:any;
  sessionlength:number=0;
  sessionvalue:any="";
  sessionRemove:any;
  constructor() { }

  ngOnInit(): void {
  }

  getValue(){

  this.localvalue=localStorage.getItem("name");
  this.locallength=localStorage.length;
  //  alert( localStorage.getItem("name"));
  //  alert( localStorage.length);

  this.sessionvalue=sessionStorage.getItem("name");
  this.sessionlength=sessionStorage.length;
  }

  RemoveData(){
    this.localRemove=localStorage.removeItem("name");
    this.sessionRemove=sessionStorage.removeItem("name");
  }

  ClearDataLocal(){
    this.localRemove=localStorage.clear();
  }

  ClearDataSession(){
    this.sessionRemove=sessionStorage.clear();
  }


}
