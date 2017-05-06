import {Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {FiltersService} from "./filters.service";
import {DateComponent} from "./filter-types/date/date.component";
import {StringComponent} from "./filter-types/string/string.component";
import {OptionsCheckboxComponent} from "./filter-types/options-checkbox/options-checkbox.component";
import {OptionsRadioComponent} from "./filter-types/options-radio/options-radio.component";

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  entryComponents: [
    DateComponent,
    StringComponent,
    OptionsCheckboxComponent,
    OptionsRadioComponent
  ]
})
export class FiltersComponent implements OnInit {

  filters: any[] = [];
  currentFilter: any = {};
  filterComponents = {
    StringComponent: StringComponent,
    DateComponent: DateComponent,
    OptionsCheckboxComponent: OptionsCheckboxComponent,
    OptionsRadioComponent: OptionsRadioComponent
  };

  constructor(private filtersService: FiltersService, private _componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.getFilters();
  }

  @ViewChild('filterComponent', {read: ViewContainerRef}) filterComponent: ViewContainerRef;

  getFilters() {
    this.filtersService.getFilters()
      .subscribe(
        res => this.filters = this.filtersService.converIdentifierToComponent(res),
        err => console.log(err)
      );
  }

  toggleFilterOverlay(element, event, filter): void {
    this.currentFilter = filter;
    this.loadFilterComponent(filter);
    element.toggle(event);
  }

  loadFilterComponent(filter) {
    this.filterComponent.clear();
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.filterComponents[filter.component]);
    let componentRef = this.filterComponent.createComponent(componentFactory);
    (componentRef.instance as any).filter = filter;
  }

}
