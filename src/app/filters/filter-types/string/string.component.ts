import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'filter-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  @Input() options: any;
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
