import { Injectable } from "@angular/core";
import { resolve } from "dns";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  url="https://jsonplaceholder.typicode.com/todos";
  constructor() {}


  gettododata():Promise<object>{
    var todo = [{
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    }
     
    ];
    return new Promise(resolve => {
      setTimeout(() => resolve(todo),3000);
    });
  }
  

  getmessage(): Promise<string> {

    let message = "Async pipe using service";
    return new Promise(resolve => {
      setTimeout(() => resolve(message), 3000);
    });
  }

  getsubmessage(): Promise<string> {

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
