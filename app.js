const input = document.getElementById('input')
const button = document.getElementById('button')
const todoList = document.getElementById('todo-container')
const select = document.getElementById('select')

// Event-Listner

button.addEventListener('click', showList);
todoList.addEventListener('click',checkTrash)
select.addEventListener('click', selectOption)

// function

function showList(e){
    e.preventDefault()

    // making the ul

    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-container')

    // making li 
    let li = document.createElement('li');
    li.innerText = input.value;
    li.classList.add('todo-list')
    todoDiv.appendChild(li)

    
    // making the chck button
    let check = document.createElement('div');
    check.innerHTML = '<img src="/images/check-circle.svg" alt="hello">'
    check.classList.add('check-button')
    todoDiv.appendChild(check)

    // making the trash button
    let trash = document.createElement('div');
    trash.classList.add('trash-button')
    trash.innerHTML = '<img src="/images/trash-2.svg" alt="hello">';
    todoDiv.appendChild(trash)

    // append the container to todo list container
    todoList.appendChild(todoDiv)
    input.value = ''
}


// check list function
function checkTrash(e){
    let item = e.target;
    
    // event fire on when we click the check button 
    if(item.classList[0] === "check-button"){
        let todo = item.parentElement
        todo.classList.add('complited')
    }

    // event fire on when we click the trash button

    if(item.classList[0] === "trash-button"){
        let todo = item.parentElement;
        todo.classList.add('remove')
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        })
    }
    
}


function selectOption(e){
    let item = todoList.chilNodes;

        console.log(item)
}