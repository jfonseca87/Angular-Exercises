import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectionEnum } from '../utils/section.enum';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css'],
})
export class TestformComponent implements OnInit {
  testForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      sectionOneGroup: this.fb.group({
        field1: ['', Validators.required],
        field2: [''],
        field3: [''],
      }),
      sectionTwoGroup: this.fb.group({
        field4: [''],
        field5: ['', Validators.required],
        field6: [''],
      }),
      sectionThreeGroup: this.fb.group({
        field7: [''],
        field8: [''],
        field9: ['', Validators.required],
        field10: [''],
        field11: [''],
        field12: ['', Validators.required],
      })
    });
  }

  ngOnInit(): void {

  }

  getSectionOneGroupControls(section: number): FormGroup {
    let sectionGroup = '';
    switch (section) {
      case SectionEnum.Section1:
        sectionGroup = 'sectionOneGroup';
        break;
      case SectionEnum.Section2:
        sectionGroup = 'sectionTwoGroup';
        break;
      case SectionEnum.Section3:
        sectionGroup = 'sectionThreeGroup';
        break;
      default:
        break;
    }

    return this.testForm.get(sectionGroup) as FormGroup;
  }
}
