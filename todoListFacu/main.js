var btn = document.getElementById('btn');

btn.addEventListener('click', addTask);
btn.addEventListener('click', createButton);

var task = document.getElementById('task');

var contenedor = document.getElementById('container');

var text;

var newTask = text;

var buttonDeleteText = 'remove';



// Getting value from input text.

task.addEventListener('keyup', () => {    
    text = task.value;
    newTask = text;

});

// End.

//Listen from button.- Create task inner DOM.

function addTask(){
    console.log("agregaste " + newTask);

    //1- create element.
    var box = document.createElement('div');
    //2- create node Text.
    var container = document.createTextNode(newTask);
    //3- add the node of text to element.
    box.appendChild(container);
    //4- add the node of text to element.
    box.setAttribute('class', 'boxTask');
    box.setAttribute('id', 'box');
    //5- add element to DOM.
    contenedor.appendChild(box);

    var x = document.getElementById('box');
    
    arrayDeleteDiv.push(x);
    
}

// Listen from button.- Create delete button inner DOM.

function createButton(){
    console.log('Creaste un nuevo boton');
    //1- create element.
    var btnDeleteTask = document.createElement('button');
    //2- create node Text.
    var container = document.createTextNode('X');
    //3- add the node of text to element.
    btnDeleteTask.appendChild(container);
    //4- add the attribute of text to element.
    btnDeleteTask.setAttribute('class', 'btnDelete');
    btnDeleteTask.setAttribute('id', 'btnDelete');
    //5- add element to DOM.
    contenedor.appendChild(btnDeleteTask);

    var y = document.getElementById('btnDelete');
    y.addEventListener('click', ()=>{console.log('tocaste')})

    arrayBtnDelete.push(y)
    
}

// Right Now, create function to detele task.

var arrayDeleteDiv = [];


var arrayBtnDelete = [];









/*if(!createButton() === true){ 
    var deleteBox = document.getElementById('btnDelete');
    deleteBox.addEventListener('click', ok);
    function ok(){
        console.log('todo ok');
    }
}else{
    console.log('capo')
}*/
/*var deleteBox = document.getElementById('btnDelete');
deleteBox.addEventListener('click', ok);*/



//End


