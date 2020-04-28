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

// Method to shuffle an array
export function shuffle(array) {
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

  return array;
}

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
