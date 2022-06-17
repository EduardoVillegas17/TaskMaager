const nonImIcon="fas fa-calendar-day";
const impIcon="far fa-calendar-day";
var isImportant = false;
var isVisible= true;

function toggleImportant(){
    if(isImportant){
        $("#iImportant").removeClass(impIcon).addClass(nonImIcon);
    isImportant=false;
    }
    else{
    $("#iImportant").removeClass(nonImIcon).addClass(impIcon);
    isImportant=true;
    }
}
function togglePanel(){
    if(isVisible){
        $(".form").fadeOut();
        isVisible=false;
    }else{
        $(".form").fadeIn();
        isVisible=true;
    }
}
function saveTask(){
    console.log("Task saved!!!");

    let title= $("#txtTitle").val();
    let duration  = $("#txtDuration").val();
    let deadLine  = $("#txtdeadLine").val();
    let theLocation  = $("#txtLocation").val();
    let statu     = $("#txtStatu").val();
    console.log(title, duration, deadLine, theLocation, statu);

    let task=new Task(0,title,isImportant,duration,deadLine,theLocation,statu);
    console.log(task);
    
    displayTask(task);
    
}

function displayTask(task){

    let syntax= `<div class='task'>
        <h3>${task.title}</h3>
        <label>${task.theLocation}</label>
        <div class='dates'>
            <label>${task.duration}</label>
            <label>${task.deadline}</label>
        </div>
    </div>`;

    $("#task-list").append(syntax);
}

function init(){
    runTests();
console.log("Task Manager");
//load data

//hook events
$("#iImportant").click(toggleImportant);
$("#btnShowHide").click(togglePanel);
$("#btnSave").click(saveTask);

}

window.onload=init;
