import { Injectable } from '@angular/core';
import { Register } from '../model/register.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/shared/model/response.type';
import { LoginData } from 'src/app/shared/model/login.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(register : Register) {
    return this.http.post<ApiResponse<LoginData>>(this.baseUrl + 'candidate/register', register);
  }
}
