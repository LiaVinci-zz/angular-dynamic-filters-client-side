import {Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, ComponentRef, Type} from '@angular/core';
import {FiltersService} from "./filters.service";

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filters: any[] = [];
  currentFilter: any = {};

  constructor(private filtersService: FiltersService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.getFilters();
  }

  @ViewChild('filterOverlay', {read: ViewContainerRef}) filterOverlay: ViewContainerRef;

  getFilters(): void {
    this.filtersService.getFilters()
      .subscribe(
        res => this.filters = this.filtersService.standardizeFilters(res),
        err => console.log(err)
      );
  }

  toggleFilterOverlay(element, event, filter): void {
    this.currentFilter = filter;
    element.toggle(event);
  }

  // private loadFilterComponent(comp: Type<Component>) {
  //   let factory = this.componentFactoryResolver.resolveComponentFactory(comp);
  //   let componentRef = this.filterOverlay.createComponent(factory);
  //   // //TODO: fix the type definition
  //   (componentRef.instance as any).filterOptions = filter.options;
  // }

}
