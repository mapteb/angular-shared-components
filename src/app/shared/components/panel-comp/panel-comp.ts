import { Component, EventEmitter, input, Input, OnDestroy, output, Output } from '@angular/core';
import { CloseWidget } from '../close-widget/close-widget';
import { O } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-panel-comp',
  imports: [CloseWidget],
  templateUrl: './panel-comp.html',
  styleUrl: './panel-comp.css',
})
export class PanelComp {
  //@Input() title: string = '';
  title = input<string>(''); // using input() function to define an input property
  // @Output() openerCanClose = new EventEmitter<void>();
  openerCanClose = output<void>(); // using output() function to define an output property  

  emitClosePanel() {
    console.log('>> emitting close panel event from panel component');
    this.openerCanClose.emit();
  }
}
