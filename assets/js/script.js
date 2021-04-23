//--------------------global Variables----------------------//
userInput = '';
var saveButton = document.getElementById('saveBtn');
var deleteButton = document.getElementById('delBtn');
var addToDo = document.getElementById('addToDo');

//-----------------End of global Variables------------------//


//--------------------addingToDo Function-------------------//
function addingToDo() {
    var addToDo = document.getElementById('addToDo').value;

    if(addToDo.length < 3 || addToDo.length > 30) {
        alert('Characters must be greater than 3 and less than 30!')
    }
    else {
        alert('You added to the ToDo list!')
}
}
//----------------End of addingToDo Function----------------//


//--------------------deleteToDo Function-------------------//
function deleteToDo() {
    deleteButton = localStorage.removeItem(addToDo);
}
//----------------End of deleteToDo Function----------------//


//---------------------saveToDo Function--------------------//
function saveToDo() {
addingToDo()
    saveButton = localStorage.setItem('')

}
//------------------End of saveToDo function-----------------//


//-------------------addEventLisnter Section-----------------//
document.getElementById('delBtn').addEventListener('click', deleteToDo);
document.getElementById('saveBtn').addEventListener('click', saveToDo);

//-----------------End of addEventLisnter Section------------//