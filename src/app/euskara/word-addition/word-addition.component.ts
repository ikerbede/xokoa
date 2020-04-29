import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { Word } from '../shared/word';
import { EuskaraService } from '../shared/euskara.service';

@Component({
  selector: 'app-word-addition',
  templateUrl: './word-addition.component.html',
  styleUrls: ['./word-addition.component.scss']
})
export class WordAdditionComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  word: Word = {name: '', translations: [], keywords: []};

  constructor(
    private dialogRef: MatDialogRef<WordAdditionComponent>,
    private euskaraService: EuskaraService
  ) { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent, type: 't' | 'k'): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (type === 't') {
        this.word.translations.push(value.trim());
      } else if (type === 'k') {
        this.word.keywords.push(value.trim());
      }
    }

    if (input) {
      input.value = '';
    }
  }

  remove(value: string, type: 't' | 'k'): void {
    let collection: string[];
    if (type === 't') {
      collection = this.word.translations;
    } else if (type === 'k') {
      collection = this.word.keywords;
    }
    const index = collection.indexOf(value);
    if (index >= 0) {
      collection.splice(index, 1);
    }
  }

  next() {
    this.euskaraService.addWord(this.word)
      .subscribe(() => this.word = {name: '', translations: [], keywords: []});
  }

  ok() {
    this.euskaraService.addWord(this.word);
    this.dialogRef.close();
  }
}
