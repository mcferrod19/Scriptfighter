var randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;


function checkNumber() {
  var userNumber = document.querySelector(".input").value;
  var response = document.querySelector(".response")

    if (userNumber < randomNumber) {
        response.innerHTML = "Too Low";
    } else if (userNumber > randomNumber) {
        response.innerHTML = "Too High";
    } else if (userNumber == randomNumber) {
       response.innerHTML = window.open('endGameOne.html');

    } else{
        response.innerHTML = "Please enter a number!";
    }
}

var createButton = document.querySelector(".buttonplay");
createButton.addEventListener("click", checkNumber);
