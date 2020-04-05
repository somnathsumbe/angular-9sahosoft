import { Component, OnInit } from "@angular/core";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { formsignup } from "./reactiveformsignup";

@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"]
})
export class ReactiveformComponent implements OnInit {
  signupForm: FormGroup;
  fname: string;
  Lastname: string;
  Email: string;
  password: string;
  constructor(private formbuilder: FormBuilder) {
    this.signupForm = formbuilder.group({
      // fname: new FormControl(),
      // Lastname: new FormControl(),
      // Email: new FormControl(),
      // password: new FormControl()

      fname: ["", Validators.required],
      Lastname: ["", Validators.required],
      Email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    // fname value chage every key see on console
    // this.signupForm.get('fname').valueChanges.subscribe(newfname=>{
    //   console.log(newfname);
    // })

    // this.signupForm.valueChanges.subscribe((uname: formsignup) => {
    //   console.log(`firstname: ${uname.fname} Lastname: ${uname.Lastname}
    //   Email: ${uname.Email} password: ${uname.password}
    //   `)
    // });

    // this.signupForm.get('fname').statusChanges.subscribe(newfname=>{
    //   console.log(newfname);
    // })

    this.signupForm.statusChanges.subscribe((uname: formsignup) => {
      console.log(`firstname: ${uname.fname} Lastname: ${uname.Lastname}
      Email: ${uname.Email} password: ${uname.password}
      `)
    });
  }

  postData(signupForm: any) {
    this.fname = this.signupForm.get("fname").value;
    this.Lastname = this.signupForm.get("Lastname").value;
    this.Email = this.signupForm.get("Email").value;
    this.password = this.signupForm.get("password").value;
    // this.fname = signupForm.controls.fname.value;
    // this.Lastname = signupForm.controls.Lastname.value;
    // this.Email = signupForm.controls.Email.value;
    // this.password = signupForm.controls.password.value;
    console.log(this.fname);
    console.log(this.Lastname);
    console.log(this.Email);
    console.log(this.password);
    console.log(this.signupForm.value);
  }

  resetForm() {
    this.signupForm.reset();
    this.signupForm.reset({
      fname: "Somnath",
      Lastname: "Sumbe",
      Email: "Somasumbe@gmail.com",
      password: "sunita9028"
    });
  }

  FillData() {
    debugger;
    this.signupForm.setValue({
      fname: "sunita",
      Lastname: "karle",
      Email: "sunitakarle23@gmail.com",
      password: "somnathsumbe9028"
    });

    // akhadi control value sodun dayachi asel tr
    // this.signupForm.patchValue({
    //   'fname': "sunita",
    //   'Lastname': "karle",
    //   // 'Email': "sunitakarle23@gmail.com",
    //   'password':'somnathsumbe9028'
    // })
  }
}
