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
function init(){
console.log("Task Manager");
//load data

//hook events
$("#iImportant").click(toggleImportant);
$("#btnShowHide").click(togglePanel);
}
window.onload=init;
