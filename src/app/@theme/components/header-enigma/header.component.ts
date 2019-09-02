import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { LayoutService } from '../../../@core/utils';
import { AuthService } from '../../../auth/services/auth.service';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'ngx-header-enigma',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderEnigmaComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  constructor(private session: AuthService,
              private loginService: LoginService,
              private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private router: Router) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.user = {
      name: 'Person',
      picture: '../../../../assets/images/user.png',
    };

    if ( this.session.user ) {
      const { profile } = this.session.user;
      this.user.name = profile.fullname;
    }

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngLogout() {
    this.loginService.backendLogout()
      .subscribe(() => {
        this.session.destroy();
        this.router.navigateByUrl('/auth/login');
      }, (error) => {
        console.error(error);
        this.router.navigateByUrl('/auth/login');
      });
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
