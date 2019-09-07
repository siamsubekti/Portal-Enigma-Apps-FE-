import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment as env, HttpMethod } from '../../../environments/environment';
import { HttpGuardService } from './http.guard';
import { RequestOptions } from './requests.model';
import { Service } from '../../master/models';
let self;

@Injectable()
export class HttpService {
  constructor(
    private readonly http: HttpClient,
    private readonly guard: HttpGuardService,
  ) { self = this; }

  private handleErrorResponse(errorResponse: HttpErrorResponse): Observable<HttpErrorResponse> {
    console.error('REQUEST ERROR:', errorResponse);
    self.guard.redirectUnauthorized(errorResponse);

    // const {error} = errorResponse;
    return throwError(errorResponse);
  }

  private prepareRequest(query?: {[param: string]: string}, options: RequestOptions = new RequestOptions()): RequestOptions {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    headers.append('Content-Type', 'application/json');

    if (query) options.params = query;

    options.withCredentials = true;
    options.headers = headers;

    return options;
  }

  private validateRequest(service: string, method: HttpMethod): Service {
    if (this.guard.canMakeRequest(service, method))
      return this.guard.getService(service);
    else
      throw new HttpErrorResponse({ status: 403, statusText: 'Forbidden.' });
  }

  private rebuildEndpointUrl(url: string, params?: {[key: string]: string}): string {
    if (params)
      for (const key of Object.keys(params))
        url += `/${params[key]}`;

    return `${env.apiBaseUrl.replace(/\/+$/, '')}/${url}`;
  }

  get(code: string, pathParameters?: { [key: string]: string }, queryStrings?: {[param: string]: string}, options?: RequestOptions): Observable<any> {
    try {
      const service: Service = this.validateRequest(code, HttpMethod.GET);
      const requestOptions: RequestOptions = this.prepareRequest(queryStrings, options);
      const url: string = this.rebuildEndpointUrl(service.endpointUrl, pathParameters);

      return this.http.get(url, requestOptions)
        .pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }

  post(code: string, payload: any, pathParameters?: { [key: string]: string }, queryStrings?: {[param: string]: string}, options?: RequestOptions): Observable<any> {
    try {
      const service: Service = this.validateRequest(code, HttpMethod.POST);
      const requestOptions: RequestOptions = this.prepareRequest(queryStrings, options);
      const url: string = this.rebuildEndpointUrl(service.endpointUrl, pathParameters);

      return this.http.post(url, payload, requestOptions)
        .pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }

  put(code: string, payload: any, pathParameters?: { [key: string]: string }, queryStrings?: {[param: string]: string}, options?: RequestOptions): Observable<any> {
    try {
      const service: Service = this.validateRequest(code, HttpMethod.PUT);
      const requestOptions: RequestOptions = this.prepareRequest(queryStrings, options);
      const url: string = this.rebuildEndpointUrl(service.endpointUrl, pathParameters);

      return this.http.put(url, payload, requestOptions)
        .pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }

  delete(code: string, pathParameters?: { [key: string]: string }, queryStrings?: {[param: string]: string}, options?: RequestOptions): Observable<any> {
    try {
      const service: Service = this.validateRequest(code, HttpMethod.DELETE);
      const requestOptions: RequestOptions = this.prepareRequest(queryStrings, options);
      const url: string = this.rebuildEndpointUrl(service.endpointUrl, pathParameters);

      return this.http.delete(url, requestOptions)
        .pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }

  request(httpMethod: HttpMethod, service: Service, body?: any, pathParameters?: { [key: string]: string }, queryStrings?: {[param: string]: string}, options?: RequestOptions): Observable<any> {
    try {
      const requestOptions: RequestOptions = this.prepareRequest(queryStrings, options);
      const url: string = this.rebuildEndpointUrl(service.endpointUrl, pathParameters);

      requestOptions.body = body;
      return this.http.request(httpMethod.toString(), url, requestOptions).pipe(
          map(response => response),
          catchError(this.handleErrorResponse),
        );
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }

  upload() {}
}
