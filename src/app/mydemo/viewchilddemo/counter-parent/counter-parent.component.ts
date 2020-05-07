import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList
} from "@angular/core";
import {
  CounterChildComponent
} from "../counter-child/counter-child.component";

@Component({
  selector: "app-counter-parent",
  templateUrl: "./counter-parent.component.html",
  styleUrls: ["./counter-parent.component.css"],
})
export class CounterParentComponent implements OnInit {
  // @ViewChild(CounterChildComponent) cccomponent: CounterChildComponent;

  @ViewChildren(CounterChildComponent) cccomponent: QueryList < CounterChildComponent > ;
  constructor() {}
  // child1:string="child1";
  // child2:string="child2";
  // child3:string="child3";
  ngOnInit(): void {}
  ParentIncrease() {
    console.log("ParentIncrease");
    // this.cccomponent.childIncrease();
    // this.cccomponent.forEach(el=>el.childIncrease());
    // alert(this.cccomponent.length);
    // this.cccomponent.first.childIncrease();
    // this.cccomponent.last.childIncrease();
    // this.cccomponent.find(el=>el.name=="child2").childIncrease();
    // this.cccomponent.filter(el => el.name == "child2").forEach(el => el.childIncrease());
     this.cccomponent.filter(el => el.name == "child2" || el.name == "child3").forEach(el => el.childIncrease());

  }
  ParentDecrease() {
    // this.cccomponent.ChildDecrease();
    // this.cccomponent.forEach(el=>el.ChildDecrease());
    // this.cccomponent.first.ChildDecrease();
    // this.cccomponent.last.ChildDecrease();
    // this.cccomponent.find(el=>el.name=="child2").ChildDecrease();
    // this.cccomponent.filter(el => el.name == "child2").forEach(el => el.ChildDecrease());
    this.cccomponent.filter(el => el.name == "child2" || el.name == "child3").forEach(el => el.ChildDecrease());
  }
}
