import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private iconsService: AppIconsService
  ) {}

  ngOnInit() {
  }
}
