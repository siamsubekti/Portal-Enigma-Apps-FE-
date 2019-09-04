import { ResponseStatus } from '../../shared/http/responses.model';
import { AccountStatus } from '../../../environments/environment';

export class RegistrationForm {
  fullname: string;
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
  birthDate: Date;
}

export class RegistrationResponse {
  status: ResponseStatus;
  data: {
    accountId: string;
    status: AccountStatus;
  };
}
