import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'ngxAgePipe',
})
export class AgeCounterPipe implements PipeTransform {

  transform(value: string): string {
    const today = moment();
    const birthday = moment(value, 'YYYY-MM-DD');
    const age = today.diff(birthday, 'years');
    return `${Math.abs(age)}`;

  }

}
