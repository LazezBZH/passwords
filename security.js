const securityLevel = document.getElementById("security");

passwordLength.addEventListener("change", setLengthRate);
clearErrorOnChange.addEventListener("click", setCharCategoryRate);
generatePassword.addEventListener("click", securityRate);
generatePassword.addEventListener("click", colorProgress);

let lengthRate = "";
let charCategoryRate = "";
let security = "";

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
    securityLevel.value = 0;
  } else {
    security = lengthRate + charCategoryRate;
    securityLevel.value = security;
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
    securityLevel.classList.add("verylow");
    securityLevel.classList.remove("low");
    securityLevel.classList.remove("middle");
    securityLevel.classList.remove("good");
    securityLevel.classList.remove("verygood");
    document.getElementById("verylow").style.display = "block";
    document.getElementById("low").style.display = "none";
    document.getElementById("middle").style.display = "none";
    document.getElementById("good").style.display = "none";
    document.getElementById("verygood").style.display = "none";
  } else if (security > 20 && security <= 50) {
    securityLevel.classList.remove("verylow");
    securityLevel.classList.add("low");
    securityLevel.classList.remove("middle");
    securityLevel.classList.remove("good");
    securityLevel.classList.remove("verygood");
    document.getElementById("verylow").style.display = "none";
    document.getElementById("low").style.display = "block";
    document.getElementById("middle").style.display = "none";
    document.getElementById("good").style.display = "none";
    document.getElementById("verygood").style.display = "none";
  } else if (security > 50 && security < 80) {
    securityLevel.classList.remove("verylow");
    securityLevel.classList.remove("low");
    securityLevel.classList.add("middle");
    securityLevel.classList.remove("good");
    securityLevel.classList.remove("verygood");
    document.getElementById("verylow").style.display = "none";
    document.getElementById("low").style.display = "none";
    document.getElementById("middle").style.display = "block";
    document.getElementById("good").style.display = "none";
    document.getElementById("verygood").style.display = "none";
  } else if (security >= 80 && security <= 90) {
    securityLevel.classList.remove("verylow");
    securityLevel.classList.remove("low");
    securityLevel.classList.remove("middle");
    securityLevel.classList.add("good");
    securityLevel.classList.remove("verygood");
    document.getElementById("verylow").style.display = "none";
    document.getElementById("low").style.display = "none";
    document.getElementById("middle").style.display = "none";
    document.getElementById("good").style.display = "block";
    document.getElementById("verygood").style.display = "none";
  } else {
    securityLevel.classList.remove("verylow");
    securityLevel.classList.remove("low");
    securityLevel.classList.remove("middle");
    securityLevel.classList.remove("good");
    securityLevel.classList.add("verygood");
    document.getElementById("verylow").style.display = "none";
    document.getElementById("low").style.display = "none";
    document.getElementById("middle").style.display = "none";
    document.getElementById("good").style.display = "none";
    document.getElementById("verygood").style.display = "block";
  }
}
