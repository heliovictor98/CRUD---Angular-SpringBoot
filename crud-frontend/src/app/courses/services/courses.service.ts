import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  list(): Course[] {
    return [
      {_id: '1', name: 'Angular', category: 'Front-end'},
    ];
  }

}
