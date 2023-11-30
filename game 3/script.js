
let audio = new Audio('assits/sounds/inputClickSound.mp3');


// let playerOneName = document.getElementById("fPlyer");
// let playerTowName = document.getElementById("sPlyer");
// let enterBtn = document.querySelector(".enter");
// window.onload = () => {
//   const popupContainer = document.querySelector(".popupContainer");
//   popupContainer.classList.add("backgroundBlur");
//   document.querySelector(".askname").style.marginTop = "0px";

// }
let enterBtn = document.querySelector(".playBtn")
enterBtn.onclick = function () {
  // document.querySelector("")
  // console.log();

  if (/^[a-zA-Z]+$/.test(playerOneName.value.trim()) && /^[a-zA-Z]+$/.test(playerTowName.value.trim())) {
    document.querySelectorAll(".PlayerOneName").forEach((el, index) => {
      el.textContent = playerOneName.value.trim().split(" ")[0].replace(/[0-9]/g, '').charAt(0).toUpperCase() + playerOneName.value.trim().split(" ")[0].replace(/[0-9]/g, '').slice(1);
    })
    document.querySelectorAll(".playertowName").forEach((el, index) => {
      el.textContent = playerTowName.value.trim().split(" ")[0].replace(/[0-9]/g, '').charAt(0).toUpperCase() + playerTowName.value.trim().split(" ")[0].replace(/[0-9]/g, '').slice(1);
    });
    document.querySelector(".popupContainer").style.display = "none";
    plyerAnimation()
  };


};

function plyerAnimation() {
  const tl = gsap.timeline();

  tl.to('.player-1, .plyerOnename', {
    opacity: 1,
    marginTop: "0px",
    stagger: 0.3,
    duration: 0.5,
  });

  gsap.to('.player-2, .plyerTowname', {
    marginTop: "0px",
    opacity: 1,
    stagger: 0.3,
    duration: 0.5,
  });

  tl.to('.vsImg', {
    scale: 1,
    duration: 0.5,
  });
}

let t;
let startBtn = document.querySelector(".playBtn");
startBtn.onclick = function () {
  startBtn.style.pointerEvents = "none"
  gsap.to('.player-1, .plyerOnename', {
    opacity: 1,
    marginTop: "-500px",
    stagger: 0.3,
    duration: 0.5,
    delay: 3.3
  });

  gsap.to('.player-2, .plyerTowname', {
    marginTop: "-500px",
    opacity: 1,
    stagger: 0.3,
    duration: 0.5,
    delay: 3.3
  });



  gsap.to('.vsImg', {
    scale: 0,
    duration: 0.5,
    delay: 3,
    onComplate: function () {
      setTimeout(() => {

        document.querySelector(".loading ").style.display = "none";
        const tl = gsap.timeline()
        tl.to('.vsImg', {
          scale: 0,
          duration: 0.5,
          onComplate: function () {
            document.querySelector(".loading").style.display = "none";

            gsap.to('.line1 ', {
              left: "35.6%",
              opacity: 1,
              stagger: 0.3,
              duration: 0.5,
            });
            gsap.to('.line2 ', {
              left: "64%",
              opacity: 1,
              stagger: 0.3,
              duration: 0.5,
            });
            gsap.to('.line3 ', {
              top: '-43%',
              opacity: 1,
              stagger: 0.3,
              duration: 0.5,
            });
            gsap.to('.line4 ', {
              top: '-11%',
              opacity: 1,
              stagger: 0.3,
              duration: 0.5,
            });
          }

        });


      }, 1000);
    }
  });

  let widhtValue = 0;
  t = setInterval(() => {
    widhtValue++;
    loadingLine();
  }, 25);
  function loadingLine() {
    if (widhtValue == 100) {
      clearInterval(t);
    }
    console.log('');
    document.querySelector(".loading-line-inner ").style.width = `${widhtValue}%`
  }




};



const boxes = document.querySelectorAll(".box");
const arr = ["❌", "0️⃣"];
let totalClick = 0;
let crose = 0;
let zero = 0;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

boxes.forEach((el, i) => {
  el.addEventListener('click', function (event) {
    el.style.pointerEvents = "none";
    el.textContent = arr[totalClick % 2];
    totalClick++;
    checkWinner();
    try {
      // Attempt to play the audio
      document.getElementById("a").play();
    } catch (error) {
      // Log any errors to the console
      console.error('Error playing audio:', error.message);
    }
  });
});

function checkWinner() {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (boxes[a].textContent === arr[0] && boxes[b].textContent === arr[0] && boxes[c].textContent === arr[0]) {
      crose++
      updateScores();
      winnerOne() 
      return;
    } else if (boxes[a].textContent === arr[1] && boxes[b].textContent === arr[1] && boxes[c].textContent === arr[1]) {
      zero++;
      updateScores();
      winnerTow();
      return;
    }
  }

  if (totalClick === 9) {
    winMsg();
  }
}

function updateScores() {
  document.getElementById("scoreValue").innerText = crose;
  document.getElementById("zeroValue").innerText = zero;
}

function winMsg() {
  totalClick = 0;

  boxes.forEach((el, i) => {
    el.textContent = "";
    el.style.pointerEvents = "all";
  });
}
const winnerDisplay = document.querySelector(".winerDisplay");
function winnerOne() {
 document.getElementById("b").play();
  winnerDisplay.style.opacity = "1";
  winnerDisplay.style.pointerEvents = "all";
    winnerDisplay.innerHTML = ` <h4>WINNER </h4>
    <img class="winerImgParent " src="/assits/athlete.png" alt="">
  
    <div class="skip">SKIP</div>`
}

function winnerTow() {
  winnerDisplay.style.opacity = "1";
  winnerDisplay.style.pointerEvents = "all";
    winnerDisplay.innerHTML = `  <h4>WINNER </h4>
    <img class="winerImgParent " src="/assits/soccer-player.png" alt="">
    <div class="skip">SKIP</div>`;
}

winnerDisplay.addEventListener('click', function(event) {
  if (event.target.classList.contains('skip')) {
    winnerDisplay.style.opacity = "0";
  winnerDisplay.style.pointerEvents = "none";
  }
});