const contact = document.getElementById("addContact");
contact.addEventListener("click", newContact);

function newContact(){
    
        let name = document.getElementById("addName").value;
        let tlf = document.getElementById("addTel").value;
        let mail = document.getElementById("addEmail").value;
    
        let newPerson = document.createElement("section");
        newPerson.setAttribute("class", "contacto");

            
        document.getElementById("cList").appendChild(newPerson);
}