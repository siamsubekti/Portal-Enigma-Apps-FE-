export class ActivationResponse{
    status: Status;
    data: Data;

}

export class Status{
    code: string;
    description: string;
}

export class Data{
    accountId: string;
    status: string;
}