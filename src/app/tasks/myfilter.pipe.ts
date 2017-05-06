import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: Object): any {
    if (filter) {
      return items.filter((item) => {
        for (let key in filter) {
          if (filter[key].renderType === 'string' && !this.filterByIncludes(item[key], filter[key].value))
            return false;

          if (filter[key].renderType === 'options-checkbox' && !this.filterByOptions(item[key], filter[key].value))
            return false;

          if (filter[key].renderType === 'options-radio' && !this.filterByExactValue(item[key], filter[key].value))
            return false;

          if (filter[key].renderType === 'date' && !this.filterByDateRange(item[key], filter[key].value)) {
            return false;
          }
        }

        return true;
      });
    }
    return items;
  }

  filterByIncludes(itemValue: string, stringValue: string) {
    return itemValue.includes(stringValue);
  }

  filterByOptions(itemValue: any, checkboxOptions: any) {
    for(let option of checkboxOptions) {
      if (itemValue === option)
        return true;
    }
    return false;
  }

  filterByExactValue(itemValue: string, value: string) {
    return itemValue === value;
  }

  filterByDateRange(itemValue: any, date: any) {
    if (typeof date.start === 'undefined' || date.start === null)
      date.start = new Date(-8640000000000000);

    if (typeof date.end === 'undefined' || date.end === null)
      date.end = new Date(8640000000000000);

    itemValue.start = new Date(itemValue.start);
    itemValue.end = new Date(itemValue.end);

    if (itemValue.start >= date.start && itemValue.end <= date.end)
      return true;

    return false;
  }
}
