import { ProfileGender, ProfileReligion, ProfileMaritalStatus } from '../../../../environments/environment';

export class Profile {
  id: string;
  fullname: string;
  nickname: string;
  email: string;
  phone: string;
  birthdate: string;
  gender: ProfileGender;
  religion: ProfileReligion;
  maritalStatus: ProfileMaritalStatus;
  createdAt: Date;
  updatedAt: Date;
  account?: Account;
}
