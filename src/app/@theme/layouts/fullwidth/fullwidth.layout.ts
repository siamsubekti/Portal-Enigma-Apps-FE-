import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-fullwidth-layout',
  styleUrls: ['./fullwidth.layout.scss'],
  template: `
    <nb-layout style="background: none;">
        <nb-layout-column class="p-0">
          <div class="{{ classes }} vh-100">
            <ng-content select="router-outlet"></ng-content>
          </div>
        </nb-layout-column>
    </nb-layout>
  `,
})
export class FullWidthLayoutComponent {
  @Input('classes') protected classes: string;
}
