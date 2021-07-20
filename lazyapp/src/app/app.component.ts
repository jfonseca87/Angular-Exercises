import { Component } from '@angular/core';
import { ControlHTML } from './models/control-html';
import { ControlTypesEnum } from './models/control-types-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lazyapp';
  textControl: ControlHTML = {
    id: 'identificacion',
    name: 'identificacion',
    type: ControlTypesEnum.Text,
    value: 'Text',
    placeholder: 'Text example',
    label: 'Text Example'
  };
}
