import { Role } from '../../models';

export class Menu {
  id: number;
  code: string;
  name: string;
  order: number;
  icon: string;
  path: string;
  createdAt: string;
  parentMenu?: Menu;
  childrenMenu?: Menu[];
  roles?: Role[];
}
