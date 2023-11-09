import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ToDoComponent } from './container/to-do/to-do.component';
import { ToDoListComponent } from './container/to-do/to-do-list/to-do-list.component';
import { FilterComponent } from './container/to-do/filter/filter.component';
import { AgendaService } from './Services/agenda.service';
import { SetBackgroundColorDirective } from './CustomDirectives/set-background-color.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { PropHoverDirective } from './CustomDirectives/prop-hover.directive';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ToDoComponent,
    ToDoListComponent,
    FilterComponent,
    SetBackgroundColorDirective,
    HighlightDirective,
    PropHoverDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
