import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Subject} from "rxjs";

@Injectable()
export class FiltersService {

  appliedFilters = new Subject;

  constructor(private http: Http) {
  }

  getFilters() {
    return this.http
      .get('http://localhost:5000/filters.json')
      .map((response: Response) => response.json());
  }

  converIdentifierToComponent(filters) {
    filters.map((filter: any) => {
      filter.component = this.converToComponentName(filter.renderType);
      filter.value = null;
      return filter;
    });
    return filters;
  }

  converToComponentName(filter: string) {
    filter = `${filter.charAt(0).toUpperCase()}${filter.slice(1)}Component`;
    return filter.replace(/-([a-z])/ig, function (all, letter) {
      return letter.toUpperCase();
    });
  }

  applyFilter(identifier, value) {
    this.appliedFilters.next({identifier, value});
  }

}
