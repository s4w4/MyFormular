import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyFormListComponent } from './my-form-list/my-form-list.component';
import { MyFormItemComponent } from './my-form-item/my-form-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MyFormListComponent,
    MyFormItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
