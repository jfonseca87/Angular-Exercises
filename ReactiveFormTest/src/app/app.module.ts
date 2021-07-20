import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestformComponent } from './components/testform/testform.component';
import { SectiononeComponent } from './components/sectionone/sectionone.component';
import { SectiontwoComponent } from './components/sectiontwo/sectiontwo.component';
import { SectionthreeComponent } from './components/sectionthree/sectionthree.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionfourComponent } from './components/sectionfour/sectionfour.component';

@NgModule({
  declarations: [
    AppComponent,
    TestformComponent,
    SectiononeComponent,
    SectiontwoComponent,
    SectionthreeComponent,
    SectionfourComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
