import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  // inputs:['Pdata']
})

export class Child1Component implements OnInit {
  @Input() Pdata:any;
  constructor() {
    console.log(this.Pdata);
   }

  ngOnInit(): void {
  }

}
