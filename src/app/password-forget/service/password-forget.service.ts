import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ForgetPassword, ForgetPasswordResponse, NewPassword } from '../model/password-forget.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordForgetService {
  baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  forgetPassword(forgetPwd : ForgetPassword){
    return this.http.post<ForgetPasswordResponse>(this.baseUrl + '/auth/password-reset', forgetPwd);
  }

  newPassword(newPassword : NewPassword, key : string, token : string){
    return this.http.post<ForgetPasswordResponse>(`${this.baseUrl}/auth/password-reset/${key}/${token}`, newPassword);
  }
}
