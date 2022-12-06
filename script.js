feather.replace();

const passwordOutput = document.getElementById("password");
const generatePassword = document.getElementById("generatePassword");
const passwordCopy = document.getElementById("passwordCopy");
const passwordToCopy = document.getElementById("password").value;
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const copyDone = document.getElementById("copyOk");

passwordCopy.addEventListener("click", copy);
generatePassword.addEventListener("click", generate);

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
  "€",
];

function validateCriteres(e) {
  if (prenom.validity.valueMissing) {
    e.preventDefault();
    erreurPrenom.textContent = "* Veuillez renseigner votre prénom.";
    prenom.classList.replace("text-control", "erreur-input");
    return false;
  } else if (prenom.value.length < 2) {
    e.preventDefault();
    erreurPrenom.textContent =
      "* Le prénom doit comporter au minimum 2 caractères.";
    prenom.classList.replace("text-control", "erreur-input");
    return false;
  } else {
    erreurPrenom.textContent = " ";
    prenom.classList.replace("erreur-input", "text-control");
    return true;
  }
}

function generate(e) {
  let allChar = [].concat(
    mustHaveUpper.checked ? upperCaseChar : [],
    mustHaveLower.checked ? lowerCaseChar : [],
    mustHaveNumber.checked ? numbers : [],
    mustHaveOther.checked ? otherChar : []
  );

  let chosenLength = parseInt(document.getElementById("passwordLength").value);

  let password = "";

  if (!chosenLength && allChar.length < 1) {
    e.preventDefault();
    error2.textContent =
      "Merci de sélectionner au minimum un type de caractères et Minimum 4";
  } else if (!chosenLength && allChar.length < 1) {
    e.preventDefault();
    error2.textContent =
      "Merci de sélectionner au minimum un type de caractères et Minimum 4";
  } else if (chosenLength < 4 || !chosenLength) {
    e.preventDefault();
    error2.textContent = "";
    error1.textContent = "Minimum 4";
  } else if (allChar.length < 1) {
    e.preventDefault();
    error1.textContent =
      "Merci de sélectionner au minimum un type de caractères";
    error2.textContent = "";
  } else {
    for (i = 0; i < chosenLength; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    error1.textContent = "";
    error2.textContent = "";
    return (passwordOutput.value = password);
    console.log(password);
  }
}

function copy(e) {
  if (passwordOutput.value == 0) {
    e.preventDefault;
    alert(
      "Quand vous aurez généré un mot de passe vous pourrez le copier en cliquant ici"
    );
  } else {
    navigator.clipboard
      .writeText(password.value)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
  }
  e.preventDefault;
  copyDone.textContent = "Mot de passe copié";
  //   alert("Copié");
}

// function best() {
//   document.getElementById("taille").value = 16;

//   document.getElementById("lowercase").checked = true;
//   document.getElementById("uppercase").checked = true;
//   document.getElementById("numbers").checked = true;
//   document.getElementById("symbols").checked = true;

//   generate();
// }
// generate();
