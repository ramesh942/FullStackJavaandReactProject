const KEY = "saved_github_devs";

export const getBookmarks = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? [];
  } catch {
    return [];
  }
};

export const saveBookmark = (dev) => {
  const current = getBookmarks();
  // Avoid duplicate bookmarks using .some()
  if (current.some((item) => item.login === dev.login)) return current;

  const updated = [...current, dev];
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};

export const removeBookmark = (login) => {
  const updated = getBookmarks().filter((item) => item.login !== login);
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};
