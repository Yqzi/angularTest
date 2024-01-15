import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastInterval: number = 0;

  constructor() { }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastInterval + 1);
      this.lastInterval++;
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }

}
