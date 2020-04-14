import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';


@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
@ViewChild('CounterChildComponent', {static: true}) CounterChildComponent: CounterChildComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ParentIncrease() {
console.log("ParentIncrease");
    this.CounterChildComponent.childIncrease();
  }
  ParentIncreaseDecrease() {
    this.CounterChildComponent.ChildDecrease();
  }
  

}
