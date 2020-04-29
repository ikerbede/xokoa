import { shuffle } from '../../shared/shuffle.pipe';

export const NBLINES = 5;
export const NBCOLUMNS = 5;

export interface GoalLine {
  cells: GoalCell[];
}

export interface GoalCell {
  color: string;
}

// Colors to dispatch into grid: 1 black, 7 whites, 8 reds, 8 blues
// TOREMIND: one more red or blue for the starter
const colorsWithALack: string[] = [
  'black', 'white', 'white', 'white', 'white', 'white', 'white', 'white',
  'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',
  'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'
];

// Method to create and fill a goal grid
export function setGoalGrid(starter: 'red' | 'blue'): GoalLine[] {
  let grid: GoalLine[] = [];
  let colors = [...colorsWithALack];
  colors.push(starter);
  shuffle(colors);
  for (let i = 0; i < NBLINES; i++) {
    let line: GoalLine = {cells: []};
    for (let j = 0; j < NBCOLUMNS; j++) {
      line.cells.push({color: colors.pop()})
    }
    grid.push(line);
  }
  return grid
}
