import { ResponseStatus } from '../../shared/http/responses.model';
import { AccountStatus } from '../../../environments/environment';

export class RegistrationForm {
  fullname: string;
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
  birthdate: Date;
  captcha: CaptchaDTO;
}

export class RegistrationResponse {
  status: ResponseStatus;
  data: {
    accountId: string;
    status: AccountStatus;
  };
}

export class CaptchaDTO {
  token: string;
  answer: string;
}

export class CaptchaResponseDTO {
  token: string;
  image: string;
}

export class CaptchaResponse {
  status: ResponseStatus;
  data: CaptchaResponseDTO;
}
