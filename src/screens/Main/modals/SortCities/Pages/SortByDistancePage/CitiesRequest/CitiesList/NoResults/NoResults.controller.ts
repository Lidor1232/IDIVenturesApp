export function onGetIsNoResult({searchInput}: {searchInput: string}): boolean {
  return searchInput.length > 0;
}
