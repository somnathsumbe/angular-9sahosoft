import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-compsuubject',
  templateUrl: './compsuubject.component.html',
  styleUrls: ['./compsuubject.component.css']
})
export class CompsuubjectComponent implements OnInit {

  userName:any="somnath"
  constructor( private _subService:SubjectService) {
    this._subService.username.subscribe(uname=>{
      this.userName=uname;
    })
   }

  ngOnInit(): void {
  }


  updateUname(ele){
    this._subService.username.next(ele.value)
  
  }

}
