// Array having universal items
let todoItems = [];

// Adding new todo objects
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo);
    // console.log(todoItems);

    renderTodo();
}

// Select form selector
const form = document.getElementById("todo-form");

// Adding submit event listener
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let input = document.getElementById("todo-input");
    let text = input.value;
    // console.log(text);

    if (text !== "") {
        addTodo(text);
        input.value = '';
        input.focus();
    }
});

// Rendering list
function renderTodo() {
    // Accessing <ul>
    let lists = document.getElementById("todo-list");

    // Used to build string whose content to be put in list HTML
    let content = "";

    todoItems.map(item => {
        let li = `
            <li id=${item.id}>
                <input type="checkbox" id="check${item.id}" onclick="doneTask(${item.id})" ${item.checked ? "checked" : ""}/>
                <span id="text${item.id}" class=${item.checked ? "strike" : ""}>
                    ${item.text}
                </span>
                <button onclick="editTask(${item.id})">Edit Task</button>
                <button onclick="deleteTask(${item.id})">Delete Task</button>
            </li>
        `;
        content += (li);
    })

    // Kept outside to prevent rebuilding DOM multiple times
    lists.innerHTML = content;
}

function editTask(id) {
    let group = document.getElementById(id);
    let input = document.getElementById(group.id);

    let editSpace = document.createElement('input');
    editSpace.type = "text";
    let submitButton = document.createElement('button');
    submitButton.textContent = "Change";
    input.appendChild(editSpace)
    input.appendChild(submitButton);
    submitButton.onclick = function () {
        // console.log(editSpace.value)
        document.getElementById("text".concat(id)).textContent = editSpace.value;
        let task = todoItems.filter(item => item.id === Number(id));
        todoItems[task].text = task[text];
        console.log(task);
        input.removeChild(submitButton);
        input.removeChild(editSpace);
    }


    // let input = document.getElementById("text".concat(id));



    // input.disabled = false;
    // input.className += " activeTextInput ";

    // input.focus();
    // input.select();	

    // input.addEventListener('keyup', (event) => {
    //     let elementClicked = event.target;

    //     if(event.keyCode === 13) {
    //         let textInput = input.textContent;
    //         input.disabled = true;
    //         input.classList.remove("activeTextInput");
    //         todoList.changeTodo(position, textInput);
    //     };
    // });

    // const task = todoItems.findIndex(item => item.id === id);
    // let taskText = todoItems[task].text;
    // console.log(taskText);

    // renderTodo();
}

function deleteTask(id) {
    todoItems = todoItems.filter(item => item.id !== Number(id));
    // console.log(todoItems);
    renderTodo();
}

function doneTask(id) {
    const task = todoItems.findIndex(item => item.id === id);
    todoItems[task].checked = !todoItems[task].checked;
    
    renderTodo();
}