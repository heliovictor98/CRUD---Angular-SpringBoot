import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front-end'},
    {_id: '2', name: 'Spring', category: 'Back-end'},
  ];
  displayedColumns = ['name', 'category'];

  constructor(){
    // this.courses = [];
  }
}
