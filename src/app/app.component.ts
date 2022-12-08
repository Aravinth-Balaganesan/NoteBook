import { Component, HostListener, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'NoteBook';

  // constructor(private sessionStorage : SessionService){
  //   if (this.sessionStorage.getSession('__lock')) {
  //     this.sessionStorage.clear();
  //   }

  //   this.sessionStorage.setSession('__lock', '1');
  // }

  // @HostListener('window:beforeunload') unload() {
  //   this.sessionStorage.removeItem('__lock');
  // }

  ngOnInit(): void {
    
  }
}
