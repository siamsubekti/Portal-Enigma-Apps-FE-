export class Register {
  fullname: string;
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export class ApiResponse {
  status: Status;
  data: Data;
}

export class Status {
  code: string;
  description: string;
}

export class Data{
  accountId: string;
  status: string;
}
