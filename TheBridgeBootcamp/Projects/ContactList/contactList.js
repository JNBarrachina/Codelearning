const contact = document.getElementById("addContact");
contact.addEventListener("click", newContact);

function newContact() {
    let name = document.getElementById("addName").value;
    let tlf = document.getElementById("addTel").value;
    let mail = document.getElementById("addEmail").value;

    let pName = document.createElement("p");
    pName.innerText = name;
    pName.setAttribute("class", "contactName");
    let pTlf = document.createElement("p");
    pTlf.innerText = tlf;
    let pMail = document.createElement("p");
    pMail.innerText = mail;
    pMail.setAttribute("class", "contactMail");

    let newContactBox = document.createElement("article");
    newContactBox.setAttribute("class", "contactBox");

    let contactInitial = document.createElement("span");
    contactInitial.setAttribute("class", "nameInitial");
    contactInitial.innerText = name.charAt(0);

    let contactData = document.createElement("section");
    contactData.setAttribute("class", "contactData");
    contactData.appendChild(pName);
    contactData.appendChild(pTlf);
    contactData.appendChild(pMail);

    newContactBox.appendChild(contactInitial);
    newContactBox.appendChild(contactData);
    document.getElementById("cList").appendChild(newContactBox);
}
