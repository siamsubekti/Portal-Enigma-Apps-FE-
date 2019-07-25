import { Injectable } from '@angular/core';
import { environment as env } from '../../../../environments/environment';
import { HttpGuardianService } from './guardian.service';
// import { Service } from '../../foundation/service/models/service.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '../models/request-options.model';
import { ApiResponse, ApiPagedResponse } from '../models/api-response.model';
import { map, catchError } from 'rxjs/operators';
let self;

@Injectable()
export default class HttpService {
  constructor(private readonly http: HttpClient, private readonly httpGuard: HttpGuardianService) {
    self = this;
  }

  private handleErrorResponse(errorResponse: HttpErrorResponse): Observable<HttpErrorResponse> {
    console.error('REQUEST ERROR:', errorResponse);
    self.httpGuard.redirectUnauthorized(errorResponse);
    // const {error} = errorResponse;
    return throwError(errorResponse);
  }

  private prepareRequest(query?: HttpParams, options?: RequestOptions): RequestOptions {
    const requestOptions: RequestOptions = new RequestOptions();
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    headers.append('Content-Type', 'application/json');

    if (options) {
      requestOptions.merge(options);
    }

    if (query) {
      requestOptions.params = query;
    }

    requestOptions.withCredentials = true;
    requestOptions.headers = headers;

    return requestOptions;
  }

  get(serviceCode: string, query?: any, path?: string, options?: RequestOptions): Observable<any> {
    const requestOptions: RequestOptions = this.prepareRequest(query, options);

    if (this.httpGuard.canMakeRequest(serviceCode)) {
      const service: Service = this.httpGuard.allowedServices.find((item: Service) => {
        return item.serviceCode === serviceCode;
      });

      let url: string = `${env.apiBaseUrl}/${service.url}`;

      if (path)
        url = `${url}/${path}`;

      return this.http.get<ApiResponse<any> | ApiPagedResponse<any>>(url, requestOptions)
        .pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } else {
      const error = new HttpErrorResponse({status: 401, statusText: 'Unauthorized Access.'});
      return this.handleErrorResponse(error);
    }
  }

  post(serviceCode: string, payload: any, path?: string, options?: RequestOptions): Observable<any> {
    const requestOptions: RequestOptions = this.prepareRequest(undefined, options);

    if (this.httpGuard.canMakeRequest(serviceCode)) {
      const service: Service = this.httpGuard.allowedServices.find((item: Service) => {
        return (item.serviceCode === serviceCode);
      });

      let url = `${env.apiBaseUrl}/${service.url}`;

      if (path) url = `${url}/${path}`;

      return this.http.post<ApiResponse|ApiPagedResponseInterface|any>(url, payload, requestOptions)
        .pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } else if (this.httpGuard.isLoginRequest(serviceCode)) {
      return this.http.post(`${env.apiBaseUrl}/login`, payload, requestOptions)
      .pipe(
        map(response => response),
        catchError(this.handleErrorResponse),
      );
    } else {
      const error = new HttpErrorResponse({status: 401, statusText: 'Unauthorized Access.'});
      return this.handleErrorResponse(error);
    }
  }

  put(serviceCode: string, payload: any, query?: any, path?: string, options?: RequestOptions): Observable<any> {
    const requestOptions: RequestOptions = this.prepareRequest(query, options);

    if (this.httpGuard.canMakeRequest(serviceCode)) {
      const service: Service = this.httpGuard.allowedServices.find((item: Service) => {
        return (item.serviceCode === serviceCode);
      });

      let url = `${env.apiBaseUrl}/${service.url}`;

      if (path) url = `${url}/${path}`;

      return this.http.put<ApiResponse|ApiPagedResponseInterface>(url, payload, requestOptions)
        .pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } else {
      const error = new HttpErrorResponse({status: 401, statusText: 'Unauthorized Access.'});
      return this.handleErrorResponse(error);
    }
  }

  delete(serviceCode: string, path?: string, options?: RequestOptions): Observable<any> {
    const requestOptions: RequestOptions = this.prepareRequest(undefined, options);

    if (this.httpGuard.canMakeRequest(serviceCode)) {
      const service: Service = this.httpGuard.allowedServices.find((item: Service) => {
        return (item.serviceCode === serviceCode);
      });

      let url = `${env.apiBaseUrl}/${service.url}`;

      if (path) url = `${url}/${path}`;

      return this.http.delete<ApiResponse|ApiPagedResponseInterface>(url, requestOptions)
        .pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } else {
      const error = new HttpErrorResponse({status: 401, statusText: 'Unauthorized Access.'});
      return this.handleErrorResponse(error);
    }
  }

  upload(serviceCode: string, form: FormData, options?: RequestOptions): Observable<any> {
    const requestOptions: RequestOptions = options ? this.prepareRequest(undefined, options) : undefined;

    if (this.httpGuard.canMakeRequest(serviceCode)) {
      const service: Service = this.httpGuard.allowedServices.find((item: Service) => {
        return (item.serviceCode === serviceCode);
      });

      const url = `${env.apiBaseUrl}/${service.url}`;

      return this.http.post<ApiResponse|ApiPagedResponseInterface>(url, form, requestOptions)
        .pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } else {
      const error = new HttpErrorResponse({status: 401, statusText: 'Unauthorized Access.'});
      return this.handleErrorResponse(error);
    }
  }

  replaceParam(path: string, params: any) {
    if (!params) {
      const error = new HttpErrorResponse({status: 400, statusText: 'Invalid parameters.'});
      return this.handleErrorResponse(error);
    } else {
        for (const keyParam of params) {
          path = path.replace('{' + keyParam + '}', params[keyParam]);
        }
        return path;
    }
  }
}
