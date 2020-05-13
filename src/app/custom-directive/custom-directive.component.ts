import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {
  isshow = false;
  constructor() {}

  ngOnInit(): void {}

  myngifcheck() {
    this.isshow =!this.isshow;
  }
}
