
function addNewTask(){
    let contador = 0
    var list = document.getElementById("list-item");
    var text = document.getElementById("task-name").value;

    if(text.length == 0){
        alert('Tarefa precisa ter mais de 1 caractér')
        return;
    }
    
    var listItem = document.createElement("li")
    listItem.className = "listArraysValues"
    
    //let listArray = []


    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}

function removeTask(){

}