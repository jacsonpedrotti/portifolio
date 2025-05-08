




/*>>>>>>>>>>>>>>>>>RESET FORM APÓS ENVIO DE FORMULÁRIO<<<<<<<<<<<<<<<<< */

const inputName = document.querySelector("#input-name")
const inputMail = document.querySelector("#input-mail")
const inputTel = document.querySelector("#input-tel")
const inputMessage = document.querySelector("#input-message")

function toSend() {
    setTimeout(() => {
    inputName.value = ""
    inputMail.value = ""
    inputTel.value = ""
    inputMessage.value = ""
    }, 4000);

}




/*>>>>>>>>>>>>>>>>>>>>>>>ANIMAÇÃO<<<<<<<<<<<<<<<<<<<<<<<<< */

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })

})

const elements = document.querySelectorAll(".hidden")

elements.forEach((element) => myObserver.observe(element))





const myObserver1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-1")
        } else {
            entry.target.classList.remove("show-1")
        }
    })

})

const elements1 = document.querySelectorAll(".hidden-1")

elements1.forEach((element) => myObserver1.observe(element))




