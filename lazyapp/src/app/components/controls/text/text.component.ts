import { Component, Input, OnInit } from '@angular/core';
import { ControlHTML } from 'src/app/models/control-html';
import { ControlTypesEnum } from 'src/app/models/control-types-enum';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() confControl: ControlHTML = { id: '', name: '', type: ControlTypesEnum.Text };

  constructor() { }

  ngOnInit(): void {
  }

}
