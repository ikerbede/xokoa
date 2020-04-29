import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GoalLine, setGoalGrid } from '../shared/cn-models';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  lines: GoalLine[] = [];

  constructor(
    private dialogRef: MatDialogRef<GoalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {starter: 'red' | 'blue'}
  ) { }

  ngOnInit(): void {
    this.lines = setGoalGrid(this.data.starter);
  }
}
