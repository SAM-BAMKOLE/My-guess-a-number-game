

// I start my app In Jesus Name, Father come help me;

//  generate random number;
// let randomNo = Math.trunc(Math.random() * 20) + 1;
function generate() {
      let randomNo = Math.trunc(Math.random() * 20) + 1;
      return randomNo;
}
let random = generate();

// generate the alert box;
function showAlert(message) {
      const alertBox = document.createElement("div") ;
      alertBox.textContent = message;

      const main = document.querySelector("#main") ;
      alertBox.classList.add("alert");

      main.appendChild(alertBox);
      setTimeout(()=> {
            document.querySelector(".alert").remove();
      }, 2000)

}

let userScore  = 15;
let prevScore = 0;

// add event to the check btn;
document.querySelector(".check").addEventListener("click", ()=> {
      

      // get the users input
      const guess = document.querySelector(".guess").value ;

      

      // check if user inputed a value
      if (!guess) {
            showAlert("Please guess a number !!!", "warning");
      }
      else {
            // console.log(random)
            const notify = document.querySelector(".message");

            // if the guessed number is less than the random number
            if (parseInt(guess) < random) {
                  notify.textContent = "Too Low!" ;
                  userScore = --userScore;
                  document.querySelector(".score").textContent = userScore;

                  const body = document.querySelector("body");
                  const header = document.querySelector("header");

                  // when the user score is equal to zero "which should be impossible unless the nonof attempts is reduced";
                  if (userScore === 0) {
                        body.style.backgroundColor = "rgb(150,0,0)";
                        header.style.borderBottom = "5px solid rgb(13, 16, 26)";
                        notify.textContent = "You Lose !!!";
                  }
            }
            // if the guessed number is greater than the random number
            else if (parseInt(guess) > random){
                  notify.textContent = "Too High!";
                  userScore = --userScore;
                  document.querySelector(".score").textContent = userScore;

                  const body = document.querySelector("body");
                  const header = document.querySelector("header");
                   // when the user score is equal to zero "which should be impossible unless the nonof attempts is reduced";
                  if (userScore === 0) {
                        body.style.backgroundColor = "rgb(150,0,0)";
                        header.style.borderBottom = "5px solid rgb(13, 16, 26)";
                        notify.textContent = "You Lose !!!";
                  }
            }

            // if guessed number is equal to the random number;
            else  {
                  notify.textContent = "You guessed correctly !!!";

                  const body = document.querySelector("body");
                  body.style.backgroundColor = "rgb(0, 184, 55)";
                  const header = document.querySelector("header");
                  header.style.borderBottom = "5px solid rgb(13, 16, 26)"

                  
            // ====================================================

                  // function to update the highscore
                  if (userScore > prevScore) {
                        prevScore = userScore;
                  }
                  document.querySelector(".highscore").textContent = prevScore;
                  // ======================================

                  // ====================================================
                  // after guessing the correct number,  stop the game;



            }

      }
});

// when the user has guessed the correct score;
document.querySelector(".again").addEventListener("click", ()=> {
      random = generate();
      document.querySelector("body").style.backgroundColor = "rgb(13, 16, 26)";
      document.querySelector("header").style.borderBottom = "5px solid rgb(0, 184, 55)";

      document.querySelector(".message").textContent = "Start guessing...";
      userScore = 15;
});
