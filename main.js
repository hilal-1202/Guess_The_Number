let input = document.getElementById(`box`);
let button = document.getElementById(`btn`);
let p = document.getElementById(`guess`);
let number = Math.floor(Math.random() * 100);
let span = document.getElementById(`span`);
let img = document.getElementById(`img`);

let counter = 4;
console.log(number);

button.addEventListener("click", () => {
  console.log(input.value);

  if (counter > 0) {
    if (number > input.value) {
      span.innerText = `guess the bigger number than ${input.value},number of attempts ${counter}`;
      counter--;
    } else if (number < input.value) {
      span.innerText = `guess the smaller number than ${input.value},number of attempts ${counter}`;
      counter--;
    } else if(number==input.value){
      span.innerText = `congratulations,you entered ${
        5 - counter
      } the correct number ${input.value}`;
      document.getElementById("img").src = "./images/Animation-para.gif";
      img.style.width = "800px";
      window.setTimeout(function () {
        location.reload(true);
      }, 3000);
    }
    else{
      span.innerText = `${input.value} bu bir sayı degildir`
    }
    input.focus();
    input.value = "";
  } else if (counter == 0) {
    p.innerText = `Game Over`;
    document.getElementById("img").src = "./images/Animation.gif";
    img.style.width = "800px";
    window.setTimeout(function () {
      location.reload(true);
    }, 3000);
  }
});

window.addEventListener("load", () => {
  input.focus();
});

input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    button.click();
  }
});
