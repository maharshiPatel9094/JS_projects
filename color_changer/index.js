// selecting all the buttons
const buttons = document.querySelectorAll(".button");

// selecting the body
const body = document.querySelector("body");

// looping all buttons and adding event
buttons.forEach((button) => {
  button.addEventListener("click", function (event){
    if (event.target.id === "grey") {
      // body.style.backgroundColor = "grey"  -----OR-----
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
  });
});
