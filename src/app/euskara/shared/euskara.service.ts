import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Word } from './word';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map, tap } from 'rxjs/operators';
import { environment } from 'projects/xokoa/src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EuskaraService {
  private initialWords: Word[];
  private wordsSource: BehaviorSubject<Word[]> = new BehaviorSubject([]);
  private keywords$: Observable<string[]>;

  constructor(private http: HttpClient) {}

  // Get keywords
  private initKeywordsIfNeeded(force = false) {
    if (force || !this.keywords$) {
    this.keywords$ = this.http.get<string[]>(`${environment.EUSKARA_API_URL}/keywords`)
        .pipe(shareReplay(1));
    }
  }

  getKeywords(force = false): Observable<string[]> {
    this.initKeywordsIfNeeded(force);
    return this.keywords$;
  }

  // Get initial word list
  private initWordsIfNeeded(force = false) {
    if (force || !this.initialWords) {
      this.http.get<Word[]>(`${environment.EUSKARA_API_URL}/words`)
        .pipe(shareReplay(1))
        .subscribe(words => {
          this.initialWords = words;
          this.wordsSource.next([...words]);
        });
    }
  }

  getWords(force = false): Observable<Word[]> {
    this.initWordsIfNeeded(force);
    return this.wordsSource.asObservable();
  }

  // Filter words
  filterWords(input: string, keywords: string[]): void {
    this.wordsSource.next(this.filterByKeywords(
      this.filterByInput(this.initialWords, input), keywords));
  }

  private filterByInput(words: Word[], input: string): Word[] {
    if (input.trim()) {
      return words.filter(word =>
        word.name.indexOf(input) >= 0 || word.translations.some(t => t.indexOf(input) >= 0));
    } else {
      return words;
    }
  }

  private filterByKeywords(words: Word[], keywords: string[]): Word[] {
    if (keywords.length > 0) {
      return words.filter(word => word.keywords.some(k => keywords.indexOf(k)));
    } else {
      return words;
    }
  }

  // Add new word
  addWord(word: Word): Observable<Word> {
    // FIXME: Backend task
    this.keywords$.subscribe(keywords => word.keywords
      .filter(k => keywords.indexOf(k) === -1)
      .forEach(newK => this.http.post<void>(`${environment.EUSKARA_API_URL}/keywords`, newK)));

    return this.http.post<Word>(`${environment.EUSKARA_API_URL}/words`, word)
      .pipe(tap(word => {
        this.initialWords.push(word);
        this.wordsSource.next([...this.initialWords]);
      }));
  }
}
