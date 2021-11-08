import { FloatLabelComponent } from './float-label.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatLabelRoutingModule } from './float-label-routing.module';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChipsModule } from 'primeng/chips';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [ FloatLabelComponent],
  imports: [
    CommonModule,
    FloatLabelRoutingModule,
    InputMaskModule,
    InputNumberModule,
    ChipsModule,
    AutoCompleteModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule
  ]
})
export class FloatLabelModule { }
