import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-close-widget',
  imports: [],
  templateUrl: './close-widget.html',
  styleUrl: './close-widget.css',
})
export class CloseWidget {
  @Output() canClose = new EventEmitter<void>();

  closeWidget() {
    this.canClose.emit();
    // Logic to close the widget, e.g., emit an event or change a state variable
    console.log('Widget closed');
  }
}
