console.clear();

const navbarBar = document.getElementById("navbar-bar");
const resNav = document.getElementById("res-nav");
const navbarEnd = document.getElementById("navbar-end");
const nav1 = document.getElementById("nav-1");

navbarBar.addEventListener("click", () => {
  resNav.style.display = "block";
  nav1.style.display = "none";
});

navbarEnd.addEventListener("click", () => {
  resNav.style.display = "none";
  nav1.style.display = "grid";
});

// theme
/**
 * theme function start here
 */
const themeToggleBtn = document.querySelectorAll(".theme-btn");

const themeSwitch = () => {
  let themeName = localStorage.getItem("theme");
  if (themeName === "dark") {
    themeToggleBtn.forEach((x) => {
      x.style.justifyContent = "right";
    });
  } else {
    themeToggleBtn.forEach((x) => {
      x.style.justifyContent = "left";
    });
  }
};

const defaultTheme = () => {
  let theme = localStorage.getItem("theme");
  if (theme === null) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add(theme);
  }

  themeSwitch();
};
defaultTheme();

const userSetTheme = () => {
  console.log("clicked");
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    console.log("why");
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else if (currentTheme === "light" || null) {
    console.log("why");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
  themeSwitch();
};
themeToggleBtn.forEach((x) => {
  x.addEventListener("click", () => setTimeout(userSetTheme, 100));
});
console.clear();
