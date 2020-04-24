import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-ux-view-child',
templateUrl: './ux-view-child.component.html',
styleUrls: ['./ux-view-child.component.css']
})
export class UxViewChildComponent implements OnInit {
defaultname:string="sunita sumbe";
constructor() { }

ngOnInit(): void {
}

updateUsername(name){
this.defaultname=name.value;
}

}
