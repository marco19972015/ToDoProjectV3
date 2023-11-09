import { Component, DoCheck } from '@angular/core';
import { AgendaService } from 'src/app/Services/agenda.service';


@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements DoCheck{

  // Inject our service in the constructor
  constructor(private agendaService: AgendaService){}

  priority: string = '';
  userInput: string = '';
  
  // our issues lies below, we dont get the count we are asking for
  // My thought process is that this happens because it is only called once
  // however even if I put the prop in the DoCheck hook it won't work
  highCount = 0;
  mediumCount = 0
  lowCount = 0;


  ngDoCheck(){
    this.highCount = this.agendaService.getHighGoals()
    this.mediumCount = this.agendaService.getMediumGoals()
    this.lowCount = this.agendaService.getLowGoals()
  }

  // Create a method to create a new goal
  createNewGoal(){
    // Use the prop with the service to call the method to createa a new goal
    this.agendaService.createAgenda(this.priority, this.userInput);    
  }
}
