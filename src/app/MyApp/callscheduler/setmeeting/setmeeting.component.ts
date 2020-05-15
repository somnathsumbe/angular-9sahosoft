import {
  Component,
  OnInit
} from "@angular/core";
import {
  NgForm
} from "@angular/forms";

@Component({
  selector: "app-setmeeting",
  templateUrl: "./setmeeting.component.html",
  styleUrls: ["./setmeeting.component.css"],
})
export class SetmeetingComponent implements OnInit {
  month: string = "May";
  year: number = 2020;
  setmeetingdata = [{}];
  days = [];
  isShow = false;
  setmdata;
  index: number;
  datas = [];
  cookidata = {};
  getCurrentData: any;

  constructor() {}
  ngOnInit(): void {
    this.CreateDate();
  }
  //create days 1 to 30
  CreateDate = () => {
    for (var i = 1; i <= 30; i++) {
      this.days.push(i);
    }
  };

  setMetting = (i) => {
    this.index = i;
    this.isShow = true;
  };

  onSubmit = (myform: NgForm) => {
    this.setmeetingdata = myform.value;
    if (this.index || this.index == 0) {
      var obj: string = "index" + "" + this.index;
      localStorage.setItem(obj, JSON.stringify(this.setmeetingdata));
      var getdata = localStorage.getItem(obj);
      this.getCurrentData = JSON.parse(getdata);
      this.datas[this.index] = this.getCurrentData.timefrom + " " + this.getCurrentData.timeto;
    }
    this.isShow = false;
  };
  closed = () => (this.isShow = false);
}
