import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../../filters.service';

@Component({
  selector: 'filter-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  filter: any;

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
  }

  onChange() {
    this.filtersService.applyFilter(this.filter.identifier, {value: this.filter.value, renderType: this.filter.renderType});
  }

  clearFilter() {
    this.filter.value = '';
    this.filtersService.applyFilter(this.filter.identifier, {renderType: this.filter.renderType, value: this.filter.value});
  }
}
