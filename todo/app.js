function todo(){
    var todo = document.getElementById("todo")
    var list = document.getElementById("list")
    var li = document.createElement("li")
    var text = document.createTextNode(todo.value)
    li.appendChild(text)

    var delbtn = document.createElement("button")
    var del = document.createTextNode("DELET")
    delbtn.setAttribute("onclick" , " delItem(this)")

    var editbtn = document.createElement("button")
    var edit = document.createTextNode("EDIT")
    editbtn.setAttribute("onclick" , "editItem(this)")

    editbtn.appendChild(edit)
    li.appendChild(editbtn)
    
   delbtn.appendChild(del)
    li.appendChild(delbtn)

    var editbtn = document.createElement("button")
    var edit = document.createTextNode("EDIT")
    editbtn.setAttribute("onclick" , "editItem(this)")
    editbtn.appendChild(edit)

    list.appendChild(li)
    todo.value = ""
}



function delItem(e){
    e.parentNode.remove()
}


function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter update value", val) 
    e.parentNode.firstChild.nodeValue = editvalue
}


function delAll(){
    list.innerHTML = ""
}