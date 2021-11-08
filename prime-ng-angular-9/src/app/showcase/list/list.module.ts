import { DataViewDemo } from './../components/dataview/dataviewdemo';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListRoutingModule } from "./list-routing.module";
import { ListComponent } from "./list.component";
import { FormsModule } from "@angular/forms";
import { DataViewModule } from "primeng/dataview";
import { PanelModule } from "primeng/panel";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { TabViewModule } from "primeng/tabview";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { PickListModule } from 'primeng/picklist';
import { PickListDemo } from '../components/picklist/picklistdemo';

@NgModule({
    declarations: [ListComponent,DataViewDemo,PickListDemo],
    imports: [
        CommonModule,
        ListRoutingModule,
        CommonModule,
        FormsModule,
        DataViewModule,
        PanelModule,
        DialogModule,
        DropdownModule,
        TabViewModule,
        InputTextModule,
        ButtonModule,
        CodeHighlighterModule,
        PickListModule,
    ],
})
export class ListModule {}
