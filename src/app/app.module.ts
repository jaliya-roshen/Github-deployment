import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {SohoButtonModule, SohoComponentsModule, SohoLocaleModule} from 'ids-enterprise-ng';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { HeaderComponent } from './header/header.component';
import { PersonalizeMenuComponent } from './personalize-menu/personalize-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TreegridIssueComponent } from "./treegrid-issue/treegrid-issue.component";
import { DrilldownComponent } from './treegrid-issue/drilldown/drilldown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalizeMenuComponent,
    TreegridIssueComponent,
    DrilldownComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SohoLocaleModule,
    SohoButtonModule,
    SohoLocaleInitializerModule,
    SohoComponentsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
