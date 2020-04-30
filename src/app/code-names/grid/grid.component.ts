import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CodeName } from '../shared/code-name';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() codeNames: Observable<CodeName[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
