import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxDynamicSortButton' })
export class DynamicSortButton implements PipeTransform {

  transform(icon: string): string {
    const sortTooltip = {
      'sort': 'Sort this column.',
      'caret-up': 'Sort ascending',
      'caret-down': 'Sort descending',
    };

    return `<i class="fas fa-${icon}" title="${sortTooltip[icon]}"></i>`;
  }
}
