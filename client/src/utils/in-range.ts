export function inRange(x: number, range: number[]) {
  return range.length === 0 ? true : x >= range[0] && x <= range[1];
}
