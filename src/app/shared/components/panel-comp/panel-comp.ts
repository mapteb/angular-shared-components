import { Component, input, output } from '@angular/core';
import { CloseWidget } from '../close-widget/close-widget';

@Component({
  selector: 'app-panel-comp',
  imports: [CloseWidget],
  templateUrl: './panel-comp.html',
  styleUrl: './panel-comp.css',
})
export class PanelComp {
  
  title = input<string>(''); // using input() function to define an input property
  panelBodyText = input<string>('Panel body text placeholder.');  
  openerCanClose = output<void>(); // using output() function to define an output property  

  emitClosePanel() {
    console.log('>> emitting close panel event from panel component');
    this.openerCanClose.emit();
  }
}
