import { Component, OnInit } from '@angular/core';
import { FiltersService } from "../../filters.service";

@Component({
  selector: 'filter-radio',
  templateUrl: './options-radio.component.html',
  styleUrls: ['./options-radio.component.css']
})
export class OptionsRadioComponent implements OnInit {

  filter: any;

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
  }

  onChange() {
    this.filtersService.applyFilter(this.filter.identifier, {value: this.filter.value, renderType: this.filter.renderType});
  }
}
