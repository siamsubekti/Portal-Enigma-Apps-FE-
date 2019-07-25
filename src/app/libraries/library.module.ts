import { NgModule } from '@angular/core';
import StorageService from './http/services/storage.service';

@NgModule({
  providers: [
    StorageService,
  ]
})
export default class LibraryModule {}
