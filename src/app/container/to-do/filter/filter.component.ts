import { Component, Input } from '@angular/core';

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
}
