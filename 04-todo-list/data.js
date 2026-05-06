const tasks = [
    {
        "id": 1,
        "name":"Wash the car",
        "dateDue":"06-06-2026",
        "ugrency": 3
    },
        {
        "id": 2,
        "name":"Clean the bathroom",
        "dateDue":"07-06-2026",
        "ugrency": 5
    },
        {
        "id": 1,
        "name":"Renew bank loan",
        "dateDue":"30-06-2026",
        "ugrency": 1
    }
]

function addTask(tasks, newName, newDateDue, newUrgency) {
    let newTask = {
        id: Math.floor(Math.random() * 10000) + 1,
        name: newName,
        dateDue: newDateDue,
        urgency: newUrgency
    }
    tasks.push(newTask);
}

function deleteTask(tasks, idToDelete) {

    // goal: given id, find its index number
    let i = 0;
    let wantedIndex = -1;  // -1 does not found
    while (i < tasks.length) {

        if (tasks[i].id == idToDelete) {
            wantedIndex = i;
            break;
        }

        i = i + 1;
    }

    // if wantedIndex is not -1, then we have the found index to delete
    if (wantedIndex != -1) {
        tasks.splice(wantedIndex, 1);
    }
}

function updateTask(tasks, idToUpdate, newName, newDateDue, newUrgency) {
    let modifiedTask = {
        id: idToUpdate,
        name: newName,
        dateDue: newDateDue,
        urgency: newUrgency
    }

    let indexToUpdate = -1;
    let i = 0;
    while (i < tasks.length) {
        if (tasks[i].id == idToUpdate) {
            indexToUpdate = i;
            break;
        }
        i = i + 1;
    }

    if (indexToUpdate != -1) {
        tasks[indexToUpdate] = modifiedTask;
    }
}