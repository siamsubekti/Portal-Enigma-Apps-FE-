import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
    
  }

}
