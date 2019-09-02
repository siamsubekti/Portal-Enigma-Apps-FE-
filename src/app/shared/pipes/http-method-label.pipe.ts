import { Pipe, PipeTransform } from '@angular/core';
import { HttpMethod } from '../../../environments/environment';

@Pipe({ name: 'ngxHttpMethodBadge' })
export class HttpMethodBadge implements PipeTransform {

  transform(input: string): string {
    let badgeClass: string = 'badge-info';

    if (input === HttpMethod.POST) badgeClass = 'badge-success';
    else if (input === HttpMethod.PUT) badgeClass = 'badge-warning';
    else if (input === HttpMethod.DELETE) badgeClass = 'badge-danger';

    return `<span class="badge ${badgeClass} text-wrap">${input}</span>`;
  }
}
