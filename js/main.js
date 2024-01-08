let API = "http://localhost:8000/users";
let APIlog = "http://localhost:8000/login";
let APIpizza = "http://localhost:8000/pizzas"

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
  let res = await fetch(API);
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
}
//?--------------------------------------------kadyrmamat-----------------------------------------------------------
//!modal
let modal = document.querySelector(".modal");
let name = document.querySelector(".name");
let desk = document.querySelector(".desk");
let img = document.querySelector(".img");
let price = document.querySelector(".price");
let submitButton = document.querySelector(".submitButton");
let submitButtonBack = document.querySelector(".submitButtonback");
//!modal
// !card============
viewCard();
let card = document.querySelector(".card");
async function viewCard() {
  let res = await fetch(APIpizza);
  let data = await res.json();
  data.forEach((elem) => {
    card.innerHTML += `
    <div class="container-pizza">
    <img src="${elem.img}" alt="" class="img-pizza" />
    <div class="name"><p>${elem.name}</p></div>
    <div class="desc"><p>${elem.desc}</p></div>
    <div class="price">${elem.price} Сом</div>
    <button class="btn-add"><p class="choos">выбрать</p></button>
  </div>
    `;
  });
}
// !card finish==========

//! modal start----------
submitButton.addEventListener("click", () => {
  let obj = {
    name: name.value,
    desk: desk.value,
    img: img.value,
    price: price.value,
  };
  setBook(obj);
  name.value = "";
  desk.value = "";
  img.value = "";
  price.value = "";
});

function setBook(qwe) {
  fetch(API, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(qwe),
  });
}
//! modal end---------
