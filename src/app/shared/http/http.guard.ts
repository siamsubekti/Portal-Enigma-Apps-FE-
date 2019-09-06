import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment as env, HttpMethod, AlertMessage } from '../../../environments/environment';
import { StorageService } from '../utilities/storage.service';
import { Service } from '../../master/models';
import { Credential } from '../../auth/models/credential.model';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class HttpGuardService {
  constructor(
    private readonly storage: StorageService,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  get availableAuthServices(): Service[] {
    return JSON.parse(this.storage.get('auth_services'));
  }

  get allowedServices(): Service[] {
    const credential: Credential = this.authService.auth ? this.authService.auth : null;

    return credential ? credential.data.services : [];
  }

  getService(code: string): Service {
    const services: Service[] = [].concat(this.allowedServices, this.availableAuthServices);

    const service: Service = services.find((item: Service) => {
      return item.code === code;
    });

    // console.log('services:', services, 'service:', service);
    return service;
  }

  canMakeRequest(serviceCode: string, method: HttpMethod): boolean {
    const isAuthService: boolean = Array.isArray(this.availableAuthServices) && this.availableAuthServices.some((service: Service) => (service.code === serviceCode && service.method === method));
    const isAllowedService: boolean = Array.isArray(this.allowedServices) && this.allowedServices.some((service: Service) => (service.code === serviceCode && service.method === method));

    return (isAuthService || isAllowedService);
  }

  redirectUnauthorized(error: any): void {
    const { error: { status: crot } } = error;
    if (crot && +crot.code === 401 || (typeof error === 'object' && error.hasOwnProperty(status) && +error.status === 401)) {
      const message: AlertMessage = {
        status: 'danger',
        message: 'Your session was expired.',
      };

      this.authService.destroy();
      this.storage.set('message', JSON.stringify(message));
      this.router.navigateByUrl(env.loginUrl);
    }
  }
}
