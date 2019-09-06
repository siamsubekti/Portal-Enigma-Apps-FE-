import { Privilege } from './privilege.model';

export class Credential {
  id: string;
  authenticated: boolean;
  sessionExpired: number;
  data: Privilege;
}
