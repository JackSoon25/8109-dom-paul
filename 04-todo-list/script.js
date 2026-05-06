// DOMContentLoaded is an event that happens automatically when all the HTML elements have been created
// in other words, when the event happens, the webpage is ready
document.addEventListener("DOMContentLoaded", function () {
    // the tasks array is from data.js global scope
    displayTasks(tasks);

    const addTodoButton = document.querySelector("#addTodo");
    addTodoButton.addEventListener("click", function(){
        const name = document.querySelector("#name").value;
        const dueDate = document.querySelector("#dueDate").value;
        const urgency = document.querySelector("#urgency").value;

        addTask(tasks, name, dueDate, urgency);

        displayTasks(tasks);

        
    })

})

function displayTasks(tasks) {
    // select the task list to append child into later
    const taskListUl = document.querySelector("#taskList");

    // remove all the existing tasks
    taskListUl.innerText = "";

    for (let t of tasks) {
        const liElement = document.createElement("li");
        liElement.className = "list-group-item d-flex justify-content-between";
        // alternatively:
        // liElement.classList.add('list-group-item');
        // liElement.classList.add('d-flex');
        // liElement.classList.add('justify-content-between');

        liElement.innerHTML = `
            <div>${t.name}</div>
            <div>Date Due: ${t.dateDue}</div>
            <div>Urgency: ${t.urgency}</div>
        
        `

        taskListUl.appendChild(liElement);
    }


}

