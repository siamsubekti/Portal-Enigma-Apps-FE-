import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-delete-confirmation-dialog',
  templateUrl: 'delete-confirmation.html',
  styleUrls: ['../dialog.scss'],
})
export class DeleteConfirmationComponent {

  @Input() text: string;

  constructor(private readonly ref: NbDialogRef<DeleteConfirmationComponent>) {}

  dismiss() {
    this.ref.close(false);
  }

  confirm() {
    this.ref.close(true);
  }
}
