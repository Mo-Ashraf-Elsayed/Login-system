var signUpName = document.querySelector('[name="signUpName"]');
var signUpEmail = document.querySelector('[name="signUpEmail"]');
var signUpPassword = document.querySelector('[name="signUpPass"]');
var signUpSubmit = document.querySelector("#SignUpSubmit");
var signUpresult = document.querySelector(".signUpResult");
var usersArr = [];
var nameRegex = /^[a-z ]{2,25}$/i;
var emailRegex =
  /^[a-zA-Z][\w.]{0,30}[a-zA-Z0-9]@{1}[a-z]{3,15}\.(com|org|info)$/;
var passwordRegex = /^\w{5,}$/;

if (localStorage.hasOwnProperty("usersArr")) {
  usersArr = JSON.parse(localStorage.getItem("usersArr"));
  console.log("usersArr");
}
function isEmailExists(email) {
  for (var i = 0; i < usersArr.length; i++) {
    if (usersArr[i].email === email) {
      return true;
    }
  }
  return false;
}
function clearInputs() {
  signUpName.value = "";
  signUpEmail.value = "";
  signUpPassword.value = "";
}
function addUser(user) {
  usersArr.push(user);
  localStorage.setItem("usersArr", JSON.stringify(usersArr));
  signUpresult.textContent = "Success";
  signUpresult.style.color = "green";
  clearInputs();
  window.location = "index.html";
}
function signUp() {
  var user = {
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  };
  if (
    signUpName.value === "" ||
    signUpEmail.value === "" ||
    signUpPassword.value === ""
  ) {
    signUpresult.textContent = "All inputs is required";
    signUpresult.style.color = "red";
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "All inputs is required , Continue",
    });
    return;
  }
  if (
    nameRegex.test(signUpName.value) &&
    emailRegex.test(signUpEmail.value) &&
    passwordRegex.test(signUpPassword.value)
  ) {
    if (!localStorage.hasOwnProperty("usersArr")) {
      addUser(user);
      return;
    }
    if (!isEmailExists(signUpEmail.value)) {
      addUser(user);
      return;
    } else {
      signUpresult.textContent = "Email already exists";
      signUpresult.style.color = "red";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email already exists , Change Email",
      });
      return;
    }
  } else {
    signUpresult.textContent = "All inputs should be valid";
    signUpresult.style.color = "red";
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "All inputs should be valid , Try Again",
    });
  }
}
signUpSubmit.addEventListener("click", signUp);

// signUpSubmit.addEventListener("click", function (e) {
//   if (
//     nameRegex.test(signUpName.value) &&
//     emailRegex.test(signUpEmail.value) &&
//     passwordRegex.test(signUpPassword.value)
//   ) {
//     if (!localStorage.hasOwnProperty("usersArr")) {
//       addUser();
//       console.log("one");
//     } else {
//     }
//   } else {
//     e.preventDefault();
//     if (
//       signUpName.value === "" ||
//       signUpEmail.value === "" ||
//       signUpPassword.value === ""
//     ) {
//       signUpresult.textContent = "All inputs is required";
//       signUpresult.style.color = "red";
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "All inputs is required , Continue",
//       });
//     } else if (
//       signUpName.value !== "" &&
//       signUpEmail.value !== "" &&
//       signUpPassword.value !== ""
//     ) {
//       signUpresult.textContent = "All inputs should be valid";
//       signUpresult.style.color = "red";
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "All inputs should be valid , Try Again",
//       });
//     }
//   }
// });

// usersArr.forEach(function (ele) {
//   var validEmail = ele.email;
//   if (validEmail === signUpEmail.value) {
//     e.preventDefault();
//     signUpresult.textContent = "Email already exists";
//     signUpresult.style.color = "red";
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Email already exists , Change Email",
//     });
//     console.log("two");
//   } else {
//     addUser();
//     console.log("three");
//   }
// });
//=============================================================================================

// e.preventDefault();
// signUpresult.textContent = "Email already exists";
// signUpresult.style.color = "red";
// Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Email already exists , Change Email",
// });
// console.log(signUpEmail.value, usersArr[i].email, "Two");
