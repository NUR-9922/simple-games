let allBox = document.querySelectorAll(".box");
let inner = document.querySelectorAll(".inner");
let allBack = document.querySelectorAll(".back");
let emojiArr = ["⚽", "🏏", "⚽", "🏏", "⚽", "🏏", "⚽", "🏏", "🏏"];
let inputValue = new Array();
function setValueOnBoxes() {
    for (let index = 0; index < allBox.length; index++) {
        let randomNumber = Math.floor(Math.random() * emojiArr.length);
        allBack[index].textContent = emojiArr[randomNumber];
    }
}
setValueOnBoxes();
let click = null;
allBox.forEach((el, index) => {
    el.onclick = function () {
        click++;
        stopGame();
        inner[index].style.transform = "rotateY(180deg)";
        checkValue(index);
    };
});

function stopGame() {
    if (click === 3) {
        allBox.forEach((el) => { el.style.pointerEvents = "none" })
    }
}
let reset = document.querySelector(".reset")
reset.addEventListener('click', resetGame);

function resetGame() {
    if (click === 3) {
        inputValue = [];
        click = null;
        allBox.forEach((el) => { el.style.pointerEvents = "all" })
        inner.forEach((el) => { el.style.transform = "rotateY(0deg)" });
        setValueOnBoxes();
    }
}

let show = document.querySelector(".show");
show.addEventListener('click',
    function show() {
        if (click === 3) {
            allBox.forEach((el) => { el.style.pointerEvents = "none" })
            inner.forEach((el) => { el.style.transform = "rotateY(180deg)" });

        }
    })


function checkValue(index) {
    inputValue.push(allBack[index].textContent);
    if (inputValue[0] == "⚽" && inputValue[1] == "⚽" && inputValue[2] == "⚽") {
        alert("congratulations! : ⚽")
    }

    else if (inputValue[0] == "🏏" && inputValue[1] == "🏏" && inputValue[2] == "🏏") {
        alert("congratulations! : 🏏")
    }
}


