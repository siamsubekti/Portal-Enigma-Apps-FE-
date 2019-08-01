import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivationResponse } from './activation.model';

@Injectable({
  providedIn: 'root'
})
export class ActivationService {
  baseUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  activation(key : string, token : string){
      return this.http.post<ActivationResponse>(`${this.baseUrl}/accounts/activation/${key}/${token}`, undefined);
  }
}
