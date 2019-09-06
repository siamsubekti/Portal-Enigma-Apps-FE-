import { ResponseStatus } from '../../shared/http/responses.model';
import { Privilege } from './privilege.model';
import { LoginResponseData } from './login.model';
import { PasswordResetResponseData } from './password-reset.model';

export class LoginResponse {
  status: ResponseStatus;
  data: LoginResponseData;
}
export class PasswordResetResponse {
  status: ResponseStatus;
  data: PasswordResetResponseData;
}

export class AccountPrivilegeResponse {
  status: ResponseStatus;
  data: Privilege;
}
