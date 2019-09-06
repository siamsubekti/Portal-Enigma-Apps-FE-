import { Account, Service, Menu } from '../../models';

export class Role {
  id: number;
  code: string;
  name: string;
  createdAt: Date;
  account?: Account;
  services?: Service[];
  menus?: Menu[];
}
