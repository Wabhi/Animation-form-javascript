const para = document.getElementById("error");
function animationForm() {
  //grab all the arrowdown element ....
  const arrowsDown = document.querySelectorAll(".fa-arrow-down");
  arrowsDown.forEach((arrowDown) => {
    arrowDown.addEventListener("click", () => {
      //to grab current input field....
      const inputField = arrowDown.previousElementSibling;
      //to grab parent element of input field....
      const parent = arrowDown.parentElement;
      //to grab next element from current input field....
      const nextInputField = parent.nextElementSibling;
      //   console.log(inputField);
      //   console.log(parent);
      //   console.log(nextInputField);
      if (inputField.type === "text" && userValidation(inputField)) {
        nextField(parent, nextInputField);
        para.innerText = "";
      } else if (inputField.type === "email" && emailValidation(inputField)) {
        nextField(parent, nextInputField);
        para.innerText = "";
      } else if (
        inputField.type === "password" &&
        passwordValidation(inputField)
      ) {
        nextField(parent, nextInputField);
        para.innerText = "";
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

//user validation for name,email,password.................................
function userValidation(user) {
  if (user.value.length < 6) {
    backgroundChange("#f28455");
    para.innerText = "Something wrong with user name!";
  } else {
    backgroundChange("#7fdbff");
    return true;
  }
}
function emailValidation(email) {
  const validation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validation.test(email.value)) {
    backgroundChange("#7fdbff");
    return true;
  } else {
    backgroundChange("#f28455");
    para.innerText = "Something wrong with user email!";
  }
}
function passwordValidation(password) {
  if (password.value.length < 6) {
    backgroundChange("#f28455");
    para.innerText = "Something wrong with user password!";
  } else {
    backgroundChange("#7fdbff");
    return true;
  }
}

//background color change if any validation will be not match........................
function backgroundChange(color) {
  document.body.style.backgroundColor = color;
}

//for go to nextText field after one complete................................
function nextField(parent, nextInputField) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextInputField.classList.add("active");
}
animationForm();
