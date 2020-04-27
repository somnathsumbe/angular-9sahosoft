import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.css']
})
export class ChildcomComponent implements OnInit {

  @Input('parentcomponenttextbox') pdata :string;
   @Output() childevent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  mychilddata(cdata:string){
this.childevent.emit(cdata);
  }

}
