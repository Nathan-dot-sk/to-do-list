var taskInput= document.getElementById("taskInput")

var addTask = document.getElementById("addTask")
var tasklist = document.getElementById("tasklist")


addTask.addEventListener("click", function(){
    console.log("hello i clicked the button")
    let tasktext = taskInput.value.trim()
  
    if (tasktext ==="")return
    createElement(tasktext)

    taskInput.value =""
})

function createElement(tasktext){

    var li = document.createElement("li")

    li.textContent = tasktext
   

    tasklist.appendChild(li)

    li.addEventListener("click", function() {
        
        li.classList.toggle("completed")
    })

    let deletebtn = document.createElement("button")
    deletebtn.textContent = "X"
    deletebtn.classList.add("delete-btn")

    li.appendChild(deletebtn);

    deletebtn.addEventListener("click", function(){
        li.remove()

    })
}