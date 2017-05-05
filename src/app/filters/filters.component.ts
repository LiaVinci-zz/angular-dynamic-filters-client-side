import { Component, OnInit } from '@angular/core';
import { FiltersService } from "./filters.service";

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filters: any[] = [];
  date: Date = new Date();

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
    this.getFilters();
  }

  getFilters(): void {
    this.filtersService.getFilters()
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
