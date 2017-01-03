import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VersionDecoderComponent } from './version-decoder/version-decoder.component';
import { CasesDashboardComponent } from './cases-dashboard/cases-dashboard.component';
import { HeaderComponent } from './header.component';
import { InfoToViewComponent } from './cases-dashboard/info-to-view.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    VersionDecoderComponent,
    CasesDashboardComponent,
    HeaderComponent,
    InfoToViewComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
