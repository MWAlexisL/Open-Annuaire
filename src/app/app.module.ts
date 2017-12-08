import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import {TableFirmComponent} from './table-firm/table-firm.component';
import { MenuFilterComponent } from './menu-filter/menu-filter.component';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    AppComponent,
    TableFirmComponent,
    MenuFilterComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
