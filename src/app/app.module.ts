import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//PrimeNg Modules
import { CalendarModule } from 'primeng/primeng';
import { OverlayPanelModule } from "primeng/components/overlaypanel/overlaypanel";
import { CheckboxModule } from "primeng/components/checkbox/checkbox";
import { RadioButtonModule } from "primeng/components/radiobutton/radiobutton";

// Services
import { FiltersService } from './filters/filters.service';
import { TasksService } from "./tasks/tasks.service";

// Pipes
import { MyFilterPipe } from './tasks/tasks.pipe';

// Components
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { TasksComponent } from './tasks/tasks.component';
import { StringComponent } from './filters/filter-types/string/string.component';
import { OptionsCheckboxComponent } from './filters/filter-types/options-checkbox/options-checkbox.component';
import { OptionsRadioComponent } from './filters/filter-types/options-radio/options-radio.component';
import { DateComponent } from './filters/filter-types/date/date.component';
import { TaskComponent } from './tasks/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    TasksComponent,
    StringComponent,
    OptionsCheckboxComponent,
    OptionsRadioComponent,
    DateComponent,
    TaskComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    OverlayPanelModule,
    CheckboxModule,
    RadioButtonModule
  ],
  providers: [
    FiltersService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
