import { Agenda } from "../Models/Agenda";

export class AgendaService {
    agendas: Agenda[] = [
        new Agenda('High', 'Make the bed!'),
        new Agenda('High', 'Wash your teeth!')
    ];

    getEntireAgenda() { return this.agendas; }

    createAgenda(priority: string, userInput: string){
        let newGaol = new Agenda(priority, userInput)
        this.agendas.push(newGaol)
    }
}