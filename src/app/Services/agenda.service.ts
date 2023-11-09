import { Injectable } from "@angular/core";
import { Agenda } from "../Models/Agenda";

@Injectable()
export class AgendaService {
    
    agendas: Agenda[] = [
        new Agenda('High', 'Make the bed!'),
        new Agenda('Medium', 'Wash your teeth!'),
        new Agenda('Low', 'Go to the Gym'),
        new Agenda('Low', 'Wash your teeth!')
    ];

    getEntireAgenda() { return this.agendas; }

    createAgenda(priority: string, userInput: string){
        let newGaol = new Agenda(priority, userInput)
        this.agendas.push(newGaol)
    }


    highGoals: number = 0;
    mediumGoals: number = 0;
    lowGoals: number = 0; 

    getHighGoals(){
        return this.highGoals = this.agendas.filter(p => p.priority === 'High').length;
    }

    getMediumGoals(){
        return this.mediumGoals = this.agendas.filter(p => p.priority === 'Medium').length;
    }

    getLowGoals(){
        return this.agendas.filter(p => p.priority === 'Low').length;
    }
    
}