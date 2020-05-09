export const NBLINES = 5;
export const NBCOLUMNS = 5;
export const NBWHITES = 7;
export const NBCOLORED = 8;

export interface CodeName {
  index: number; 
  word: string;
  color: string;
  selected?: boolean;
}
