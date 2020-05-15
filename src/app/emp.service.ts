import { Injectable } from "@angular/core";
import { resolve } from "dns";

@Injectable({
  providedIn: "root"
})
export class EmpService {



  constructor() {}

  getEmpData(): Promise<object> {

   let  empdata = [
      { name: "rohan", age: 22 },
      { name: "raghu", age: 23 },
      { name: "ikbal", age: 20 },
      { name: "sushil", age: 28 },
      { name: "Shivansh", age: 36 },
      { name: "kartik", age: 22 },
      { name: "ramdas", age: 23 },
      { name: "somnath", age: 20 },
      { name: "rushikesh", age: 28 },
      { name: "rajesh", age: 36 }
    ];
    return new Promise(resolve => {
      setTimeout(() => resolve(empdata),5000);
    });
    

    
  }
}
