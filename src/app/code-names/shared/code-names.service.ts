import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/xokoa/src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map, shareReplay } from 'rxjs/operators';
import { ShufflePipe } from '../../shared/shuffle.pipe';
import { CodeName, NBCOLORED, NBCOLUMNS, NBLINES, NBWHITES } from './code-name';

@Injectable({
  providedIn: 'root'
})
export class CodeNamesService {
  private words$: Observable<string[]>;
  private codeNames$: Observable<CodeName[]>;

  constructor(
    private http: HttpClient,
    private shufflePipe: ShufflePipe
  ) {}

  /** GET WORDS */

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

  /** GET CODE NAMES */

  private getColors(isRedFirst: boolean): string[] {
    const whites = Array.from({length: NBWHITES}, x => 'white');
    const reds = Array.from({length: NBCOLORED}, x => 'red');
    const blues = Array.from({length: NBCOLORED}, x => 'blue');
    const colors = whites.concat([...reds]).concat([...blues]);
    colors.push('black');
    colors.push(isRedFirst ? 'red' : 'blue');
    return this.shufflePipe.transform(colors) as string[];
  }

  private initCodeNames(isRedFirst: boolean) {
    const gridSize = NBLINES * NBCOLUMNS;
    this.codeNames$ = this.getAllWords().pipe(
      map(words => this.shufflePipe.transform(words, gridSize) as string[]),
      map(gridWords => {
        let codeNames: CodeName[] = [];
        const gridColors = this.getColors(isRedFirst);
        for (let i = 0; i < gridSize; i++) {
          codeNames.push({
            index: i,
            word: gridWords[i],
            color: gridColors[i]
          })
        }
        return codeNames;
      })
    );
  }

  getCodeNames(isRedFirst: boolean, force = false) {
    if (force || !this.codeNames$) {
      this.initCodeNames(isRedFirst);
    }
    return this.codeNames$;
  }

}
