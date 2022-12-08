feather.replace();

const passwordOutput = document.getElementById("password");
const generatePassword = document.getElementById("generatePassword");
const copyPassword = document.getElementById("copyPassword");
const passwordToCopy = passwordOutput.value;
const error = document.getElementById("error");
const copyOk = document.getElementById("copyOk");

const mustHaveUpper = document.getElementById("mustHaveUpper");
const mustHaveLower = document.getElementById("mustHaveLower");
const mustHaveNumber = document.getElementById("mustHaveNumber");
const mustHaveOther = document.getElementById("mustHaveOther");
const passwordLength = document.getElementById("passwordLength");
const clearErrorOnChange = document.getElementById("clearError");

generatePassword.addEventListener("click", generate);
copyPassword.addEventListener("click", copy);
passwordLength.addEventListener("click", clearError);
clearErrorOnChange.addEventListener("click", clearError);

let lowerCaseChar = [
  "a",
  "z",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "q",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "w",
  "x",
  "c",
  "v",
  "b",
  "n",
];
let upperCaseChar = [
  "A",
  "Z",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "Q",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "W",
  "X",
  "C",
  "V",
  "B",
  "N",
];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let otherChar = [
  "$",
  "%",
  "^",
  "&",
  "!",
  "@",
  "#",
  ":",
  ";",
  "'",
  ",",
  ".",
  ">",
  "/",
  "*",
  "-",
  ",",
  "|",
  "?",
  "~",
  "_",
  "=",
  "+",
];

function clearError(e) {
  error.textContent = "";
}

function shuffelWord(word) {
  var shuffledPassword = "";
  word = word.split("");
  while (word.length > 0) {
    shuffledPassword += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffledPassword;
}

function generate(e) {
  e.preventDefault();
  copyOk.textContent = "";
  let allChar = [].concat(
    mustHaveUpper.checked ? upperCaseChar : [],
    mustHaveLower.checked ? lowerCaseChar : [],
    mustHaveNumber.checked ? numbers : [],
    mustHaveOther.checked ? otherChar : []
  );
  let chosenLength = parseInt(passwordLength.value);
  let password = "";
  if (!chosenLength && allChar.length < 1) {
    error.textContent =
      "Merci de sélectionner au minimum un type de caractères et Minimum 4";
  } else if (chosenLength < 4 && allChar.length < 1) {
    error.textContent =
      "Merci de sélectionner au minimum un type de caractères et Minimum 4";
  } else if (!chosenLength || chosenLength < 4) {
    error.textContent = "Minimum 4";
  } else if (allChar.length < 1) {
    error.textContent =
      "Merci de sélectionner au minimum un type de caractères";
  } else if (
    // case1
    mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    for (i = 0; i < chosenLength; i++) {
      password +=
        lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    }
    error.textContent = "";
    return (passwordOutput.value = password);
  } else if (
    // case2
    !mustHaveLower.checked &&
    mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    for (i = 0; i < chosenLength; i++) {
      password +=
        upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    }
    error.textContent = "";
    return (passwordOutput.value = password);
  } else if (
    // case3
    !mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    for (i = 0; i < chosenLength; i++) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    error.textContent = "";
    return (passwordOutput.value = password);
  } else if (
    // case4
    !mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    for (i = 0; i < chosenLength; i++) {
      password += otherChar[Math.floor(Math.random() * otherChar.length)];
    }
    error.textContent = "";
    return (passwordOutput.value = password);
  } else if (
    // case5
    mustHaveLower.checked &&
    mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    password += lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    password += upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += otherChar[Math.floor(Math.random() * otherChar.length)];
    for (i = 0; i < chosenLength - 4; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);

    return (passwordOutput.value = password);
  } else if (
    // case6
    mustHaveLower.checked &&
    mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    password += lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    password += upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];

    for (i = 0; i < chosenLength - 2; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  } else if (
    // case7
    !mustHaveLower.checked &&
    mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    password += upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    for (i = 0; i < chosenLength - 2; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  } else if (
    // case8
    !mustHaveLower.checked &&
    mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    password += upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    password += otherChar[Math.floor(Math.random() * otherChar.length)];
    for (i = 0; i < chosenLength - 2; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  } else if (
    // case9
    mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    password += lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    for (i = 0; i < chosenLength - 2; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  } else if (
    // case10
    mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    password += lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    password += otherChar[Math.floor(Math.random() * otherChar.length)];
    for (i = 0; i < chosenLength - 2; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  } else if (
    // case11
    !mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += otherChar[Math.floor(Math.random() * otherChar.length)];
    for (i = 0; i < chosenLength - 2; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  } else if (
    // case12
    mustHaveLower.checked &&
    mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    password += lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    password += upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    for (i = 0; i < chosenLength - 3; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  } else if (
    // case13
    mustHaveLower.checked &&
    mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    password += lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    password += upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];

    password += otherChar[Math.floor(Math.random() * otherChar.length)];
    for (i = 0; i < chosenLength - 3; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  } else if (
    // case14
    mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    password += lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += otherChar[Math.floor(Math.random() * otherChar.length)];
    for (i = 0; i < chosenLength - 3; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  } else if (
    // case15
    !mustHaveLower.checked &&
    mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    password += upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += otherChar[Math.floor(Math.random() * otherChar.length)];
    for (i = 0; i < chosenLength - 3; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error.textContent = "";
    password = shuffelWord(password);
    return (passwordOutput.value = password);
  }
}

function copy(e) {
  e.preventDefault();
  if (passwordOutput.value.length) {
    navigator.clipboard.writeText(passwordOutput.value).then(() => {
      alert("Mot de passe copié");
    });
  } else {
    alert("Vous n'avez pas encore généré de mot de passe à copier!");
  }
}
