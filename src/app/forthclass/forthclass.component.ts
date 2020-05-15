import {
  Component,
  OnInit
} from '@angular/core';
import {
  Family
} from './family';



class somnath {
  constructor() {
    console.log("mobile constructor call");
  }
  b: string = "somnath sumbe";
}

class sunita {

  myname = () => console.log("myname i sunita sumbe ")
}

@Component({
  selector: 'app-forthclass',
  templateUrl: './forthclass.component.html',
  styleUrls: ['./forthclass.component.css'],
  viewProviders: [somnath, sunita]
})
export class ForthclassComponent implements OnInit {

  constructor(private somnthobj: somnath, private sunitaobj: sunita, private Family: Family) {}
  familys
  // familys = {
    
  //   // name: "somnath sumbe",
  //   // age: 32,
  //   // city: "pune"
  // }
  ngOnInit(): void {

    console.log(this.somnthobj.b);
    console.log(this.sunitaobj.myname());

    console.log(this.Family.add(20, 30));
  }

}
