import { Component } from '@angular/core';

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  userInput: string = ''

  showTask(){
    console.log(this.userInput);
  }

}
