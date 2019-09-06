import { Component } from '@angular/core';

import { MenuBuilderService } from '../shared/utilities/menu-builder.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="items"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  protected items: NbMenuItem[] = [];

  constructor(
    private readonly menuBuilder: MenuBuilderService,
  ) {
    this.buildMenu();
  }

  buildMenu() {
    this.items = this.menuBuilder.buildMainMenus();
  }
}
