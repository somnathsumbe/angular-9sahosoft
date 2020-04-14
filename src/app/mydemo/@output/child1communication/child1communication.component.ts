import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-child1communication",
  templateUrl: "./child1communication.component.html",
  styleUrls: ["./child1communication.component.css"],
   outputs:['childevent'] // stap 8 outdata from child to parent goto parent component
})
export class Child1communicationComponent implements OnInit {
  // stap 5 create  custome event name and create new event help of EventEmitter
 childevent = new EventEmitter();
  // stap 6 add EventEmitter from import {EventEmitter} from "@angular/core";
  constructor() {}

  ngOnInit(): void {}

  // stap 4 get value from input
  childData(value) {
    //stap 7 emit value
    this.childevent.emit(value);
  }
}
