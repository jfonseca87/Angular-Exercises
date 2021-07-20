import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sectionthree',
  templateUrl: './sectionthree.component.html',
  styleUrls: ['./sectionthree.component.css']
})
export class SectionthreeComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
