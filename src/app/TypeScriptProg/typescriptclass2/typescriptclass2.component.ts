import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-typescriptclass2',
  templateUrl: './typescriptclass2.component.html',
  styleUrls: ['./typescriptclass2.component.css']
})
export class Typescriptclass2Component implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.numbermethod();
    this.stringmethod();
    this.booleanmethod();
    this.voidmethod();
    this.arraymethod();
  }

  numbermethod() {
    console.log("Number method");
    let first: number = 123;
    letsecond: 456;
    let third = 895;
    // first="somnath";

  }


  stringmethod() {
    console.log("String Method ");
    let name1: string = "";
    let name2: string = '';
    let name3: string = ``

    let empName: string = "Somnath sumbe";
    let department: string = "IT";

    console.log(`Name ${empName} and dept is ${department}`);

  }



  booleanmethod() {
    console.log("boolean Method ");
    let isshow = true;
    let ishide: boolean
    let isnum: boolean = true;

    // let isshow =100;

  }

  //void means not return type
  voidmethod(): void {
    let name: null;
    //no any data type assign to null;
    // name=123;
    // let name1=null;
    console.log(name);
    console.log(typeof (name));


  }

  arraymethod(): void {
    console.log("arraymethod");
    let array1: number[] = [1, 2, 3, 4, 5]
    console.log(typeof (array1));
    console.log(array1);
    console.log(array1.length);

    let list2: Array < number >= [8, 9, 10, 11];
    console.log(list2);

    
    let list3: Array < any >= [8, 9, "somnath",10, 11,true];
    console.log(list3);

        
    let list4: [number,string,number,string]= [1,'s',2,'ss'];
    console.log(list4);

    let list5: [number,string]= [1,"somnath"];
    console.log(list5);
    let empid:number=101;
    let empname:string="sunita";
    let list6=[empid,empname];
    console.log(list6);

 

    let emp:[number,string][];

    emp=[[101,"somnath"],[102,"sunita"]]
    console.log(emp);
    console.log(emp[0]);
    console.log(emp[1]);
    let person:[number,string]=[1,"somnath"];
    person[1]=person[1].concat("sumbe");
    console.log(person[1]);
    console.log(person);

  }

}
