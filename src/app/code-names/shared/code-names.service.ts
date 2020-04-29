import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/xokoa/src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map, shareReplay } from 'rxjs/operators';
import { NBCOLUMNS, NBLINES } from './cn-models';
import { ShufflePipe } from '../../shared/shuffle.pipe';

@Injectable({
  providedIn: 'root'
})
export class CodeNamesService {
  private words$: Observable<string[]>;

  constructor(
    private http: HttpClient,
    private shufflePipe: ShufflePipe
  ) {}

  // Get words
  private initWordsIfNeeded(force = false) {
    if (force || !this.words$) {
      this.words$ = this.http.get<any>(`${environment.CODENAMES_API_URL}/words`)
        .pipe(shareReplay(1));
    }
  }

  getAllWords(force = false): Observable<string[]> {
    this.initWordsIfNeeded(force);
    return this.words$;
  }

  getWords(): Observable<string[]> {
    this.initWordsIfNeeded();    
    return this.words$.pipe(map(words =>
      this.shufflePipe.transform(words, NBLINES * NBCOLUMNS)));
  }

}
