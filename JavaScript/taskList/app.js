/* Selecting all the constants */

const form = document.querySelector('#task-form');
const task = document.querySelector('#task');
const addTaskBtn = document.querySelector('.btn');
const filterElement = document.querySelector('#filter');
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

function removeFromStorage(item){
    
    if(localStorage.getItem('tasks')!==null){
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(function(task, index){
            if(item.textContent === task){
                tasks.splice(index,1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        })
    }
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


loadAll();
function loadAll(){
/* Event Listeners */ 

// Add task
form.addEventListener('submit',addTask);

// Remove Task

taskList.addEventListener('click',deleteTask);

// filter all task

filterElement.addEventListener('input',filterLists);

}







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


function deleteTask (e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure ?')){
            e.target.parentElement.parentElement.remove();
            removeFromStorage(e.target.parentElement.parentElement); 
        }
    }
}

function filterLists(e){
    const text = e.target.value.toLowerCase();
    console.log('hello');
    
    // get all the list item and iterate through all
        document.querySelectorAll('.collection-item').forEach(function(li){
        const liContent = li.firstChild.textContent;
        if(liContent.toLowerCase().indexOf(text) !== -1){
            li.style.diplay = 'block';
        }else{
            li.style.display = 'none';
        }
    
    });  

    if(text === ''){
        document.querySelectorAll('.collection-item').forEach(function(li){
            li.style.display = 'block';
        })
    }
}







