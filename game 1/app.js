let setIntervalId;
let secValue = 0;
let minValue = 0;
let meinBox = document.querySelector(".mein-box");
let input = document.getElementById("TotalNumber");
let startGamebtn = document.getElementById("enter");
let value;
let numberArray;
let randomNumber = [];
let inputNumber = [];
// Event handler for the button click
startGamebtn.onclick = function () {
    // Check if the input is not empty
    if (input.value !== "" && input.value <= 100) {
        value = parseInt(input.value) + 1;
        mein();
        startGamebtn.style.pointerEvents = "none";
    }
};

let resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = function () {
    resetTimer()
    document.querySelector(".congratulations").style.display = "none";
    startGamebtn.style.pointerEvents = "all";
    meinBox.style.minHeight = "200px"
    meinBox.innerHTML = `<div class="inner">
    <div class="mein-box-heading">Welcome to the Number Finding Game! Can you find all the numbers from 0 to
        your given value ?</div>
    <div class="mein-box-sub-heading">Here's how to play:</div>
    <ol class="ol">
        <li>Enter a number (not greater than 100) and click "Start Game".</li>
        <li>Boxes with random numbers will appear. Your goal is to find and click them in order.</li>
        <li>If you click the correct number, the box turns green. If not, it turns red.</li>
        <li>Try to find all numbers as quickly as possible!</li>
    </ol>
</div>
`;
};

function resetTimer() {
    secValue = 0;
    minValue = 0;
    document.getElementById("sec").textContent = 0;
    clearTimeout(setIntervalId);
    input.value = "";
};


function mein() {
    meinBox.innerHTML = ""; // Clear existing elements
    randomNumber = [];
    inputNumber = [];
    let indexValue = 0;
    meinBox.style.minHeight = "50px";
    numberArray = Array.from({ length: value}, (_, index) => index);

    function showNumberBox() {
        numberArray.forEach(function () {
            reduceDuplicateNumber();
            gsap.to('.box', {
                opacity: 1,
                scale: 1.1,
                stagger: 0.01,
                marginTop: 0,
                duration: .1,
                onComplite: createBoxElement(),

            });
        });

    }
    showNumberBox();

    function startSimer() {
        let min = document.getElementById("min");
        let sec = document.getElementById("sec");

        setIntervalId = setInterval(() => {
            sec.textContent = secValue;
            secValue++;
            if (secValue === 60) {
                secValue = 0;
                minValue++;
                min.textContent = minValue
            }
        }, 1000)
    }
    startSimer()



    function createBoxElement() {
        let box = document.createElement("div");
        box.classList.add("box");
        box.textContent = randomNumber[randomNumber.length - 1];
        meinBox.appendChild(box);
    }

    function reduceDuplicateNumber() {
        let j;
        do {
            j = Math.floor(Math.random() * numberArray.length);
        } while (randomNumber.includes(j));

        randomNumber.push(j);
    }


    indexValue = 0;
    let boxs = document.querySelectorAll(".box");
    boxs.forEach((el, index) => {
        el.style.backgroundColor = "transparent";
        el.onclick = function () {
            inputNumber.push(el.textContent);
            checkArrays(el, index);
            congratulations();
        };
    })

    let curectInput = [];
    function checkArrays(el, index) {
        if (inputNumber[indexValue] == numberArray[indexValue]) {
            curectInput.push(index);
            // console.log(curectInput);
            resetBoxColor();
            setBoxColor();
            indexValue++;

        }
        else {
            el.style.backgroundColor = "#d73445";
            el.style.color = "#fff";
            inputNumber.splice(inputNumber.length - 1, 1);

        }


    }
    function resetBoxColor() {
        boxs.forEach((el) => {
            el.style.backgroundColor = "";
            el.style.color = "#000";
        });
    }

    function setBoxColor() {
        curectInput.forEach((value) => {
            boxs[value].style.backgroundColor = "#04aa6d";

            boxs[value].style.pointerEvents = "none";
            boxs[value].style.color = "#fff";
        })
    }
}


function congratulations() {
    if (numberArray.length === inputNumber.length) {
        meinBox.innerHTML = ` <div  class="congrats-heading">Congratulations 🎉! You completed the game!</div>
        <div class="time-taken">Time taken: ${minValue} minutes and ${secValue} seconds ⌚</div>`;
        document.querySelector(".congratulations").style.display = " block";
        resetTimer();
    }

    else {
        startGamebtn.style.pointerEvents = "none";
    }
}