import { Component, OnInit, Input } from '@angular/core';
import { GoalLine, NBLINES, setGoalGrid } from '../shared/cn-models';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  @Input() starter: 'red' | 'blue';
  lines: GoalLine[] = [];

  constructor() { }

  ngOnInit(): void {
    this.lines = setGoalGrid(this.starter);
  }
}
