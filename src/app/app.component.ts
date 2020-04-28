import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { AppIconsService } from './app-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tabs = [
    {label: 'Euskara', path: 'euskara', icon: 'school'},
    {label: 'Code names', path: 'code-names', icon: 'casino'}
  ];
  activity: Observable<string>;

  constructor(
    private router: Router,
    private iconsService: AppIconsService
  ) {}

  ngOnInit() {
    this.activity = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => this.tabs.find(tab => tab.path === event.url.split('/')[1]).label)
    ); 
  }
}
