import { Component, OnInit } from '@angular/core';
import { FiltersService } from "../../filters.service";

@Component({
  selector: 'filter-checkbox',
  templateUrl: './options-checkbox.component.html',
  styleUrls: ['./options-checkbox.component.css']
})
export class OptionsCheckboxComponent implements OnInit {

  filter: any;

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
    if (this.filter.value === null)
      this.filter.value = [];
  }

  onChange() {
    this.filtersService.applyFilter(this.filter.identifier, {value: this.filter.value, renderType: this.filter.renderType});
  }

  clearFilter() {
    this.filter.value = [];
    this.filtersService.applyFilter(this.filter.identifier, {value: this.filter.value, renderType: this.filter.renderType});
  }
}
