import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/services/auth.service';
import { Account } from '../../master/models';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit {
  protected user: Account;

  constructor(
    private readonly title: Title,
    private readonly session: AuthService,
  ) {}

  ngOnInit() {
    this.title.setTitle(`${environment.appName} - Home`);
    this.user = this.session.user;
  }
}
