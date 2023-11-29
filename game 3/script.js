let boxes = document.querySelectorAll(".box");
let arr = ["❌", "0️⃣"];
let totalClick = 0;
let clickValue = 0;
boxes.forEach((el, i) => {
    el.addEventListener('click', function (event) {
        el.style.pointerEvents = "none";
        if (clickValue === 0) {
            el.textContent = arr[clickValue];
            clickValue++;
        }
        else {
            el.textContent = arr[clickValue];
            clickValue--;
        }
        check(el, i);
        totalClick++;
    }

    );

})

let crose = 0;
let zero = 0;
function check(el, i) {

    if (boxes[0].textContent === arr[0] && boxes[1].textContent === arr[0] && boxes[2].textContent === arr[0]) {
        crose++;
        reset();
    }
    else if (boxes[0].textContent === arr[1] && boxes[1].textContent === arr[1] && boxes[2].textContent === arr[1]) {
        zero++;
        reset();
    }
    else if (boxes[3].textContent === arr[0] && boxes[4].textContent === arr[0] && boxes[5].textContent === arr[0]) {
        crose++;
        reset();
    }
    else if (boxes[3].textContent === arr[1] && boxes[4].textContent === arr[1] && boxes[5].textContent === arr[1]) {
        zero++;
        reset();
    }

    else if (boxes[6].textContent === arr[0] && boxes[7].textContent === arr[0] && boxes[8].textContent === arr[0]) {
        crose++;
    }
    else if (boxes[6].textContent === arr[1] && boxes[7].textContent === arr[1] && boxes[7].textContent === arr[1]) {
        zero++;
    }
    else if (boxes[0].textContent === arr[0] && boxes[3].textContent === arr[0] && boxes[6].textContent === arr[0]) {
        crose++;
        reset();
    }
    else if (boxes[0].textContent === arr[1] && boxes[3].textContent === arr[1] && boxes[6].textContent === arr[1]) {
        zero++;
        reset();
    }
    else if (boxes[1].textContent === arr[0] && boxes[4].textContent === arr[0] && boxes[7].textContent === arr[0]) {
        crose++;
        reset();
    }
    else if (boxes[1].textContent === arr[1] && boxes[4].textContent === arr[1] && boxes[7].textContent === arr[1]) {
        zero++;
        reset();
    }
    else if (boxes[2].textContent === arr[0] && boxes[5].textContent === arr[0] && boxes[8].textContent === arr[0]) {
        crose++;
        reset();
    }
    else if (boxes[2].textContent === arr[1] && boxes[5].textContent === arr[1] && boxes[8].textContent === arr[1]) {
        zero++;
        reset();
    }

    else if (boxes[0].textContent === arr[0] && boxes[4].textContent === arr[0] && boxes[8].textContent === arr[0]) {
        crose++;
        reset();
    }
    else if (boxes[0].textContent === arr[1] && boxes[4].textContent === arr[1] && boxes[8].textContent === arr[1]) {
        zero++;
        reset();
    }

    else if (boxes[2].textContent === arr[0] && boxes[4].textContent === arr[0] && boxes[6].textContent === arr[0]) {
        crose++;
        reset();
    }
    else if (boxes[2].textContent === arr[1] && boxes[4].textContent === arr[1] && boxes[6].textContent === arr[1]) {
        zero++;
        reset();
    }

    document.getElementById("scoreValue").innerText = crose;
    document.getElementById("zeroValue").innerText = zero;

    if (totalClick === 8) {
        reset();
    }

    

}




function reset() {
    boxes.forEach((el, i) => {
        el.textContent = "";
        el.style.pointerEvents = "all";
    })
}