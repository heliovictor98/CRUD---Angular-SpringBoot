import { Component } from '@angular/core';
import { catchError, Observable, of, delay } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  //CoursesService: CoursesService;

  constructor(private CoursesService: CoursesService   ){
    // this.courses = [];
    //this.CoursesService = new CoursesService();
    this.courses$ = this.CoursesService.list()
    .pipe(

      catchError(error => {
        console.log(error);

        return of([])
      })
    );
  }

  ngOnInit(){

  }
}
