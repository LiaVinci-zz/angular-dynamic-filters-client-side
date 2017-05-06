import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../../filters.service';

@Component({
  selector: 'filter-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  filter: any;

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
    if (this.filter.value === null)
      this.filter.value = {};
  }

  onChange() {
    this.filtersService.applyFilter(this.filter.identifier, {renderType: this.filter.renderType, value:{start: this.filter.value.start, end: this.filter.value.end}});
  }
}
