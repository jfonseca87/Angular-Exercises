import { Component, Input, OnInit } from '@angular/core';
import { ControlHTML } from 'src/app/models/control-html';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() confControl: ControlHTML = { id: '', name: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
