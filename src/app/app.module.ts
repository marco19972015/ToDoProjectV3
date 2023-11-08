import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ToDoComponent } from './container/to-do/to-do.component';
import { ToDoListComponent } from './container/to-do/to-do-list/to-do-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ToDoComponent,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
