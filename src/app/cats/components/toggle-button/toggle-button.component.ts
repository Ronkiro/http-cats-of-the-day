import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Input() startChecked = false;
  @Output() stateChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  toggleState(): void {
    this.startChecked = !this.startChecked;
    this.stateChange.emit(this.startChecked);
  }

}
