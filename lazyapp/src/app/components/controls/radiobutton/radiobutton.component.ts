import { Component, Input, OnInit } from '@angular/core';
import { ControlHTML } from 'src/app/models/control-html';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {
  @Input() confControl: ControlHTML = { id: '', name: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
