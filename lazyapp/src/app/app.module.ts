import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/User/user-list/user-list.component';
import { UserService } from './services/user.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Table2Component } from './components/table2/table2.component';
import { TextComponent } from './components/controls/text/text.component';
import { DropdownComponent } from './components/controls/dropdown/dropdown.component';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { RadiobuttonComponent } from './components/controls/radiobutton/radiobutton.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    Table2Component,
    TextComponent,
    DropdownComponent,
    CheckboxComponent,
    RadiobuttonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    DropdownModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
