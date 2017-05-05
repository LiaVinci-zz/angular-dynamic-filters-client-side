import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class FiltersService {

  constructor(private http: Http) { }

  getFilters() {
    return this.http
      .get('http://localhost:5000/filters.json')
      .map((response: Response) => response.json());
  }

  // After loading all the filters I want to add a value property to represent the filter model value.
  standardizeFilters(filters: any[]) {
    return filters.map((filter) => {
      filter.value = null;
      return filter;
    });
  }

}
