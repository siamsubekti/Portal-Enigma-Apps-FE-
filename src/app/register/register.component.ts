import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './service/register.service';
import { Register } from './model/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private formbuilder : FormBuilder, private service: RegisterService, private router : Router) { }
  formGroup : FormGroup
  data: Register = new Register;
  passwordNotSame: boolean;

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 11,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: "circle",
          stroke: {
             width: 2,
             color: "#fff"
          },
          anim: {
            enable: true,
            speed : 10
          }
        },
    }
    };
  
    document.body.classList.add('bg-account-pages');
    document.body.classList.add('py-4');
    document.body.classList.add('py-sm-0');
    this.addForm();
  
}

addForm(){
  this.formGroup = this.formbuilder.group({
    fullname : ['', Validators.required],
    username : ['', Validators.required],
    password : ['', Validators.required],
    confirmPassword : ['', Validators.required],
    phone : ['', Validators.required]
  });
}

get fullname() { return this.formGroup.get('fullname'); }
get username() { return this.formGroup.get('username'); }
get password() { return this.formGroup.get('password'); }
get confirmPassword() { return this.formGroup.get('confirmPassword'); }
get phone() { return this.formGroup.get('phone'); }

submitForm(){
  let register = new Register;
  register.fullname = this.formGroup.controls['fullname'].value;
  register.username = this.formGroup.controls['username'].value;
  register.password = this.formGroup.controls['password'].value;
  register.confirmPassword = this.formGroup.controls['confirmPassword'].value;
  register.phone = this.formGroup.controls['phone'].value;

  this.service.register(register).subscribe((res)=> {
      if(res.status.code != '201'){
        throw new Error('Bad response status: ' + res.status.description);
      } else{
        console.log(res.status.description);
        this.router.navigate(['register/message']);
      }
    }, (err) =>{
      alert(err.error.status.description);
       console.log(err);
    });

}
checkConfirmPassword() {
  if (this.formGroup.controls['password'].value === this.formGroup.controls['confirmPassword'].value) {
      this.passwordNotSame = false;
  } else {
      this.passwordNotSame = true;
  }
}
}
