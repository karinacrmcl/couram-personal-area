export function formatDuration(duration: number) {
  function formatSeconds(sec: number) {
    return (sec - (sec %= 60)) / 60 + (9 < sec ? ":" : ":0") + sec;
  }
  return formatSeconds(duration);
}
