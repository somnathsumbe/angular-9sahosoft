import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-compsubchild3',
  templateUrl: './compsubchild3.component.html',
  styleUrls: ['./compsubchild3.component.css']
})
export class Compsubchild3Component implements OnInit {

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
