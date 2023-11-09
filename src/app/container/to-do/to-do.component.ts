import { Component } from '@angular/core';
import { AgendaService } from 'src/app/Services/agenda.service';


@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  constructor(private agendaService: AgendaService){}




  

  // create an array to the initial input push method
  userInputArray: string[] = [];

  // Store the initial value of the user input
  userInput: string = '';

  // have this method be the one that adds the input to the array 
  addTaskToArray(){
    this.userInputArray.push(this.userInput);
  }

}
