const startBtn = document.getElementById('start-btn');
const titleText = document.getElementById('title-text');
const subtitleText = document.getElementById('subtitle-text');
const footer = document.getElementsByTagName('footer')[0];

const nav = document.getElementById('nav');
const exitBtn = document.getElementById('exit-btn');
const correctNumQu = document.getElementById('correct#');
const totalNumQu = document.getElementById('total#');

const calBtn = document.getElementsByClassName('cal-button');

const easyBtn = document.getElementById('easy-btn');
const mediumBtn = document.getElementById('medium-btn');
const hardBtn = document.getElementById('hard-btn');
const extremeBtn = document.getElementById('extreme-btn');
const numberBtn = document.getElementById('number-btn');
const operatorBtn = document.getElementById('operator-btn');

const eb = document.getElementById('equation-bar');
const ch = document.getElementById('calculation-head');
const calculator = document.getElementById('calculator-body');
const modeSel = document.getElementById('mode-selector');
const blurb = document.getElementById('blurb');

let typedString = "";
let correctQu = 0;
let totalQu = 0;
let mode = "easy";
const acceptableInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", ".", "*", "%"];

exitBtn.addEventListener('click', () => {
    titleText.classList.remove('hide');
    subtitleText.classList.remove('hide');
    startBtn.classList.remove('hide');
    eb.classList.add('hide');
    nav.classList.add('hide');
    modeSel.classList.add('hide');
    calculator.style.display = 'none';
    blurb.classList.add('hide');

    easyBtn.classList.add('active');
    mediumBtn.classList.remove('active');
    hardBtn.classList.remove('active');
    extremeBtn.classList.remove('active');
    numberBtn.classList.remove('active');
    operatorBtn.classList.remove('active');

    typedString = "";
    mode = "easy";
    correctQu = 0;
    totalQu = 0;
    correctNumQu.innerHTML = correctQu;
    totalNumQu.innerHTML = totalQu;
    ch.innerHTML = "";
});

startBtn.addEventListener('click', () => {
    titleText.classList.add('hide');
    subtitleText.classList.add('hide');
    startBtn.classList.add('hide');
    eb.classList.remove('hide');
    nav.classList.remove('hide');
    modeSel.classList.remove('hide');
    calculator.style.display = 'grid';
    blurb.classList.remove('hide');
    newEquation(mode);
});

easyBtn.addEventListener('click', () => {
    mode = "easy";
    easyBtn.classList.add('active');
    mediumBtn.classList.remove('active');
    hardBtn.classList.remove('active');
    extremeBtn.classList.remove('active');
    numberBtn.classList.remove('active');
    operatorBtn.classList.remove('active');
    newEquation(mode);
});
mediumBtn.addEventListener('click', () => {
    mode = "medium";
    easyBtn.classList.remove('active');
    mediumBtn.classList.add('active');
    hardBtn.classList.remove('active');
    extremeBtn.classList.remove('active');
    numberBtn.classList.remove('active');
    operatorBtn.classList.remove('active');
    newEquation(mode);
});
hardBtn.addEventListener('click', () => {
    mode = "hard";
    easyBtn.classList.remove('active');
    mediumBtn.classList.remove('active');
    hardBtn.classList.add('active');
    extremeBtn.classList.remove('active');
    numberBtn.classList.remove('active');
    operatorBtn.classList.remove('active');
    newEquation(mode);
});
extremeBtn.addEventListener('click', () => {
    mode = "extreme";
    easyBtn.classList.remove('active');
    mediumBtn.classList.remove('active');
    hardBtn.classList.remove('active');
    extremeBtn.classList.add('active');
    numberBtn.classList.remove('active');
    operatorBtn.classList.remove('active');
    newEquation(mode);
});
numberBtn.addEventListener('click', () => {
    mode = "number";
    easyBtn.classList.remove('active');
    mediumBtn.classList.remove('active');
    hardBtn.classList.remove('active');
    extremeBtn.classList.remove('active');
    numberBtn.classList.add('active');
    operatorBtn.classList.remove('active');
    newEquation(mode);
});
operatorBtn.addEventListener('click', () => {
    mode = "operator";
    easyBtn.classList.remove('active');
    mediumBtn.classList.remove('active');
    hardBtn.classList.remove('active');
    extremeBtn.classList.remove('active');
    numberBtn.classList.remove('active');
    operatorBtn.classList.add('active');
    newEquation(mode);
});

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
            ch.style.backgroundColor = "#00ff00";
            ch.innerHTML = "";
            updateStats('correct');
            setTimeout(() => {
                ch.style.backgroundColor = "#fff";
            }, 500);
        } else {
            ch.style.backgroundColor = "#ff0000";
            ch.innerHTML = "";
            updateStats('incorrect');
            setTimeout(() => {
                ch.style.backgroundColor = "#fff";
            }, 500);
        }
    }
}

for (let i = 0; i < calBtn.length; i++) {
    calBtn[i].addEventListener('click', function (e) {
        if (e.target.innerHTML == "ON/C") {
            typedString = "";
            ch.innerHTML = "";
        } else if (e.target.innerHTML == "=") {
            if (eb.innerHTML === typedString + '=') {
                ch.style.backgroundColor = "#00ff00";
                ch.innerHTML = "";
                updateStats('correct');
                setTimeout(() => {
                    ch.style.backgroundColor = "#fff";
                }, 500);
            } else {
                ch.style.backgroundColor = "#ff0000";
                ch.innerHTML = "";
                updateStats('incorrect');
                setTimeout(() => {
                    ch.style.backgroundColor = "#fff";
                }, 500);
            }
        } else {
            typedString += e.target.innerHTML;
            ch.innerHTML = typedString;
        }
    });
}

function updateStats(type) {
    switch(type) {
        case 'correct':
            correctQu = correctQu + 1;
            totalQu = totalQu + 1;
            typedString = "";
            correctNumQu.innerHTML = correctQu;
            totalNumQu.innerHTML = totalQu;
            newEquation(mode);
        break;
        case 'incorrect':
            totalQu = totalQu + 1;
            typedString = "";
            correctNumQu.innerHTML = correctQu;
            totalNumQu.innerHTML = totalQu;
            newEquation(mode);
        break;
    }
    return;
}

function newEquation(mode) {
    if (mode == "easy") {
        let segments = 2;
        randomise(segments);
    } else if (mode == "medium") {
        let segments = 4;
        randomise(segments);
    } else if (mode == "hard") {
        let segments = 6;
        randomise(segments);
    } else if (mode == "extreme") {
        let segments = 36;
        randomise(segments);
    } else if (mode == "number") {
        let segments = 1;
        randomise(segments);
    } else if (mode == "operator") {
        let segments = 1;
        randomise(segments, mode);
    }
}

function randomise(segments, mode) {
    const operators = ["+/-", "÷", "×", "-", "+", "√", "M+", "M-", "MRC"];
    const content = ["r", "rr", "rrr", "rrrr", ".r", ".rr", ".rrr", ".rrrr"];
    let equation = "";
    let pos = 0;
    for (let i = 0; i < segments; i++) {
        let randomOperator = operators[Math.floor(Math.random() * operators.length)];
        let randomContent = content[Math.floor(Math.random() * content.length)];

        if (i + 1 === segments) {
            if (mode == "operator") {
                equation += randomOperator;
            } else {
                equation += randomContent;
            }
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
            equation = equation.replaceAt(pos, Math.floor(Math.random() * 9));
        }
        pos++;
    }
    equation += "=";
    eb.innerHTML = equation;
}
