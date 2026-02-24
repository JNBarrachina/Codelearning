const emailsForm = document.getElementById("emailsForm")

const personalEmail = document.getElementById("email1")
const corpoEmail = document.getElementById("email2")

let serverList = ["terra.es", "myspace.com", "arrakis.es", "tuenti.es"]

const validateForm = (event) => {
    event.preventDefault()

    const emptyValid = emptyEmail(personalEmail) && emptyEmail(corpoEmail)
    if (!emptyValid) { return alert("Alguno de los campos está vacío") }
}

emailsForm.onsubmit = validateForm

const emptyEmail = (email) => {
    return email.value.trim() ? true : false
}