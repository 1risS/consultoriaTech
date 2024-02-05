
const contactBtn = document.getElementById("contact")

const modal = document.getElementById("contactInfoContainer");
const span = document.getElementsByClassName("close")[0];

function handleClick() {
    console.log("hola")
    modal.classList.add("contactInfoShow")
}

contactBtn.addEventListener("click", handleClick)

function handleClose(event) {
    modal.classList.remove("contactInfoShow")
}

span.addEventListener("click", handleClose)
