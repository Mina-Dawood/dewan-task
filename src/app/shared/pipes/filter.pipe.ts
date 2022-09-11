import { Majlis } from '@app/shared/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    arr: Majlis[],
    key: string,
    value: string,
    isNumber?: boolean,
    isExact?: boolean
  ): Majlis[] {
    /** No data passed */
    if (!arr || !key || !value) {
      return arr;
    }

    return arr.filter((el: any) =>
      !isNumber && !isExact
        ? el[key]?.toLowerCase().includes(value?.toLowerCase())
        : el[key] === value
    );
  }
}
