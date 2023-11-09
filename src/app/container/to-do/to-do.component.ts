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

  // keep track of props this component
  priority: string = '';
  userInput: string = '';
  
  // Create a method to create a new goal
  createNewGoal(){
    // Use the prop with the service to call the method to createa a new goal
    this.agendaService.createAgenda(this.priority, this.userInput);    
  }
  
  // keep track of props in this component
  highCount = 0;  
  mediumCount = 0
  lowCount = 0;
  // Update after adding new goals to our list
  ngDoCheck(){
    this.highCount = this.agendaService.getHighGoals()
    this.mediumCount = this.agendaService.getMediumGoals()
    this.lowCount = this.agendaService.getLowGoals()
  }


  // prop to keep track of what button has been selected  
  selectedFilterRadioButton: string = 'high'
  onFilterChange(value: string){  // passing in the $event to get the data from our child component
    this.selectedFilterRadioButton = value;    
  }
}
