import { Component, OnInit } from '@angular/core';
import {TasksService} from "./tasks.service";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks()
      .subscribe(
        res => this.tasks = res,
        err => console.log(err)
      );
  }

}
