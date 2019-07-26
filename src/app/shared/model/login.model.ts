import { Status } from './api-response.model';

export class Login{
    username: string;
    password: string;
}

export class LoginResponse{
    status : Status;
    data : DataLogin;
}

export class DataLogin{
    accountId : string;
    sessionId : string;
}