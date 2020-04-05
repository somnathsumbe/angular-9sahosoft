import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {
  selectComponent = true;
  constructor() { }

  ngOnInit(): void {
  }

  compoChange(value: boolean) {
    this.selectComponent = value;
  }

}
