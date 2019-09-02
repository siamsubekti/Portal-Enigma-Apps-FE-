export class ResponseStatus {
  code: string;
  description: string;
}

export class PagingData {
  page: number;
  totalPages: number;
  totalRows: number;
  rowsPerPage: number;
}

export interface IApiPagedResponse<T> {
  status: ResponseStatus;
  data: T[];
  paging: PagingData;
}

export interface IApiResponse<T> {
  status: ResponseStatus;
  data: T;
}

export class GenericResponse {
  status?: ResponseStatus;
  data: any;
  paging?: PagingData;
}

export class ApiResponse {
  status: ResponseStatus;
  data: any;
}

export class ApiExceptionResponse {
  status: ResponseStatus;
}

export class ApiPagedResponse {
  status: ResponseStatus;
  data: any[];
  paging: PagingData;
}

export class ApiSearchResponse {
  status: ResponseStatus;
  data: any[];
}
