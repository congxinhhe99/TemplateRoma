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

import { SliderModule } from "primeng/slider";
import { ChartModule } from "primeng/chart";
import { RatingModule } from "primeng/rating";
import { ProgressBarModule } from "primeng/progressbar";
import { ChipsModule } from "primeng/chips";
import { InputNumberModule } from "primeng/inputnumber";
import { CalendarModule } from "primeng/calendar";
import { ColorPickerModule } from "primeng/colorpicker";
import { InputSwitchModule } from "primeng/inputswitch";
import { ListboxModule } from "primeng/listbox";
import { MultiSelectModule } from "primeng/multiselect";
import { ToggleButtonModule } from "primeng/togglebutton";
import { SelectButtonModule } from "primeng/selectbutton";
import { InvalidStateComponent } from './invalid-state/invalid-state.component';
import { DisplayComponent } from './components/display/display.component';
import { ElenvationComponent } from './components/elenvation/elenvation.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { TextComponent } from './components/text/text.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { SpacingComponent } from './components/spacing/spacing.component';
import { TypographyComponent } from './components/typography/typography.component';
import { CrudComponent } from './components/crud/crud.component';

//
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DocumentsComponent } from './components/documents/documents.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AppConfigComponent,
        FormLayoutComponent,
        InvalidStateComponent,
        DisplayComponent,
        ElenvationComponent,
        FlexboxComponent,
        TextComponent,
        WidgetsComponent,
        SpacingComponent,
        TypographyComponent,
        CrudComponent,
        TimelineComponent,
        LoginComponent,
        ErrorComponent,
        NotFoundComponent,
        DocumentsComponent,
    ],
    imports: [
        TableModule,
        ContextMenuModule,
        FormsModule,
        DialogModule,
        ToastModule,
        FileUploadModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        ToolbarModule,
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
        ProgressBarModule,
        RatingModule,
        SliderModule,
        ChipsModule,
        InputNumberModule,
        CalendarModule,
        ColorPickerModule,
        InputSwitchModule,
        ListboxModule,
        MultiSelectModule,
        ToggleButtonModule,
        SelectButtonModule,
        
        
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
