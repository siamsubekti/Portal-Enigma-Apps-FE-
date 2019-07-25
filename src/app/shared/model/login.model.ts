export class Login{
    username: string;
    password: string;
}

export class LoginResponse{
    status : Status;
    data : Data;
}

export class Status{
    code : string;
    description: string;
}

export class Data{
    accountId : string;
    sessionId : string;
}