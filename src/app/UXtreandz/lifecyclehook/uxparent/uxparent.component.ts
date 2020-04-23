import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-uxparent',
  templateUrl: './uxparent.component.html',
  styleUrls: ['./uxparent.component.css']
})
export class UxparentComponent implements OnInit {
  value: string;
  comp1exist: boolean=true;
  constructor() {}

  ngOnInit(): void {}


  parentDataSend(val) {
    this.value = val.value;
  }

  ngDistroy() {
    alert();
    this.comp1exist = false;
  }
}
