import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArray',
})
export class NumberToArrayPipe implements PipeTransform {
  transform(count: number): Array<number> {
    if (!count) {
      return [];
    }
    return new Array(count);
  }
}
