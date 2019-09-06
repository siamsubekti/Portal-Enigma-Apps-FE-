import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbIconModule, NbCardModule, NbButtonModule } from '@nebular/theme';
import { HttpService } from './http/http.service';
import { HttpGuardService } from './http/http.guard';
import { Base64Service } from './utilities/base64.service';
import { StorageService } from './utilities/storage.service';
import { MenuBuilderService } from './utilities/menu-builder.service';
import { RouteGuardService } from './route/route.guard';
import { HttpMethodBadge } from './pipes/http-method-label.pipe';
import { DynamicSortButton } from './pipes/dynamic-sort-button.pipe';
import { PaginationService } from './pagination/pagination.service';
import { PaginationComponent } from './pagination/pagination.component';
import { DeleteConfirmationComponent, ExclamationComponent } from './dialogs';
import { AgeCounterPipe } from './pipes/age-counter.pipe';

const PROVIDERS = [
  Base64Service,
  StorageService,
  RouteGuardService,
  HttpGuardService,
  HttpService,
  MenuBuilderService,
  PaginationService,
];

const COMPONENTS = [
  PaginationComponent,
  DeleteConfirmationComponent,
  ExclamationComponent,
];

const PIPES = [
  HttpMethodBadge,
  DynamicSortButton,
  AgeCounterPipe,
];

const IMPORTS = [
  CommonModule,
  RouterModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule,
];

@NgModule({
  imports: [ ...IMPORTS ],
  exports: [ ...COMPONENTS, ...PIPES ],
  declarations: [ ...COMPONENTS, ...PIPES ],
  entryComponents: [ ...COMPONENTS ],
  providers: [ ...PROVIDERS ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ...PROVIDERS ],
    };
  }
}
