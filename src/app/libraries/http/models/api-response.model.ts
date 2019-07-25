export interface ApiResponse<T> {
  status: ResponseStatus;
  data: T;
}

export interface ApiPagedResponse<T> {
  status: ResponseStatus;
  data: T;
  paging: PagingData;
}

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
