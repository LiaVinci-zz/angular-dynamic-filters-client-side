import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'filter-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() options: any;
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
