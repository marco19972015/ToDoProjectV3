import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ToDoComponent } from './container/to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
