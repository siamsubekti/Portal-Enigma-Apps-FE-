import { Profile } from './profile.model';
import { Role } from '../../models';

export class Account {
  id: string;
  username: string;
  password: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  profile: Profile;
  roles: Role[];
  accountType: string;
  lastLogin: Date;
}
