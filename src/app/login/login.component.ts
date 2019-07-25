import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/service/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../shared/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private loginservice : AuthenticationService, private formbuilder : FormBuilder, private router : Router) { }
  formGroup : FormGroup;

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
      this.onLogin();
      localStorage.getItem(status);
    
  }

  onLogin(){
    this.formGroup = this.formbuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
    });
  }
  
  submitLogin(){
    let login = new Login;
  login.username = this.formGroup.controls['username'].value;
  login.password = this.formGroup.controls['password'].value;
  this.loginservice.login(login)
    .subscribe(
      resp=>{
        if(resp.status.code != '200'){
          throw new Error('Bad response status: ' + resp.status.description);
        } else{
          console.log('success');
          alert("success!");
          localStorage.setItem('description', 'login sukses')
          this.router.navigate(['dashboard']);
        }
      }, (err) =>{
         alert('Login Gagal!');
      }
    )}

    

}
