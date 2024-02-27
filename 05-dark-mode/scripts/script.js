let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".inner-switch");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    darkModeToggle.innerHTML = "ON";
  } else if (darkMode === "enabled") {
    disableDarkMode();
    darkModeToggle.innerHTML = "OFF";
  }
});


