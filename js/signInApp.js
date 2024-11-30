var signInEmail = document.querySelector('[name="signInEmail"]');
var signInPassword = document.querySelector('[name="signInPass"]');
var signInSubmit = document.querySelector("#signInSubmit");
var signInResult = document.querySelector(".signInResult");
var usersArr = [];

if (localStorage.hasOwnProperty("usersArr")) {
  usersArr = JSON.parse(localStorage.getItem("usersArr"));
}
function checkTheUser(email, pass) {
  for (var i = 0; i < usersArr.length; i++) {
    if (usersArr[i].email == email && usersArr[i].password == pass) {
      localStorage.setItem("name", JSON.stringify(usersArr[i].name));
      return true;
    }
  }
  return false;
}
function signIn() {
  if (signInEmail.value === "" || signInPassword.value === "") {
    signInResult.textContent = "All inputs is required";
    signInResult.style.color = "red";
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "All inputs is required , Continue",
    });
    console.log("one");
    return;
  } else {
    if (checkTheUser(signInEmail.value, signInPassword.value)) {
      location.href = "home.html";
      console.log("two");

      return;
    } else {
      signInResult.innerHTML = "Incorrect email or password";
      signInResult.style.color = "red";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect email or password, Try Again",
      });
      console.log("three");
      return;
    }
  }
}

signInSubmit.addEventListener("click", signIn);
