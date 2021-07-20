import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sectionone',
  templateUrl: './sectionone.component.html',
  styleUrls: ['./sectionone.component.css']
})
export class SectiononeComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
