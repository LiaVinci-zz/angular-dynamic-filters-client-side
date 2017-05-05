import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'filter-checkbox',
  templateUrl: './options-checkbox.component.html',
  styleUrls: ['./options-checkbox.component.css']
})
export class OptionsCheckboxComponent implements OnInit {

  @Input() options: any;
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
