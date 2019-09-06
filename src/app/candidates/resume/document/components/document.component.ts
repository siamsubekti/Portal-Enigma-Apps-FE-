import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertMessage, environment } from '../../../../../environments/environment';
import { DocumentService } from '../services/document.service';
import { Router, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../../../shared/http/responses.model';
import { NbToastrService } from '@nebular/theme';
import { Account } from '../../../../master/models';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'ngx-document',
  templateUrl: '../views/document.component.html',
  styleUrls: ['../views/document.component.scss'],
})
export class DocumentComponent implements OnInit {
  baseUrl = environment.apiBaseUrl;
  formGroup: FormGroup;
  result = new EventEmitter();
  loading: boolean = false;
  loadingStatus: string = 'primary';
  displayAlert: boolean = false;
  alertMessage: AlertMessage;
  payload: any;
  fileToUpload: File = null;
  account: Account;
  params: Params;
  documents: Array<{link: string, name: string}> = [];

  constructor(
    private readonly router: Router,
    private readonly documentService: DocumentService,
    private readonly toastr: NbToastrService,
    private readonly authService: AuthService,
  ) { }

  ngOnInit() {
    this.downloadDocument();
  }

  ngSubmit(payload: any, valid: boolean) {
    if (valid) {
      this.displayAlert = false;
      this.alertMessage = null;
      this.documentService.uploadDocument(payload).subscribe((response) => {
        if (response.status.code === '201' || response.status.code === '200') {
          this.router.navigate(['/my-resume/upload']);
          this.result.emit(true);
        }
    }, (errorResponse: HttpErrorResponse) => {
      const { error: { status } } = errorResponse;

      this.loading = false;
      this.alertMessage = {
        status: 'danger',
        message: `${status.description}`,
      };

      this.displayAlert = true;
    });
  }
}

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.documentService.uploadDocument(this.fileToUpload).subscribe(data => {
    this.loading = false;
    this.toastr.success(`File has been Upload!`, 'Menu Upload.', { icon: 'upload', iconPack: 'fa-solid'});
    this.downloadDocument();
  }, (error: HttpErrorResponse) => {
    this.loading = false;
    this.toastr.danger(`Unable to upload document data ${error.status} ${error.statusText}).`, 'Error');
  });
}

downloadDocument() {
    const account: Account = this.authService.user;
    this.documentService.getDocument(account.id)
    .subscribe((resp: ApiResponse) => {
      if (Array.isArray(resp.data) && resp.data.length > 0) {
        const { data: docs } = resp;
        this.documents = docs.map((x: string) => {
          return {
            link: x,
            name: x.split('/').pop(),
          };
        });
      } else
        this.documents = [];
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.toastr.danger(`Unable to retrieve candidates document data ${error.status} ${error.statusText}).`, 'Error');
    });
  }

}
