import { Account, Role, Menu, Service } from '../../master/models';

export class Privilege {
  account: Account;
  roles: Role[];
  menus: Menu[];
  services: Service[];
}
