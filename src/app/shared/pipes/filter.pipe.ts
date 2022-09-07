import { Majlis } from '@app/shared/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: Majlis[], search: string): Majlis[] {
    if (!arr) {
      return [];
    }

    if (!search) {
      return arr;
    }

    return arr.filter((majlis) =>
      majlis.name?.toLowerCase()?.includes(search.toLowerCase())
    );
  }
}
