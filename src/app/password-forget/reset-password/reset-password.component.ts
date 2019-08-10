import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPassword } from '../model/password-forget.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordForgetService } from '../service/password-forget.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private route: ActivatedRoute, private formbuilder : FormBuilder,
    private router : Router, private service: PasswordForgetService) { }
  formGroup : FormGroup;
  data : NewPassword = new NewPassword;
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
    this.addForm();
  }

  addForm(){
    this.formGroup = this.formbuilder.group({
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    });
  }

  submitForm(){
    let newPassword = new NewPassword;
    newPassword.password = this.formGroup.controls['password'].value;
    newPassword.confirmPassword = this.formGroup.controls['confirmPassword'].value;
    this.route.params.subscribe(params=>{
      let key = params['key'];
      let token = params['token'];
      this.service.newPassword(newPassword, key, token).subscribe((res)=>{
        this.router.navigate(['login']);
        console.log(res);
      }, (err)=>{
        this.router.navigate(['login']);
        console.log(err);})
    }, (err)=>{
        this.router.navigate(['login']);
        console.log("error param" + err);
    })
  }

  checkConfirmPassword() {
    if (this.formGroup.controls['password'].value === this.formGroup.controls['confirmPassword'].value) {
        this.passwordNotSame = false;
    } else {
        this.passwordNotSame = true;
    }
  }

}
