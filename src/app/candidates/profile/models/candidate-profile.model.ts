import { ResponseStatus } from '../../../shared/http/responses.model';
import { Account } from '../../../master/models';

export class CandidateProfileResponse {
  status: ResponseStatus;
  data: Account;
}
