const fName = document.getElementById("fName");
const getEmail = document.getElementById("email");
const message = document.getElementById("massage");
const btn = document.getElementById("submit");

btn.addEventListener("click", () => {
  function validateFullName(name) {
    const regex = /^[a-zA-Z\s\-']{2,100}$/;
    const trimmedName = name.trim();
    if (!regex.test(trimmedName)) {
      return "invalid";
    }
    const words = trimmedName.split(/\s+/);
    return words.length >= 2 ? "valid" : "imvalid";
  }

  function validateEmail(email) {
    const atIndex = email.indexOf("@");
    if (atIndex < 1) return false;

    const domain = email.slice(atIndex + 1);
    if (domain.length < 3 || domain.indexOf(".") === -1) return false; // ডোমেইনে ডট (.) থাকতে হবে

    const lastDotIndex = domain.lastIndexOf(".");
    const extension = domain.slice(lastDotIndex + 1);
    if (extension.length < 2 || extension.length > 6) return false;

    const localPart = email.slice(0, atIndex);
    const invalidChars = [
      " ",
      ",",
      ";",
      "!",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
    ];
    for (let char of invalidChars) {
      if (localPart.includes(char) || domain.includes(char)) return false;
    }

    return true;
  }
  /////////////////

  let isEmail = true;
  let isName = true;
  if (validateFullName(fName.value) !== "valid") {
    fName.value = "invalid full name";
    isEmail = false;
  }
  if (!validateEmail(getEmail.value)) {
    getEmail.value = `invalid email`;
    isName = false;
  }

  if (isEmail && isName) {
    document.getElementById(
      "btn-a"
    ).href = `mailto:mdsolayman7814@gmail.com?subject=A email from : ${fName.value}&body=${message.value}`;
  }
});

console.clear();

let scrollTimeout;

window.addEventListener("scroll", () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  document.documentElement.style.scrollBehavior = "auto"; // Disable smooth scrolling temporarily

  scrollTimeout = setTimeout(() => {
    document.documentElement.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling after a delay
  }, 100);
});

console.clear();
