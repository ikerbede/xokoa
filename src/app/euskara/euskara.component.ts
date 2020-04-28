import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { EuskaraService } from './shared/euskara.service';
import { Word } from './shared/word';
import { WordAdditionComponent } from './word-addition/word-addition.component';

@Component({
  selector: 'app-euskara',
  templateUrl: './euskara.component.html',
  styleUrls: ['./euskara.component.scss']
})
export class EuskaraComponent implements OnInit {
  private initialWords: Word[];

  // Word search
  keywords: Observable<string[]>;
  keywordsFC = new FormControl([]);
  search = {input: '', keywords: []};

  // Word list
  words: Word[] = [];

  constructor(
    private dialog: MatDialog,
    private euskaraService: EuskaraService
  ) { }

  ngOnInit(): void {
    this.euskaraService.getWords().subscribe(words => {
      this.initialWords = words;
      this.words = [...this.initialWords];
    });
    this.keywords = this.euskaraService.getKeywords();
    this.onSearchKeywordsChanges();
  }

  onSearchKeywordsChanges() {
    this.keywordsFC.valueChanges.subscribe((newValues: string[]) => {
      this.search.keywords = newValues;
      this.onSearchChanges();
    });
  }

  onSearchChanges() {
    this.euskaraService.filterWords(this.search.input, this.search.keywords);
  }

  selectWord(word: Word) {
    word.selected = !word.selected;
  }

  addWord() {
    const dialogRef = this.dialog.open(WordAdditionComponent, {width: '300px', data: {}});
  }

}
