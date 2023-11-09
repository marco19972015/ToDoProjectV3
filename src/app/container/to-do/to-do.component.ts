import { Component } from '@angular/core';
import { AgendaService } from 'src/app/Services/agenda.service';


@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  constructor(private agendaService: AgendaService){}

  priority: string = '';
  userInput: string = '';

  createNewGoal(){
    this.agendaService.createAgenda(this.priority, this.userInput);
  }


}
