//Get element of the inputs

const task = document.getElementById('task');
const btn = document.getElementById('btn');
const table = document.getElementById('table');

//end

//Add Task on the table.


function addTask(){
    const file = document.createElement('tr');

    file.innerHTML = `
        <td class="CheckBox" onclick="completed()"><input type='checkbox'/></td>
        <td class="newTask" style='flex-grow: 2'> ${task.value} </td>
        <td> <span onClick="removeTask()"> x </span></td>
    `;
    table.appendChild(file);
}

//listen on click in the button.

btn.addEventListener('click', function(e){
    if(task.value ===""){
        alert('Add a task!') //Validate if completed check box.
    }else {
        addTask();
    }
});




//end

//Add function for remove task

function removeTask(event){
    this.event.target.parentElement.parentElement.remove();
}


//End.

//Task complete.

function completed(event){
    if(this.event.target.checked){
        this.event.target.parentElement.parentElement.classList.add('completed');
    } else {
        this.event.target.parentElement.parentElement.classList.remove('completed');
    }
}