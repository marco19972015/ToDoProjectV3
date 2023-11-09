import { Component, DoCheck } from '@angular/core';
import { AgendaService } from 'src/app/Services/agenda.service';


@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements DoCheck{
  constructor(private agendaService: AgendaService){}

  priority: string = '';
  userInput: string = '';
  
  // Create a method to create a new goal
  createNewGoal(){
    this.agendaService.createAgenda(this.priority, this.userInput);    
  }

  highCount = 0;  
  mediumCount = 0
  lowCount = 0;
  ngDoCheck(){
    this.highCount = this.agendaService.getHighGoals()
    this.mediumCount = this.agendaService.getMediumGoals()
    this.lowCount = this.agendaService.getLowGoals()
  }


  // prop to keep track of what button has been selected  
  selectedFilterRadioButton: string = 'High'
  onFilterChange(value: string){  // passing in the $event to get the data from our child component
    this.selectedFilterRadioButton = value;     
    console.log(this.selectedFilterRadioButton);
       
  }

  agendaList = this.agendaService.getEntireAgenda();
}
