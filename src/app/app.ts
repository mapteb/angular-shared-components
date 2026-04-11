import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-nested-layouts';
  isMenuVisible = signal(true);;
  isExpanded = signal(true);

  toggleLeftMenu() {
    this.isMenuVisible.update((value) => !value);    
  }
}
