import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from '../../auth/services/auth.service';
import { Menu } from '../../master/models';

let that: MenuBuilderService;

@Injectable()
export class MenuBuilderService {
  constructor(private readonly authService: AuthService) {
    that = this;
  }

  buildMainMenus() {
    const sessionMenus: Menu[] = this.authService.auth ? this.authService.auth.data.menus : [];

    if (!sessionMenus || (sessionMenus && sessionMenus.length === 0)) return [];

    let menus: Menu[] = sessionMenus.filter(this.findParents);
    let nbMenus: NbMenuItem[] = [];

    menus.sort(this.sortMenusAscending);
    menus = menus.map((parent: Menu) => {
      parent.childrenMenu = sessionMenus.filter((child: Menu) => this.findChildren(child, parent));
      parent.childrenMenu.sort(this.sortMenusAscending);

      return parent;
    });

    menus = this.removeDuplicates(menus);

    nbMenus = menus.map(this.buildNbMenus);
    return nbMenus;
  }

  private buildNbMenus(menu: Menu) {
    const { childrenMenu: children } = menu;
    const item: NbMenuItem = {
      title: menu.name,
      link: menu.path,
      icon: menu.icon || undefined,
    };

    if (children && children.length > 0) item.children = children.map(that.buildNbMenus);

    return item;
  }

  private findParents(m: Menu) {
    return !m.parentMenu;
  }

  private findChildren(m: Menu, p: Menu) {
    return ( m.parentMenu && m.parentMenu.id === p.id );
  }

  private sortMenusAscending(a: Menu, b: Menu) {
    return (a.order - b.order);
  }

  private removeDuplicates(menus: Menu[]) {
    return Array.from( new Set(menus.map((m: Menu) => m.id)))
      .map((id: number) => menus.find((m: Menu) => m.id === id));
  }

  // private sortMenuDescending(a: Menu, b: Menu) {
  //   return (b.order - a.order);
  // }
}
