const API = "http://localhost:8000/content";
//!card
let card = document.querySelector(".card");
//!
async function viewCard() {
  let res = await fetch(API);
  console.log(res);
  let data = await res.json();
  // console.log(res);
  // console.log(data);
  data.forEach((elem) => {
    card.innerHTML += `<div class="bord">
      <img id="img-card" src="${elem.img}" alt="">
      <div class="info-bg"><h2 id="info">${elem.name}</h2>
    <span id="info">${elem.year}</span>
    <p id="info">${elem.type}</p></div>
      </div>`;
  });
}
