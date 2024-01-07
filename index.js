const element = document.getElementById("box");

element.addEventListener("click", () => {
    if (element.style.background === "red") {
        element.style.background = "blue";
    } else {
        element.style.background = "red";
    }
})