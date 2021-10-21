import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    LocationStrategy,
    HashLocationStrategy,
    CommonModule,
} from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AutoCompleteModule } from "../components/autocomplete/autocomplete";

import { CarService } from "./service/carservice";
import { CountryService } from "./service/countryservice";
import { EventService } from "./service/eventservice";
import { NodeService } from "./service/nodeservice";
import { IconService } from "./service/iconservice";
import { CustomerService } from "./service/customerservice";
import { PhotoService } from "./service/photoservice";
import { VersionService } from "./service/versionservice";
import { AppConfigComponent } from "./app.config.component";
import { MenuModule } from "primeng/menu";
import { TieredMenuModule } from "primeng/tieredmenu";
import { ButtonModule } from "primeng/button";
import { FormLayoutComponent } from "./form-layout/form-layout.component";
import { InputTextModule } from "primeng/inputtext";
import { TabViewModule } from "primeng/tabview";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { CheckboxModule } from "primeng/checkbox";
// import { RippleModule } from 'primeng/ripple';
import {ChartModule} from 'primeng/chart';

import {ProgressBarModule} from 'primeng/progressbar';
@NgModule({
    declarations: [AppComponent, HomeComponent, AppConfigComponent, FormLayoutComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AutoCompleteModule,
        MenuModule,
        ButtonModule,
        TieredMenuModule,
        CommonModule,
        InputTextModule,
        CheckboxModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule,
        RadioButtonModule,
        InputTextareaModule,
        DropdownModule,
        FormsModule,
        ChartModule,
        ProgressBarModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CarService,
        CountryService,
        EventService,
        NodeService,
        IconService,
        CustomerService,
        PhotoService,
        VersionService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
