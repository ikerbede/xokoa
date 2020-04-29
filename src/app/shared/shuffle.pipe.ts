import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shuffle'})
export class ShufflePipe implements PipeTransform {
  transform(array: any[], length?: number): any[] {
    if (array.length < length) {
      throw new RangeError('Length passed in ShufflePipe is higher than array length');
    }
    const results = [...array];
    shuffle(results);
    if (length) {
      return results.slice(0, length);
    }
    return results;
  }
}

// Method to shuffle an array
export function shuffle(array: any[]): void {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}
