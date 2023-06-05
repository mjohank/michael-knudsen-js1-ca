const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullname-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

function validateForm() {
  event.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  /*   if (fullName.value.trim().length > 0) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (subject.value.trim().length > 9) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  } */

  console.log("Seems it worked");
}

form.addEventListener("submit", validateForm);

function checkLength(value, inputLength) {
  if (value.trim().length > inputLength) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
