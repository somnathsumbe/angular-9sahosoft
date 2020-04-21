import {
Component,
OnInit
} from "@angular/core";

@Component({
selector: "app-pipes",
templateUrl: "./pipes.component.html",
styleUrls: ["./pipes.component.css"],
})
export class PipesComponent implements OnInit {
name: string = "Somnath Sumbe";
currentDate = new Date();
bday = new Date(1987, 10, 10);
predate = "10/11/1987";
msg:string=`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ab.`
family = {
fname: "somnath",
mname: "muktaji",
lname: "sumbe",
age: 32,
emailid: "somasumbe@gmail.com",
location: "pune",
state: "maharashtra",
country: "india",
};



familylists = [{
fname: "somnath",
lname: "sumbe",
age: 32,
gender: 'male',
country: "india",
},
{
fname: "sunita",
lname: "sumbe",
age: 28,
gender: 'famale',
country: "india",
},
{
fname: "muktaji",
lname: "sumbe",
age: 70,
gender: 'male',
country: "india",
},

{
fname: "suman",
lname: "sumbe",
age: 57,
gender: 'female',
country: "india",
},
{
fname: "shivansh",
lname: "sumbe",
age: 3,
gender: 'male',
country: "india",
},

{
fname: "amol",
lname: "Karle",
age: 23,
gender: 'male',
country: "india",
}
];
constructor() {}

ngOnInit(): void {}
}
