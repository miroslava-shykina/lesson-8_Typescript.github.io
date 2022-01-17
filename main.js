let sity;
sity = "Київ";
sity = "Львів";
let address = sity;
console.log(address);
let nom = (gh) => {
    gh == 0
        ? console.log("Число 0")
        : gh % 2 == 0
            ? console.log("Число парне")
            : console.log("Число не парне");
};
let gh = prompt("Будь ласка, введіть числo!");
gh = Number(gh);
nom(gh);
function largestNumber(...arg) {
    if (arg.length == 1) {
        let result = arg[0];
        return result;
    }
    else {
        let result = arg[0];
        for (let i = 1; i < arg.length; i++) {
            if (result < arg[i]) {
                result = arg[i];
            }
        }
        return result;
    }
}
console.log(`Максимально переланий параметер: ${largestNumber(5, -2)}`);
console.log(`Максимально переланий параметер: ${largestNumber(5, -2, 30, 6)}`);
function seriesNumbers(number) {
    number = Number(number);
    if (isNaN(number)) {
        console.log(`Повинно бути числове значення.`);
        return 0;
    }
    else {
        let result = Math.sqrt(number);
        console.log(`Корінь з ${number}: ${result}`);
    }
}
let number = prompt("Будь ласка, введіть числo!");
seriesNumbers(number);
const qSel = (selector) => document.querySelector(selector);
qSel(".btn-add").addEventListener("click", () => {
    let firstWords = qSel(".words").textContent;
    let badWord = qSel(".input-word").value;
    if (qSel(".input-word").value) {
        qSel(".input-word").style.border = "1px solid gray";
        qSel(".input-word").placeholder = "word here..";
        if (firstWords == "") {
            qSel(".words").textContent = badWord;
            qSel(".input-word").value = "";
        }
        else {
            qSel(".words").textContent = `${firstWords},${badWord}`;
            qSel(".input-word").value = "";
        }
    }
    else {
        qSel(".input-word").style.border = "1px solid red";
        qSel(".input-word").placeholder = "Please write a word!";
    }
});
qSel(".btn-cenzor").addEventListener("click", () => {
    if (qSel(".textarea").value) {
        qSel(".btn-close").style.display = "block";
        qSel(".textarea").style.border = "1px solid gray";
        qSel(".textarea").placeholder = "text here..";
        let textArea = qSel(".textarea").value;
        let badWords = qSel(".words").textContent;
        let textAreaSplit = textArea.split(/\s+/);
        let badWordsSplit = badWords.split(',');
        for (let i = 0; i < badWordsSplit.length; i++) {
            for (let j = 0; j < textAreaSplit.length; j++) {
                if (textAreaSplit[j] === badWordsSplit[i]) {
                    let ar = textAreaSplit[j];
                    let newAr = ar.split("");
                    for (let a = 0; a < newAr.length; a++) {
                        newAr[a] = "*";
                    }
                    let newArjoin = newAr.join("");
                    textAreaSplit[j] = newArjoin;
                    let finishAr = textAreaSplit.join(" ");
                    qSel(".textarea").value = finishAr;
                }
            }
        }
    }
    else {
        qSel(".textarea").style.border = "1px solid red";
        qSel(".textarea").placeholder = "Please write a text!";
    }
});
qSel(".btn-reset").addEventListener("click", () => {
    qSel(".words").textContent = "";
});
qSel(".textarea").addEventListener("input", function () {
    qSel(".btn-close").style.color = "blue";
});
qSel(".btn-close").addEventListener("click", () => {
    qSel(".textarea").value = "";
    qSel(".btn-close").style.color = "white";
});
