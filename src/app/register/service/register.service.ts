import { Injectable } from '@angular/core';
import { Register, Status } from '../model/register.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  register(register : Register) {
    return this.http.post<ApiResponse>(this.baseUrl + '/accounts/register', register);
  }
}
