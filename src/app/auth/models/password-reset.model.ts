import { Service } from '../../master/models';
import { AccountStatus } from '../../../environments/environment';

export class PasswordReset {
  password: string;
  confirmPassword: string;
}

export class PasswordResetResponseData {
  accountId: string;
  accountStatus: AccountStatus;
  sessionId: string;
  redirectTo: Service;
}
