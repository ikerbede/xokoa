import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GoalComponent } from './goal/goal.component';
import { CodeNamesService } from './shared/code-names.service';

@Component({
  selector: 'app-code-names',
  templateUrl: './code-names.component.html',
  styleUrls: ['./code-names.component.scss']
})
export class CodeNamesComponent implements OnInit {
  starter = 'red';
  words: string[];

  constructor(
    private dialog: MatDialog,
    private cnService: CodeNamesService
  ) { }

  ngOnInit(): void {
    this.cnService.getWords().subscribe(words => this.words = words);
  }

  showGoal() {
    const dialogRef = this.dialog.open(GoalComponent, {
      width: '230px', 
      data: {starter: this.starter},
      panelClass: 'goal-dialog'
    });
  }
}
