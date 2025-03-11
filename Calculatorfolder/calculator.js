var icon = document.getElementById("icon");
var audio = new Audio("click.mp3");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    icon.src = "sunny.png";
}

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    audio.currentTime = 0;
    audio.play();

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "sunny.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "moony.png";
        localStorage.setItem("theme", "light");
    }

    icon.classList.add("rotate");

    setTimeout(() => {
        icon.classList.remove("rotate");
    }, 500);
};

function addValue(value) {
    document.forms["calcForm"]["answer"].value += value;
}

function calculate() {
    let inputField = document.forms["calcForm"]["answer"];
    let expression = inputField.value;

    try {
        // Convert percentages (e.g., "50%" -> "0.5")
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        // Evaluate the mathematical expression safely
        inputField.value = new Function(`return ${expression}`)();
    } catch {
        inputField.value = "Error";
    }
}

function clearInput() {
    document.forms["calcForm"]["answer"].value = "";
}

function backspace() {
    let inputField = document.forms["calcForm"]["answer"];
    inputField.value = inputField.value.slice(0, -1);
}
