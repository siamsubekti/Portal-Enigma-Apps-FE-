import { Service } from '../../master/models';
import { AccountStatus } from '../../../environments/environment';

export class Login {
  username: string;
  password: string;
}

export class LoginResponseData {
  accountId: string;
  accountStatus: AccountStatus;
  sessionId: string;
  redirectTo: Service;
}
