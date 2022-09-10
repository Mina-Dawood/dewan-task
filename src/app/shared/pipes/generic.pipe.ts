import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generic',
})
export class GenericPipe implements PipeTransform {
  transform(value: any, cb: Function, ...extraArguments: any[]): any {
    if (cb) {
      return cb(value, ...extraArguments);
    }
    return value;
  }
}
