import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivationService } from './activation.service';

@Component({
  // selector: 'app-activation-register',
  template: ''
  // styleUrls: ['./activation-register.component.css']
})
export class ActivationRegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private activationService : ActivationService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let key = params['key'];
      let token = params['token'];
      this.activationService.activation(key, token).subscribe((res)=>{
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

}
