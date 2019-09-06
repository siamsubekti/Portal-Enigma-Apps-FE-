import { HttpHeaders, HttpParams } from '@angular/common/http';

export class HttpRequestParams {
  url: string;
  options: RequestOptions;
}

export class RequestOptions {
  body?: any;
  headers?: HttpHeaders | { [header: string]: string | string[]; };
  observe?: 'body';
  params?: HttpParams | { [param: string]: string | string[]; };
  reportProgress?: boolean;
  responseType: 'arraybuffer';
  withCredentials?: boolean;
}
