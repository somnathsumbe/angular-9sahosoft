import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UxViewChildComponent } from '../ux-view-child/ux-view-child.component';

@Component({
selector: 'app-ux-view-parent',
templateUrl:'./ux-view-parent.component.html',
styleUrls: ['./ux-view-parent.component.css']
})
export class UxViewParentComponent implements OnInit, AfterViewInit {
userName:string='somnath sumbe';
@ViewChild('box') box:ElementRef;
@ViewChild(UxViewChildComponent) child:UxViewChildComponent;
constructor() { }

ngOnInit(): void {


}
ngAfterViewInit(){
console.log(this.box);
// this.box.nativeElement.style.backgroundColor="blue";
this.box.nativeElement.classList="bg-warning p-3 text-center";
this.box.nativeElement.innerHtml="somnath sumbe";

console.log(this.child);
}

ChangeChildProperty(){
  debugger;
this.userName=this.child.defaultname="shivansh sumbe";
console.log(this.child.defaultname="shivansh sumbe");
}

ChangeChildMethod(){
this.child.updateUsername(name);
}
}
