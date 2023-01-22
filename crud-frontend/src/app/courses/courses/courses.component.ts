import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  CoursesService: CoursesService;

  constructor(){
    // this.courses = [];
    this.CoursesService = new CoursesService();
    this.courses = this.CoursesService.list();
  }
}
