import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { GoalComponent } from './goal/goal.component';
import { CodeName } from './shared/code-name';
import { CodeNamesService } from './shared/code-names.service';

@Component({
  selector: 'app-code-names',
  templateUrl: './code-names.component.html',
  styleUrls: ['./code-names.component.scss']
})
export class CodeNamesComponent implements OnInit {
  isRedFirst = true;
  codeNames: CodeName[];

  constructor(
    private dialog: MatDialog,
    private cnService: CodeNamesService
  ) { }

  ngOnInit(): void {
    this.cnService.getCodeNames(this.isRedFirst)
      .subscribe(cn => this.codeNames = cn)
  }

  setNewGame() {
    this.cnService.getCodeNames(this.isRedFirst, true)
      .subscribe(cn => this.codeNames = cn);
  }

  showGoal() {
    const dialogRef = this.dialog.open(GoalComponent, {
      width: '270px', 
      data: {codeNames: this.codeNames},
      panelClass: 'goal-dialog'
    });
  }
}
