import { Injectable } from "@angular/core";
import { resolve } from "dns";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  constructor() {}

  getmessage(): Promise<string> {
    debugger;
    let message = "Async pipe using service";
    return new Promise(resolve => {
      setTimeout(() => resolve(message), 3000);
    });
  }

  getsubmessage(): Promise<string> {
    debugger;
    let submessage =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit...Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...";
    return new Promise(resolve => {
      setTimeout(() => resolve(submessage), 2000);
    });
  }

  headingData(): Promise<any> {
    let heding = ["Heading1", "Heading2", "Heading3"];
    return new Promise(resolve => {
      setTimeout(() => resolve(heding));
    });
  }

  Tabledata(): Promise<object> {
    var tabledata = [
      { fname: "Muktaji", lname: "Sumbe", age: 68 },
      { fname: "Suman", lname: "Sumbe", age: 52 },
      { fname: "somnath", lname: "Sumbe", age: 32 },
      { fname: "Sunita", lname: "Sumbe", age: 28 },
      { fname: "Shivansh", lname: "Sumbe", age: 3 }
    ];
    return new Promise(resolve => {
      setTimeout(() => resolve(tabledata),3000);
    });
  }
}
