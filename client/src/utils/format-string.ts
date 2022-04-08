export function formatString(text: String, count: number) {
  const string = text.split("").slice(0, count);
  return string.length >= count ? string.join("") + "..." : string.join("");
}
