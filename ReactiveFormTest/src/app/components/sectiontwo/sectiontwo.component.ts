import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sectiontwo',
  templateUrl: './sectiontwo.component.html',
  styleUrls: ['./sectiontwo.component.css']
})
export class SectiontwoComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
