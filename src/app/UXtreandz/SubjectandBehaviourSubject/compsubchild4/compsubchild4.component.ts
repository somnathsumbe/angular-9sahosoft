import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-compsubchild4',
  templateUrl: './compsubchild4.component.html',
  styleUrls: ['./compsubchild4.component.css']
})
export class Compsubchild4Component implements OnInit {

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
