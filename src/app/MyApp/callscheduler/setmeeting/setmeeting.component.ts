import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';


@Component({
  selector: 'app-setmeeting',
  templateUrl: './setmeeting.component.html',
  styleUrls: ['./setmeeting.component.css']
})

export class SetmeetingComponent implements OnInit {
  month: string = 'May';
  year: number = 2020;
  setmeetingdata = [{}]
  days = [];
  isShow = false;
  setmdata;
  index: number;
  data: any;

  constructor() {

  }
  ngOnInit(): void {
    this.CreateDate();
  }
  //create days 1 to 30
  CreateDate = () => {
    for (var i = 1; i <= 30; i++) {
      this.days.push(i);
    }
  }

  setMetting(i) {
    this.index = i;
    this.isShow = true;
  }
  onSubmit(myform: NgForm) {
    this.setmeetingdata = myform.value;
    localStorage.setItem("obj", JSON.stringify(this.setmeetingdata));
    debugger;
    if (this.index) {
      this.data = 'book';
    }
    this.isShow = false;
  }


  closed() {
    this.isShow = false;
  }
}
