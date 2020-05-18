import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-shadular2',
  templateUrl: './shadular2.component.html',
  styleUrls: ['./shadular2.component.css']
})
export class Shadular2Component implements OnInit {
  dateArrays: any[] = [];
  dayslength = new Date(2020, 5, 0).getDate();
  divisShow: boolean = false;
  formdata = [];
  selectedDate: number;
  date = new Date();
  currantDate: number;

  constructor() {

  }

  ngOnInit(): void {
    this.currantDate = this.date.getDate();
    this.monthDaysCalculate();
    console.log(this.formdata);

  }

  monthDaysCalculate() {
    for (var i = 1; i <= this.dayslength; i++) {
      this.dateArrays.push({currDate:i});
    }
    console.log(this.dateArrays);
  }


  modelOpen(selectedDate) {
    this.selectedDate = selectedDate;
    if (this.selectedDate < this.currantDate) {
      alert("can't select schedule previous date meeting");
      this.divisShow = false;
    } else {
      this.divisShow = true;

    }
  }


  onSubmit(myform: NgForm) {
    //  var mydataobj= myform.control.value;
    //  mydataobj.index=this.selectedDate;
    if (this.selectedDate) {
      this.dateArrays[this.selectedDate] = Object.assign({},this.dateArrays[this.selectedDate],{meetingInfo: myform.control.value})
      //Object.assign({}, {selectedDate: this.selectedDate}, myform.control.value);
      //this.formdata.push(Object.assign({}, {selectedDate: this.selectedDate}, myform.control.value));
    }
    this.divisShow = false;
  }


  closed = () => this.divisShow = false;

}
