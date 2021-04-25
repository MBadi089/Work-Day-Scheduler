//--------------------global Variables----------------------//
var tasks = $('.description');
var savedTasks = JSON.parse(localStorage.getItem("savedTasks")) || [];
var saveButton = document.getElementById('saveBtn');
var deleteButton = document.getElementById('delBtn');
var addToDo = document.getElementById('addToDo');

//-----------------End of global Variables------------------//

//----------------------Time Function-----------------------//
function currentTime() {
    var currentDate = moment();
  
    $("#currentDay").html(currentDate.format("dddd, MMMM DD"));
    
    var currentHour = currentDate.hours();
    
    $(".description").addClass("future");
    
    if(currentHour > 17){
      $(".description").removeClass("future");
      $(".description").addClass("past");
    } else {
    for(var i = currentHour - 1; i >= 9; i--){
      $(".description").eq(i - 9).removeClass("future");
      $(".description").eq(i - 9).addClass("past");
      }
      $(".description").eq(currentHour - 9).removeClass("future");
      $(".description").eq(currentHour - 9).addClass("present");
    }
    loadTasks();
  };
  
  currentTime();
//-----------------End of Time Function---------------------//


//--------------------addingToDo Function-------------------//
function addingToDo() {
    var addToDo = document.getElementById('addToDo').value;

    if(addToDo.length < 3 || addToDo.length > 30) {
        alert('Characters must be greater than 3 and less than 30!')
    }
    else {
        alert('You added to the ToDo list!')
}
saveToDo();
}
//----------------End of addingToDo Function----------------//


//--------------------deleteToDo Function-------------------//
function deleteToDo() {
    deleteButton = localStorage.removeItem(addToDo);
}
//----------------End of deleteToDo Function----------------//


//---------------------saveToDo Function--------------------//
function saveToDo(index) {

    savedTasks[index] = tasks[index].value;
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));


}
//------------------End of saveToDo function-----------------//
function loadTasks() {
for(var i = 0; i < savedTasks.length; i++) {
    tasks[i].value = savedTasks[i];
    }
}

//-------------------addEventLisnter Section-----------------//
document.getElementById('delBtn').addEventListener('click', deleteToDo);
document.getElementById('saveBtn').addEventListener('click', saveToDo);

//-----------------End of addEventLisnter Section------------//
