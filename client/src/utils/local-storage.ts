export function getStoredIds() {
  const storedIds = JSON.parse(localStorage.getItem("ids") || "[]");
  return storedIds;
}

export function storeId(item: string) {
  const ids = getStoredIds();
  if (checkStoredIds(item)) {
    let index = ids.indexOf(item);
    if (index !== -1) {
      ids.splice(index, 1);
    }
    localStorage.setItem("ids", JSON.stringify(ids));
  } else {
    ids.push(item);
    localStorage.setItem("ids", JSON.stringify(ids));
  }
}

export function checkStoredIds(item: string) {
  return getStoredIds().includes(item);
}
