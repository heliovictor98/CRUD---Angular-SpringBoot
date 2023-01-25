import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of, delay } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  //CoursesService: CoursesService;

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog ){
    // this.courses = [];
    //this.CoursesService = new CoursesService();
    this.courses$ = this.CoursesService.list()
    .pipe(

      catchError(error => {
        this.onError('Erro de API.');

        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(){

  }
}
