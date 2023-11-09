import { Agenda } from "../Models/Agenda";

export class AgendaService {
    agendas: Agenda[] = [
        new Agenda(1, 'Make the bed!'),
        new Agenda(1, 'Wash your teeth!')
    ];

    getEntireAgenda() { return this.agendas; }

    createAgenda(order: number, userInput: string){
        let newGaol = new Agenda(order, userInput)
        this.agendas.push(newGaol)
    }
}