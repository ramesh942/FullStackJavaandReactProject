import { getBookmarks, saveBookmark, removeBookmark } from "./storage.js";

const usernameInput = document.querySelector("#usernameInput");
const profileContainer = document.querySelector("#profileContainer");
const bookmarkList = document.querySelector("#bookmarkList");

let currentProfile = null;

// Render saved bookmarks list
const renderBookmarks = () => {
  const bookmarks = getBookmarks();
  bookmarkList.innerHTML = bookmarks
    .map(
      (dev) => `
      <li>
        <span><strong>${dev.name}</strong> (@${dev.login}) — ${dev.repos} repos</span>
        <button type="button" data-action="remove" data-login="${dev.login}">Remove</button>
      </li>`
    )
    .join("");
};

// Safe API Fetch with response.ok + try/catch/finally (Topic 11)
const fetchGitHubUser = async (username) => {
  const trimmed = username.trim();
  if (!trimmed) {
    profileContainer.innerHTML = "";
    return;
  }

  profileContainer.innerHTML = "<p>Searching GitHub...</p>";

  try {
    const res = await fetch(`https://api.github.com/users/${trimmed}`);
    if (!res.ok) {
      throw new Error(res.status === 404 ? "User not found" : `API Error (${res.status})`);
    }

    const data = await res.json();
    currentProfile = {
      login: data.login,
      name: data.name ?? data.login,
      repos: data.public_repos ?? 0,
      location: data.location ?? "Remote"
    };

    profileContainer.innerHTML = `
      <div class="card">
        <h4>${currentProfile.name} (@${currentProfile.login})</h4>
        <p>Location: ${currentProfile.location} | Public Repos: ${currentProfile.repos}</p>
        <button type="button" id="bookmarkBtn">Bookmark Developer</button>
      </div>`;
  } catch (err) {
    currentProfile = null;
    profileContainer.innerHTML = `<p style="color:crimson;">${err.message}</p>`;
  }
};

// Debounce helper (Topic 14)
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// Trigger debounced search 500ms after user stops typing
usernameInput.addEventListener(
  "input",
  debounce((e) => fetchGitHubUser(e.target.value), 500)
);

// Event Delegation for Bookmark button inside dynamic profile card
profileContainer.addEventListener("click", (e) => {
  if (e.target.id === "bookmarkBtn" && currentProfile) {
    saveBookmark(currentProfile);
    renderBookmarks();
  }
});

// Event Delegation for Remove buttons inside bookmark list
bookmarkList.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action='remove']");
  if (!btn) return;
  removeBookmark(btn.dataset.login);
  renderBookmarks();
});

// Initial render from localStorage on page load
renderBookmarks();