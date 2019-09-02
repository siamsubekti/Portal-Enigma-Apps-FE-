/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { AnalyticsService } from './@core/utils/analytics.service';
import { NbIconLibraries, NbToastrService } from '@nebular/theme';
import { environment as env, HttpMethod } from '../environments/environment';
import { HttpService } from './shared/http/http.service';
import { GenericResponse } from './shared/http/responses.model';
import { StorageService } from './shared/utilities/storage.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private readonly iconLibs: NbIconLibraries,
    private readonly title: Title,
    private readonly http: HttpService,
    private readonly toastr: NbToastrService,
    private readonly storage: StorageService,
    // private analytics: AnalyticsService
  ) {}

  ngOnInit(): void {
    // this.analytics.trackPageViews();
    this.title.setTitle(env.appName);
    this.iconLibs.registerFontPack('fa-regular', { pack: 'fa-regular', packClass: 'far', iconClassPrefix: 'fa' });
    this.iconLibs.registerFontPack('fa-solid', { pack: 'fa-solid', packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibs.registerFontPack('fa-brands', { pack: 'fa-brands', packClass: 'fab', iconClassPrefix: 'fa' });
    this.iconLibs.setDefaultPack('fa-regular');

    this.getPublicServices();
  }

  getPublicServices() {
    const service: any = env.services.auth;

    if (!this.storage.get('auth_services'))
      this.http.request(HttpMethod.GET, service)
        .subscribe((response: GenericResponse) => {
          const { data } = response;

          this.storage.set('auth_services', JSON.stringify(data));
        }, (error) => {
          console.error(error);
          this.toastr.danger(`Unable to fetch public services from backend.`);
        });
  }
}
