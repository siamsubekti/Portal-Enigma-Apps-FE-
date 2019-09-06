import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpService } from '../../../../shared/http/http.service';
import { Observable, Observer } from 'rxjs';
import { ApiResponse, ResponseStatus } from '../../../../shared/http/responses.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {

  baseUrl = environment.apiBaseUrl;

  constructor(private readonly httpService: HttpService) { }

  private rebuildErrorResponse(status: ResponseStatus): HttpErrorResponse {
    const code: number = Number(status.code);
    const error = new Error(status.description);
    error.name = status.code;

    return new HttpErrorResponse({ error, status: code });
  }

  uploadDocument(fileToUpload: File): Observable<ApiResponse> {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return new Observable((observer: Observer<ApiResponse>) => {
      this.httpService.post('RES_DOCUMENT_UPLOAD', formData)
        .subscribe((response: ApiResponse) => {
          if (response.status.code !== '201')
            observer.error(this.rebuildErrorResponse(response.status));
          else
            observer.next(response);
        }, (error) => {
          observer.error(error);
        });
    });
  }
}
