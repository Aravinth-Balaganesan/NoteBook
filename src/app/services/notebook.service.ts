import { Injectable } from '@angular/core';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root',
})
export class NotebookService {
  pagesList: Page[] = [
    {
      page: '1',
      notes: '',
    },
    {
      page: '2',
      notes: '',
    },
    {
      page: '3',
      notes: '',
    },
    {
      page: '4',
      notes: '',
    },
    {
      page: '5',
      notes: '',
    },
  ];

  constructor() {}
}
