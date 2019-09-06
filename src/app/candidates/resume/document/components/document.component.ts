import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertMessage } from '../../../../../environments/environment';
import { DocumentService } from '../services/document.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ngx-document',
  templateUrl: '../views/document.component.html',
  styleUrls: ['../views/document.component.scss'],
})
export class DocumentComponent implements OnInit {
  formGroup: FormGroup;
  result = new EventEmitter();
  loading: boolean = false;
  loadingStatus: string = 'primary';
  displayAlert: boolean = false;
  alertMessage: AlertMessage;
  payload: any;
  fileToUpload: File = null;

  constructor(
    private readonly router: Router,
    private readonly documentService: DocumentService,
  ) { }

  ngOnInit() {
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
    alert(data);
  }, error => {
    alert(error);
  });
}

}
