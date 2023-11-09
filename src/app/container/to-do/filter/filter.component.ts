import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  // We can now use these props as attributes in our selector
  @Input() 
  high: number = 0;

  @Input() 
  medium: number = 0;

  @Input() 
  low: number = 0; 

  // creating a custom event for the selected radio buttons change
  @Output()
  selectedFilterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  // Assigns the selected radio button 
  selectedFilterRadioButton : string = 'high'

  // Method that will raise the custom event
  onSelectedFilterRadioButtonChange(){
    // raising the event
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton)
  }
}
