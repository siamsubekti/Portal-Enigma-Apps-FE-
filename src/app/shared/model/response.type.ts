import { ResponseStatus, PagingData } from './response.class';

export class ApiResponse<T> {
  status: ResponseStatus;
  data: T;
}

export class ApiExceptionResponse {
  status: ResponseStatus;
}

export class ApiPagedResponse<T> {
  status: ResponseStatus;
  data: T;
  paging: PagingData;
}
