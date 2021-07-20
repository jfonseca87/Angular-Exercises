import { Component, Input, OnInit } from '@angular/core';
import { ControlHTML } from 'src/app/models/control-html';
import { ControlTypesEnum } from 'src/app/models/control-types-enum';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() confControl: ControlHTML = { id: '', name: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
