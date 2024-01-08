let API = "http://localhost:8000/users";
let APIlog = "http://localhost:8000/login";
let APIpizza = "http://localhost:8000/pizzas";

let modalAuthBtn = document.querySelector(".Section1DodoLog");
let modalRegister = document.querySelector(".registration-modal");
let modalLogBtn = document.querySelector(".Section1DodoAuth");
let modalLogin = document.querySelector(".login-modal");
modalAuthBtn.addEventListener("click", () => {
  modalRegister.classList.toggle("none");
  modalLogin.classList.remove("none");
});
modalLogBtn.addEventListener("click", () => {
  modalLogin.classList.toggle("none");
  modalRegister.classList.remove("none");
});

// ! ============== REGISTRATION ================

let usernameInp = document.querySelector("#username");
let emailInp = document.querySelector("#email");
let password = document.querySelector("#password");

let objUser;

function register() {
  if (
    usernameInp.value.trim() &&
    emailInp.value.trim() &&
    password.value.trim()
  ) {
    objUser = {
      name: usernameInp.value,
      email: emailInp.value,
      password: password.value,
      isAdmin: false,
    };
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(objUser),
    });
  } else {
    alert("Заполните все поля");
  }
}

// ! =============== AUTH =================

let LogusernameInp = document.querySelector("#logusername");
let LogemailInp = document.querySelector("#logemail");
let Logpassword = document.querySelector("#logpassword");

function Login() {
  if (
    LogusernameInp.value.trim() &&
    LogemailInp.value.trim() &&
    Logpassword.value.trim()
  ) {
    logUser();
  } else {
    alert("Заполните все поля");
  }
}
async function logUser() {
  let res = await fetch(APIpizza);
  let data = await res.json();
  data.forEach((elem) => {
    if (
      LogusernameInp.value == elem.name &&
      LogemailInp.value == elem.email &&
      Logpassword.value == elem.password
    ) {
      fetch(APIlog, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(elem),
      });
      if (elem.isAdmin == true) {
        window.location.href = "../adminH/userAdmin.html";
      } else {
        window.location.href = "../user/user.html";
      }
    }
  });
  let qwe = [];
}
