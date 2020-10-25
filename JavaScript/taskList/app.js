/* Selecting all the constants */

const form = document.querySelector('#task-form');
const task = document.querySelector('#task');
const addTaskBtn = document.querySelector('.btn');
const filter = document.querySelector('#filter');
const clrTaskBtn = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection');

function makeList (value) {
    
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(value));
    const link = document.createElement('a');
    link.className = ' delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    return li ;

}

function toStorage (task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [] ;
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function fromStorage () {
    if(localStorage.getItem('tasks') !== null){
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(function(task){
            li = makeList(task);
            taskList.appendChild(li);

        })
    }
}



/* Event Listeners */ 

form.addEventListener('submit',addTask);







/* All funtions */


function addTask(e){
    if(task.value === ''){
        alert('Input can not be empty !!')
    }
    else{
        toStorage(task.value);
        li = makeList(task.value);
        taskList.appendChild(li);
        task.value = '' ;
        e.preventDefault();
    }
}








