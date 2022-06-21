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
    console.log(JSON.stringify(task));
    
    $.ajax({
        url: "https://fsdiapi.azurewebsites.net/api/tasks/",
        type:"POST",
        data:JSON.stringify(task),
        contentType:"application/json",
        success: function (response){
            let savedTask=JSON.parse(response);//parse json response into js object
            displayTask(savedTask);
        },
        error:function(details){
            console.log("Error saving",details);
        },
    });
    displayTask(task);
    
}
function getStatusText(status){
switch(status){
    case "0":
    return"New";
    case "1":
    return"In Progress";
    case "3":
    return"Blocked";
    case "6":
    return"Completed";
    case "9":
    return"Removed";
    default:
    return"missing";
}
}

function displayTask(task){
    let statusText=getStatusText(task.status);
    let syntax= `<div class='task satatus-${task.status}'>
        <h3>${task.title}</h3>
        <label>${task.theLocation}</label>
        <div class='dates'>
        <label>${statusText}</label>
            <label>${task.duration}</label>
            <label>${task.deadline}</label>
        </div>
    </div>`;

    $("#task-list").append(syntax);
}

function testRequest(){
    $.ajax({
        url: "https://fsdiapi.azurewebsites.net/",
        type:"GET",
        success: function (response){
            console.log(response);
        },
        error:function(errorDet){
            console.log("Error on request",errorDet);
        },
    });
}

function fetchTask(){
    $.ajax({
        type:"GET",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",
        success: function (response){
            let tasks=JSON.parse(response);//array for tasks
            for(let i=0; i < tasks.length;i++){
                let item=tasks[i];
                if(item.name=="Eduardo"){
                    displayTask(item);
                }
            }
        },
        error:function(dets){
            console.log("Error fetching tasks",dets);
        },
    })
}
function clearAllTask(){
    $.ajax({
        type:"DELETE",
        URL:"https://fsdiapi.azurewebsites.net/api/tasks/clear/Eduardo",
        success: function (){
            
        },

        error:function(err){
            console.error(err);
        },
    });
}
function init(){
   // runTests();
console.log("Task Manager");
//load data
fetchTask();
//hook events
$("#iImportant").click(toggleImportant);
$("#btnShowHide").click(togglePanel);
$("#btnSave").click(saveTask);
$("#btnClear").click(clearAllTask);

}

window.onload=init;
