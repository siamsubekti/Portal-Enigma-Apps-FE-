import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer-enigma',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="col-12 text-right">
      <span class="created-by">Created with ♥ by <b><a target="_blank">Enigma</a></b> 2019</span>
    </div>
  `,
})
export class FooterEnigmaComponent {
}
