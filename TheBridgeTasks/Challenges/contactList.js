const contact = document.getElementById("addContact");
contact.addEventListener("click", newContact);

function newContact(){
    
        let name = document.getElementById("addName").value;
        let tlf = document.getElementById("addTel").value;
        let mail = document.getElementById("addEmail").value;
    
        let newPerson = document.createElement("section");
        newPerson.setAttribute("class", "contacto");

        let pName = document.createElement("p")
        pName.innerText = name;
        let pTlf = document.createElement("p")
        pTlf.innerText = tlf;
        let pMail = document.createElement("p")
        pMail.innerText = mail;

        let contactData = document.createElement("div");
        contactData.setAttribute("class", "contactData");
        contactData.appendChild(pName, pTlf, pMail)

        newPerson.appendChild(contactData)
        document.getElementById("cList").appendChild(newPerson);
}