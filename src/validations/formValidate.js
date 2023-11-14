function formValidate(formValues) {
  if (
    firstNameFieldValidation(formValues.firstName) === true &&
    lastNameFieldValidation(formValues.lastName) === true &&
    emailFieldValidation(formValues.email) === true &&
    messageFieldValidation(formValues.message) === true
  ) {
    console.log("Form Validation Success");
    return true;
  } else {
    console.log("Form Validation Failed");
    return false;
  }

  console.log(
    `Submitted by ${formValues.firstName} ${formValues.lastName} having Email ${formValues.email} and the message is ${formValues.message}`
  );
}

export default formValidate;

//? First Name Validation
export function firstNameFieldValidation(firstNameValue) {
  let firstNameField = document.querySelector("#user_first_name");

  if (
    requiredValidation(firstNameField, "First Name", firstNameValue) === false
  ) {
    return false;
  }

  if (
    lengthValidation(firstNameField, "First Name", firstNameValue, 2, 20) ===
    false
  ) {
    return false;
  }

  if (
    alphabetsValidation(firstNameField, "First Name", firstNameValue) === false
  ) {
    return false;
  }

  return true;
}

//? Last Name Validation
export function lastNameFieldValidation(lastNameValue) {
  let lastNameField = document.querySelector("#user_last_name");

  if (requiredValidation(lastNameField, "Last Name", lastNameValue) === false) {
    return false;
  }

  if (
    lengthValidation(lastNameField, "Last Name", lastNameValue, 2, 20) === false
  ) {
    return false;
  }

  if (
    alphabetsValidation(lastNameField, "Last Name", lastNameValue) === false
  ) {
    return false;
  }

  return true;
}

//? Email Validation
export function emailFieldValidation(emailValue) {
  let emailField = document.querySelector("#user_email");

  if (requiredValidation(emailField, "Email Address", emailValue) === false) {
    return false;
  }

  if (emailValidation(emailField, "Email Address", emailValue) === false) {
    return false;
  }

  return true;
}

//? Message Validation
export function messageFieldValidation(messageValue) {
  let messageField = document.querySelector("#user_message");

  if (requiredValidation(messageField, "Message", messageValue) === false) {
    return false;
  }

  if (
    lengthValidation(messageField, "Message", messageValue, 10, 160) === false
  ) {
    return false;
  }

  return true;
}

//!!!!!! ==========>>> V A L I D A T I O N S <<<========== !!!!!!//

//! Validation Name: Required
function requiredValidation(inputField, inputFieldName, inputFieldValue) {
  if (inputFieldValue === "") {
    let errorMessage = `${inputFieldName} is required`;
    errorFunction(inputField, errorMessage);
    return false;
  } else {
    successFunction(inputField);
    return true;
  }
}

//! Validation Name: Check Length
function lengthValidation(
  inputField,
  inputFieldName,
  inputFieldValue,
  minLength,
  maxLength
) {
  if (inputFieldValue.length <= minLength) {
    let errorMessage = `${inputFieldName} must be more than ${minLength} characters`;
    errorFunction(inputField, errorMessage);
    return false;
  } else if (inputFieldValue.length > maxLength) {
    let errorMessage = `${inputFieldName} must be less than ${maxLength} characters`;
    errorFunction(inputField, errorMessage);
    return false;
  } else {
    successFunction(inputField);
    return true;
  }
}

//! Validation Name: Only Alphabets
function alphabetsValidation(inputField, inputFieldName, inputFieldValue) {
  let onlyAlphabetsExp = /^[A-Za-z ]+$/;
  if (onlyAlphabetsExp.test(inputFieldValue) === false) {
    let errorMessage = `${inputFieldName} must be only alphabets`;
    errorFunction(inputField, errorMessage);
    return false;
  } else {
    successFunction(inputField);
    return true;
  }
}

//! Validation Name: Email Check
function emailValidation(inputField, inputFieldName, inputFieldValue) {
  let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailExp.test(inputFieldValue) === false) {
    let errorMessage = `${inputFieldName} is not valid`;
    errorFunction(inputField, errorMessage);
    return false;
  } else {
    successFunction(inputField);
    return true;
  }
}

function errorFunction(errorField, errorMessage) {
  let errorTextField = errorField.parentElement.querySelector("small");
  errorTextField.style.visibility = "visible";
  errorTextField.innerText = errorMessage;
  errorField.style.borderColor = "#ee5253";
}

function successFunction(successField) {
  let successTextField = successField.parentElement.querySelector("small");
  successTextField.style.visibility = "hidden";
  successField.style.borderColor = "#222f3e";
}
