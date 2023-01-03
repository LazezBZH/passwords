const securityBar = document.getElementById("securityy");
const securityZone = document.getElementById("security");

passwordLength.addEventListener("change", setLengthRate);
clearErrorOnChange.addEventListener("click", setCharCategoryRate);
generatePassword.addEventListener("click", securityRate);
generatePassword.addEventListener("click", colorProgress);

let lengthRate = "";
let charCategoryRate = "";
let security = "";

generatePassword.addEventListener("click", setSecurity);
refresh.addEventListener("click", removeSecurity);
function setSecurity() {
  securityZone.classList.replace("security-off", "security-on");
}
function removeSecurity() {
  securityZone.classList.replace("security-on", "security-off");
}

function setLengthRate(e) {
  if (!passwordLength.value || passwordLength.value == 0) {
    lengthRate = 0;
  } else if (passwordLength.value >= 4 && passwordLength.value < 6) {
    lengthRate = 5;
  } else if (passwordLength.value >= 6 && passwordLength.value < 8) {
    lengthRate = 10;
  } else if (passwordLength.value >= 8 && passwordLength.value < 11) {
    lengthRate = 20;
  } else if (passwordLength.value >= 11 && passwordLength.value < 13) {
    lengthRate = 30;
  } else if (passwordLength.value >= 13 && passwordLength.value < 15) {
    lengthRate = 40;
  } else {
    lengthRate = 50;
  }

  return lengthRate;
}

function setCharCategoryRate(e) {
  let categoryCheckedNumber = 0;
  let categoryOfChar = document.getElementsByClassName("checkbox");

  for (i = 0; i < categoryOfChar.length; i++) {
    if (categoryOfChar[i].checked) {
      categoryCheckedNumber++;
    }
  }
  switch (categoryCheckedNumber) {
    case 1:
      charCategoryRate = 5;
      break;
    case 2:
      charCategoryRate = 20;
      break;
    case 3:
      charCategoryRate = 35;
      break;
    case 4:
      charCategoryRate = 50;
      break;
    default:
      charCategoryRate = 0;
  }

  return charCategoryRate;
}

function securityRate(e) {
  if (!lengthRate || !charCategoryRate) {
    securityBar.style.width = 0;
  } else {
    security = lengthRate + charCategoryRate;
    securityBar.style.width = security + "%";
    return security;
  }
}

function colorProgress(e) {
  if (!lengthRate || !charCategoryRate) {
    document.getElementById("verylow").style.display = "none";
    document.getElementById("low").style.display = "none";
    document.getElementById("middle").style.display = "none";
    document.getElementById("good").style.display = "none";
    document.getElementById("verygood").style.display = "none";
  } else if (security > 0 && security <= 20) {
    securityBar.classList.add("verylow");
    securityBar.classList.remove("low");
    securityBar.classList.remove("middle");
    securityBar.classList.remove("good");
    securityBar.classList.remove("verygood");
    document.getElementById("verylow").style.display = "block";
    document.getElementById("low").style.display = "none";
    document.getElementById("middle").style.display = "none";
    document.getElementById("good").style.display = "none";
    document.getElementById("verygood").style.display = "none";
  } else if (security > 20 && security <= 50) {
    securityBar.classList.add("low");
    securityBar.classList.remove("middle");
    securityBar.classList.remove("good");
    securityBar.classList.remove("verygood");
    document.getElementById("verylow").style.display = "none";
    document.getElementById("low").style.display = "block";
    document.getElementById("middle").style.display = "none";
    document.getElementById("good").style.display = "none";
    document.getElementById("verygood").style.display = "none";
  } else if (security > 50 && security < 80) {
    securityBar.classList.remove("verylow");
    securityBar.classList.remove("low");
    securityBar.classList.add("middle");
    securityBar.classList.remove("good");
    securityBar.classList.remove("verygood");
    document.getElementById("verylow").style.display = "none";
    document.getElementById("low").style.display = "none";
    document.getElementById("middle").style.display = "block";
    document.getElementById("good").style.display = "none";
    document.getElementById("verygood").style.display = "none";
  } else if (security >= 80 && security <= 90) {
    securityBar.classList.remove("verylow");
    securityBar.classList.remove("low");
    securityBar.classList.remove("middle");
    securityBar.classList.add("good");
    securityBar.classList.remove("verygood");
    document.getElementById("verylow").style.display = "none";
    document.getElementById("low").style.display = "none";
    document.getElementById("middle").style.display = "none";
    document.getElementById("good").style.display = "block";
    document.getElementById("verygood").style.display = "none";
  } else {
    securityBar.classList.remove("verylow");
    securityBar.classList.remove("low");
    securityBar.classList.remove("middle");
    securityBar.classList.remove("good");
    securityBar.classList.add("verygood");
    document.getElementById("verylow").style.display = "none";
    document.getElementById("low").style.display = "none";
    document.getElementById("middle").style.display = "none";
    document.getElementById("good").style.display = "none";
    document.getElementById("verygood").style.display = "block";
  }
}
