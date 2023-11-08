import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  // CHILD DIRECTIVE
  // in this property we want to recieve the input from the ngFor directive
  @Input() list: string = '';
}
