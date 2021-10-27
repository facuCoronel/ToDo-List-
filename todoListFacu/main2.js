window.onload = function(){
    window.arrayTask = [];
}
//Listen the button.
var btnEvent = document.getElementById('btn');
btnEvent.addEventListener('click', addTheElement);
btnEvent.addEventListener('click', showArray);

//end


//Create element to 'id' container.
function addTheElement(){
    let dato = document.getElementById('task').value;

    arrayTask.push(dato);
}

//end

//Show array in the DOM.

function showArray(){
    let listTask = document.getElementById('listTask');
    listTask.innerHTML = '';


    for (const dato of arrayTask){
        let  createTask = document.createElement('p');
        createTask.setAttribute('class', 'task1');
        createTask.setAttribute('id', 'innerTask');
        createTask.innerText = dato;

        listTask.appendChild(createTask);

    }
}

//End

//Create a button for each task.








