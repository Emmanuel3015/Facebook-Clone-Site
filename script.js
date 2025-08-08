// Selecting the required css selectors
let settingMenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById("dark-btn");

// Toggle the settings menu height
function settingMenuToggle() {
  settingMenu.classList.toggle("settings-menu-height");
}

// Toggle dark/light mode on click
darkBtn.addEventListener("click", () => {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// On page load, apply the stored theme (or default to light)
let storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  // Covers both "light" and the case where nothing was set
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
  localStorage.setItem("theme", "light");
}
