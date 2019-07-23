import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    if (!value) return null;
    let length = (args) ? args : 35;
    return value.substr(0, length) + "..."
  }

}
