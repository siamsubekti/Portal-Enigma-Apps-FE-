import { HttpMethod } from '../../../../environments/environment';
import { Role } from '../../models';

export class Service {
  id: number;
  code: string;
  name: string;
  endpointUrl: string;
  method: HttpMethod;
  createdAt: Date;
  roles?: Role[];
}
