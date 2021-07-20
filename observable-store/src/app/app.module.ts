import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './app/components/user/user.component';
import { UserFormComponent } from './app/components/user-form/user-form.component';
import { UserFormTabComponent } from './app/components/user-form-tab/user-form-tab.component';
import { UserFormToolbarComponent } from './app/components/user-form-toolbar/user-form-toolbar.component';
import { UserStoreService } from '../app/app/services/user-store.service';
import { ReactiveFormsModule } from '@angular/forms';
// import {CdkTableModule} from '@angular/cdk/table';
// import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from 'material';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    UserFormTabComponent,
    UserFormToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // MatCardModule,
    // MatButtonModule,
    // MatInputModule
  ],
  providers: [
    UserStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
