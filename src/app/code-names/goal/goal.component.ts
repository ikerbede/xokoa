import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CodeName } from '../shared/code-name';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<GoalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {codeNames: Observable<CodeName[]>}
  ) { }

  ngOnInit(): void {
  }
}
