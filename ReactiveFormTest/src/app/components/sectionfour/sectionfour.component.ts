import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sectionfour',
  templateUrl: './sectionfour.component.html',
  styleUrls: ['./sectionfour.component.css']
})
export class SectionfourComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
