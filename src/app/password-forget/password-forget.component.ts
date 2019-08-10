import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPassword } from './model/password-forget.model';
import { PasswordForgetService } from './service/password-forget.service';

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.css']
})
export class PasswordForgetComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private formbuilder : FormBuilder, private service: PasswordForgetService, private router : Router) { }

  formGroup : FormGroup;
  data: ForgetPassword = new ForgetPassword;

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
    username : ['', Validators.required],
  });
}

get username() { return this.formGroup.get('username'); }

submitForm(){
  let forgetPassword = new ForgetPassword;
  forgetPassword.username = this.formGroup.controls['username'].value;
  this.service.forgetPassword(forgetPassword).subscribe((res)=> {
      if(res.status.code != '201'){
        throw new Error('Bad response status: ' + res.status.description);
      } else{
        console.log(res.status.description);
      }
    }, (err) =>{
      alert(err.error.status.description);
       console.log(err);
    });

}

}
