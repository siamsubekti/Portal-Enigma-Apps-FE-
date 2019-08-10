import { Status } from 'src/app/shared/model/api-response.model';

export class ForgetPassword{
    username : string;
}

export class NewPassword{
    password : string;
    confirmPassword : string;
}

export class ForgetPasswordResponse{
    status: Status;
    data: {};
}