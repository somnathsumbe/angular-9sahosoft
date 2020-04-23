import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-uxchild',
  templateUrl: './uxchild.component.html',
  styleUrls: ['./uxchild.component.css']
})


export class UxchildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit , AfterViewChecked,OnDestroy{
  @Input() myValue = "";
  constructor() {

    console.log('constructor call 1');
        console.log('constructor call 1');
  }
  ngOnChanges(change: SimpleChanges) {
    console.log("ngOnChanges call 2: " + change.myValue.currentValue);
  }

  ngOnInit(): void {
    console.log("ngOnInit call 3");
  }
  ngDoCheck() {
    console.log("ngDoCheck call 4");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit call 5");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked call 6");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit call 7");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked call 8");
  }
  
  ngOnDestroy(){
    console.log("ngOnDestroy call 9");
  }

}
