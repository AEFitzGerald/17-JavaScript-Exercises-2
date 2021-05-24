var totalFollowers = document.querySelector(".fans");
var totalFish = document.querySelector(".fish");
var totalPets = document.querySelector(".pets");
//console.log(totalFollowers);
//console.log(totalFish);
//console.log(totalPets);

totalFollowers.addEventListener("mouseover", function () {
  totalFollowers.innerText = "123K";
});
totalFish.addEventListener("mouseover", function () {
  totalFish.innerText = "47K";
});
totalPets.addEventListener("mouseover", function () {
  totalPets.innerText = "20k";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var body = document.querySelector("body");
var profileName = document.querySelector("h1");

//console.log(toggle);
//console.log(ball);
//console.log(body);
//console.log(profileName);

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    profileName.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    profileName.innerText = "Party Quincy";
  }
});
