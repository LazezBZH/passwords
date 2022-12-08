function validateLower() {
  if (passwordOutput.value.match(/[a-z]/g)) {
    return true;
  } else {
    return false;
  }
}

function validateUpper() {
  if (passwordOutput.value.match(/[A-Z]/g)) {
    return true;
  } else {
    return false;
  }
}
function validateNumber() {
  if (passwordOutput.value.match(/[0-9]/g)) {
    return true;
  } else {
    return false;
  }
}
function validateOther() {
  if (passwordOutput.value.match(/[&#-_|!?]/g)) {
    return true;
  } else {
    return false;
  }
}

function validate(e) {
  e.preventDefault();
  let lowerIsPresent = validateLower();
  let upperIsPresent = validateUpper();
  let numberIsPresent = validateNumber();
  let otherIsPresent = validateOther();

  let passwordIsValid = "";

  if (
    // case1
    mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    passwordIsValid = lowerIsPresent;
  } else if (
    // case2
    !mustHaveLower.checked &&
    mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    passwordIsValid = upperIsPresent;
  } else if (
    // case3
    !mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    passwordIsValid = numberIsPresent;
  } else if (
    // case4
    !mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    passwordIsValid = otherIsPresent;
  } else if (
    // case5
    mustHaveLower.checked &&
    mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    passwordIsValid =
      lowerIsPresent && upperIsPresent && numberIsPresent && otherIsPresent;
  } else if (
    // case6
    mustHaveLower.checked &&
    mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    passwordIsValid = lowerIsPresent && upperIsPresent;
  } else if (
    // case7
    !mustHaveLower.checked &&
    mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    passwordIsValid = upperIsPresent && numberIsPresent;
  } else if (
    // case8
    !mustHaveLower.checked &&
    mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    passwordIsValid = upperIsPresent && otherIsPresent;
  } else if (
    // case9
    mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    passwordIsValid = lowerIsPresent && numberIsPresent;
  } else if (
    // case10
    mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    passwordIsValid = lowerIsPresent && otherIsPresent;
  } else if (
    // case11
    !mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    passwordIsValid = numberIsPresent && otherIsPresent;
  } else if (
    // case12
    mustHaveLower.checked &&
    mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    !mustHaveOther.checked
  ) {
    passwordIsValid = lowerIsPresent && upperIsPresent && numberIsPresent;
  } else if (
    // case13
    mustHaveLower.checked &&
    mustHaveUpper.checked &&
    !mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    passwordIsValid = lowerIsPresent && upperIsPresent && otherIsPresent;
  } else if (
    // case14
    mustHaveLower.checked &&
    !mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    passwordIsValid = lowerIsPresent && numberIsPresent && otherIsPresent;
  } else if (
    // case15
    !mustHaveLower.checked &&
    mustHaveUpper.checked &&
    mustHaveNumber.checked &&
    mustHaveOther.checked
  ) {
    passwordIsValid = upperIsPresent && numberIsPresent && otherIsPresent;
  }
  if (passwordIsValid) {
    error.textContent = "";
    return true;
  } else {
    generate();
    error.textContent = "pas bon";
  }
}
