import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { StorageService } from '../../shared/utilities/storage.service';
import { Account } from '../../master/models';
import { Credential } from '../models/credential.model';

@Injectable()
export class AuthService {
  redirectUrl: string;

  constructor( private readonly storage: StorageService ) {}

  get id() {
    return this.storage.get('session-id');
  }

  set id(value: string) {
    this.storage.set('session-id', value);
  }

  get auth(): Credential {
    const id: string = this.id;
    const credential: Credential = JSON.parse(this.storage.get('session-data'));

    return credential && credential.id === id ? credential : null;
  }

  set auth(auth: Credential) {
    this.storage.set('session-data', JSON.stringify(auth));
  }

  get user(): Account {
    return this.auth ? this.auth.data.account : null;
  }

  get authenticated(): boolean {
    return ( this.auth && this.auth.authenticated );
  }

  get isSessionExpired(): boolean {
    return ( this.auth && moment().isAfter(this.auth.sessionExpired) );
  }

  regenerate() {
    const auth: Credential = this.auth;
    auth.sessionExpired = moment().add(env.sessionExpiration, 'minutes').valueOf();
    this.storage.set('session-data', JSON.stringify(auth));
  }

  destroy() {
    // this.cookie.delete('EPSESSION', '/', 'localhost');
    this.storage.delete('session-id');
    this.storage.delete('session-data');
  }
}
