import { Component} from '@angular/core';
import { AgendaService } from 'src/app/Services/agenda.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  selectedPriority: string = '';

  constructor(private agendaService: AgendaService){}

  agendaList = this.agendaService.getEntireAgenda();


    
  

}
