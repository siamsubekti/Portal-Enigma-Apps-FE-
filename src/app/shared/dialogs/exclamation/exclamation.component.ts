import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-exclamation-dialog',
  templateUrl: './exclamation.html',
  styleUrls: ['../dialog.scss'],
})
export class ExclamationComponent {

  @Input() title: string;
  @Input() text: string;

  constructor(protected ref: NbDialogRef<ExclamationComponent>) {}

  dismiss() {
    this.ref.close(false);
  }

  confirm() {
    this.ref.close(true);
  }
}
