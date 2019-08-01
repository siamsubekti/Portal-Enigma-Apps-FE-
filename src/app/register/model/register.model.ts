import { Status, DataResponse } from 'src/app/shared/model/api-response.model';

export class Register {
  fullname: string;
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export class ApiResponse {
  status: Status;
  data: DataResponse;
}