import { Component, OnInit } from '@angular/core';
import {TasksService} from './tasks.service';
import {FiltersService} from '../filters/filters.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  filters: any = {};
  tasks: any[] = [];

  constructor(private tasksService: TasksService, private filtersService: FiltersService) { }

  ngOnInit() {
    this.getTasks();
    this.filtersService.appliedFilters.subscribe((newVal: any) => {
      if (newVal.value.value === '' || (Array.isArray(newVal.value.value) && !newVal.value.value.length) || newVal.value.value === null)
        delete this.filters[newVal.identifier];
      else
        this.filters[newVal.identifier] = newVal.value;
      console.log(this.filters)
    });
  }

  getTasks(): void {
    this.tasksService.getTasks()
      .subscribe(
        res => this.tasks = res,
        err => console.log(err)
      );
  }
}
