
const contactBtn = document.getElementById("contact")

function handleClick() {
    console.log("hola")
    let contactoShow = document.getElementById("contactInfoContainer");
    contactoShow.classList.add("contactInfoShow")
}

contactBtn.addEventListener("click", handleClick)
