const startBtn = document.getElementById('start-btn');
const titleText = document.getElementById('title-text');
const subtitleText = document.getElementById('subtitle-text');
const footer = document.getElementsByTagName('footer')[0];

const nav = document.getElementById('nav');
const exitBtn = document.getElementById('exit-btn');
const correctNumQu = document.getElementById('correct#');
const totalNumQu = document.getElementById('total#');

const clickBtns = document.getElementsByClassName('click');
const easyBtn = document.getElementById('easy-btn');
const mediumBtn = document.getElementById('medium-btn');
const hardBtn = document.getElementById('hard-btn');

const eb = document.getElementById('equation-bar');
const ch = document.getElementById('calculation-head');
const calculator = document.getElementById('calculator-body');
const modeSel = document.getElementById('mode-selector');

let typedString = "";
let correctQu = 0
let totalQu = 0
mode = "easy"
const acceptableInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", ".", "*", "%"];

exitBtn.addEventListener('click', () => {
    titleText.classList.remove('hide');
    subtitleText.classList.remove('hide');
    startBtn.classList.remove('hide');
    eb.classList.add('hide');
    nav.classList.add('hide');
    modeSel.classList.add('hide');
    calculator.style.display = 'none';
});

startBtn.addEventListener('click', () => {
    titleText.classList.add('hide');
    subtitleText.classList.add('hide');
    startBtn.classList.add('hide');
    eb.classList.remove('hide');
    nav.classList.remove('hide');
    modeSel.classList.remove('hide');
    calculator.style.display = 'grid';
});

easyBtn.addEventListener('click', () => {
    mode = "easy";
    newEquation(mode)
});
mediumBtn.addEventListener('click', () => {
    mode = "medium";
    newEquation(mode)
});
hardBtn.addEventListener('click', () => {
    mode = "hard";
    newEquation(mode)
});

newEquation(mode)

document.onkeydown = function (e) {
    if (acceptableInputs.includes(e.key)) {
        switch(e.key) {
            case "/":
                typedString += "÷";
                ch.innerHTML = typedString;
                break;
            case "*":
                typedString += "×";
                ch.innerHTML = typedString;
                break;
            default:
                typedString += e.key;
                ch.innerHTML = typedString;
                break;
        }
    } else if (e.key === 'Backspace') {
        typedString = "";
        ch.innerHTML = typedString;
    } else if (e.key === "=" || e.key === "Enter") {
        if (eb.innerHTML === typedString + '=') {
            ch.style.backgroundColor = "#00ff00"
            ch.innerHTML = "|"
            updateStats('correct')
            setTimeout(() => {
                ch.style.backgroundColor = "#fff"
            }, 500);
        } else {
            ch.style.backgroundColor = "#ff0000"
            ch.innerHTML = "|"
            updateStats('incorrect')
            setTimeout(() => {
                ch.style.backgroundColor = "#fff"
            }, 500);
        }
    }
}

for (let i = 0; i < clickBtns.length; i++) {
    clickBtns[i].addEventListener('click', function (e) {
        typedString += e.target.innerHTML;
        ch.innerHTML = typedString;
    });
}


function updateStats(type) {
    switch(type) {
        case 'correct':
            correctQu = correctQu + 1
            totalQu = totalQu + 1
            typedString = ""
            correctNumQu.innerHTML = correctQu;
            totalNumQu.innerHTML = totalQu
            newEquation(mode)
        break;
        case 'incorrect':
            totalQu = totalQu + 1
            typedString = ""
            correctNumQu.innerHTML = correctQu;
            totalNumQu.innerHTML = totalQu
            newEquation(mode)
        break;
    }
    return;
}

function newEquation(mode) {
    if (mode == "easy") {
        let segments = 2;
        randomise(segments);
    } else if (mode == "medium") {
        let segments = 3;
        randomise(segments);
    } else if (mode == "hard") {
        let segments = 4;
        randomise(segments);
    }
}

function randomise(segments) {
    const operators = ["+/-", "÷", "×", "-", "+", "√", "M+", "M-", "MRC"];
    const content = ["r", "rr", "rrr", "rrrr", ".r", ".rr", ".rrr", ".rrrr"];
    let equation = "";
    let pos = 0;
    for (let i = 0; i < segments; i++) {
        let randomOperator = operators[Math.floor(Math.random() * operators.length)];
        let randomContent = content[Math.floor(Math.random() * content.length)];

        if (i + 1 === segments) {
            equation += randomContent
        } else {
            equation += randomContent += randomOperator;
        }
    }

    String.prototype.replaceAt = function (index, char) {
        let a = this.split("");
        a[index] = char;
        return a.join("");
      }

    for (let i = 0; i < equation.length; i++) {
        if (equation[pos] === "r") {
            equation = equation.replaceAt(pos, Math.floor(Math.random() * 9))
        }
        pos++;
    }
    equation += "=";
    eb.innerHTML = equation;
}