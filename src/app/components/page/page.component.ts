import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Page } from '../../models/page';
import { NotebookService } from '../../services/notebook.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  pages: Page[] = [];
  notes: string = '';
  currentPage: string = '';

  constructor(
    private pageService: NotebookService,
    private router: Router,
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {
    this.pages = this.pageService.pagesList;
  }

  ngOnInit(): void {
    this.getCurrentPage();
  }

  getCurrentPage() {
    this.route.params.subscribe((params) => {

      const page = params['id'];
      if (this.inRange(+page, 0, 5)) {
        this.currentPage = page;
        if (this.sessionService.getSession(`page-${this.currentPage}`))
          this.notes = this.sessionService.getSession(
            `page-${this.currentPage}`
          );
        else this.notes = '';
      } else {
        this.router.navigate(['/404']);
      }
    });
  }

  inRange(x: number, min: number, max: number) {
    return (x - min) * (x - max) <= 0;
  }

  pageRedirection = (page: any): void => {
    this.router.navigate([`page/${page}`]);
  };

  savePageData = (): void => {
    if (this.notes !== '') {
      this.sessionService.setSession(`page-${this.currentPage}`, this.notes);
    }
  };
}
