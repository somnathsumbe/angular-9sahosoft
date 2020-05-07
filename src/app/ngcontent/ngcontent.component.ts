import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ngcontent',
  templateUrl: './ngcontent.component.html',
  styleUrls: ['./ngcontent.component.css']
})
export class NgcontentComponent implements OnInit {
  familys = [{
      name: "somnath sumbe",
      age: 32
    },
    {
      name: "sunita sumbe",
      age: 24
    },
    {
      name: "shivansh sumbe",
      age: 3
    },
    {
      name: "suman sumbe",
      age: 58
    }
  ]
  constructor() {}

  ngOnInit(): void {}

}
