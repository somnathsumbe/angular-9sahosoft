import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../subject.service';

@Component({
selector: 'app-compsuubject',
templateUrl: './compsuubject.component.html',
styleUrls: ['./compsuubject.component.css']
})
export class CompsuubjectComponent implements OnInit {
//3 normal varial assige value
userName:any="somnath"

//4subscribe SubjectService in contractor
constructor( private _subService:SubjectService) {
this._subService.username.subscribe(uname=>{
this.userName=uname;
})
}

ngOnInit(): void {
}


updateUname(ele){
// stap 1 create html input bind # ref send from html to ts means this fuction
console.log(ele.value);

//call subject using belows method
this._subService.username.next(ele.value)

}

}
