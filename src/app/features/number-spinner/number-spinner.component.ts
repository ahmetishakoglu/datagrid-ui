import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-number-spinner',
  standalone: true,
  imports: [],
  templateUrl: './number-spinner.component.html',
  styleUrl: './number-spinner.component.css'
})
export class NumberSpinnerComponent {
  @Output() spinner = new EventEmitter<number>();
  @Input() spinnerValue = 0;

  constructor() {
  }

  add() {
    this.spinnerValue++;
    this.spinner.emit(this.spinnerValue)
  }

  sub() {
    this.spinnerValue = this.spinnerValue > 0 ? (this.spinnerValue - 1) : 0;
    this.spinner.emit(this.spinnerValue)
  }
}
