import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  // What I want to pass to another component
  // I want to pass the chosenPriority and list
  // I need that passed so I can filter it

  
  // in this property we want to recieve the input from the ngFor directive
  @Input() list: string = '';

  // Shows the template 
  showTemplate: boolean = true;
  // This is binded using ngModel
  chosenPriority: string = ''



  addToList(){
    console.log(this.list);
    console.log(this.chosenPriority);
    // removes the template
    this.showTemplate = !this.showTemplate;
  }
}
