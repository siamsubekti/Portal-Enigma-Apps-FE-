import { Role } from '../../models';

export class AccountProfile {
    username: string;
    fullname: string;
    nickname: string;
    email: string;
    phone: string;
    birthdate: string;
    gender: string;
    religion: string;
    maritalStatus: string;
    roles?: Role[];
    newPassword?: string;
    confirmPassword?: string;
    currentPassword?: string;
}
