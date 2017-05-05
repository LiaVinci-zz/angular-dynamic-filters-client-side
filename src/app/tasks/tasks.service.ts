import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {

  constructor(private http: Http) { }

  getTasks() {
    return this.http
      .get('http://localhost:5000/tasks.json')
      .map((response: Response) => response.json());
  }

}
