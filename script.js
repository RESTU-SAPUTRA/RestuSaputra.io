let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let Arr = Array.from(buttons);

Arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        const btnText = e.target.innerHTML; // Gunakan variabel untuk efisiensi
        if (btnText === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (btnText === "AC") {
            string = "";
            input.value = string;
        } else if (btnText === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } else if (btnText === "÷") {
            string += "/";
            input.value = string;
        } else if (btnText === "x") {
            string += "*";
            input.value = string;
        } else {
            string += btnText;
            input.value = string;
        }
    });
});
