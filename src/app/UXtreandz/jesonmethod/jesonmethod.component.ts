import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-jesonmethod',
  templateUrl: './jesonmethod.component.html',
  styleUrls: ['./jesonmethod.component.css']
})
export class JesonmethodComponent implements OnInit {
  product: any;
  familys = [{
      name: "Somnath Sumbe",
      mobile: 9028787219,
      email: "somasumbe@gmail.com"
    },

    {
      name: "Sunita Sumbe",
      mobile: 8796163303,
      email: "sunitakarle23@gmail.com"
    }
  ]
  constructor() {}

  ngOnInit(): void {

    console.log(this.familys);
    console.log("After stringify Data: " + JSON.stringify(this.familys))
    this.product = JSON.parse(JSON.stringify(this.familys));
    console.log(this.product);
  }

}
