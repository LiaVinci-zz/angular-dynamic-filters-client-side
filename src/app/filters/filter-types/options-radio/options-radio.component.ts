import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'filter-radio',
  templateUrl: './options-radio.component.html',
  styleUrls: ['./options-radio.component.css']
})
export class OptionsRadioComponent implements OnInit {

  @Input() options: any;
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
