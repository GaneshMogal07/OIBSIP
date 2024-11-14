const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    createTaskItem(taskText, false);
    taskInput.value = "";
}

function createTaskItem(taskText, isCompleted) {
    const li = document.createElement("li");
    li.classList.add("task-item");
    if (isCompleted) li.classList.add("completed");

    const taskTextNode = document.createElement("span");
    taskTextNode.textContent = taskText;
    li.appendChild(taskTextNode);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("task-buttons");

    if (!isCompleted) {
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.classList.add("complete");
        completeBtn.onclick = () => completeTask(li);
        buttonsDiv.appendChild(completeBtn);
    }

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");
    editBtn.onclick = () => editTask(taskTextNode);
    buttonsDiv.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => deleteTask(li, isCompleted);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(buttonsDiv);

    if (isCompleted) {
        completedTasks.appendChild(li);
    } else {
        pendingTasks.appendChild(li);
    }
}

function completeTask(taskItem) {
    taskItem.classList.add("completed");
    const completeBtn = taskItem.querySelector(".complete");
    if (completeBtn) completeBtn.remove();
    completedTasks.appendChild(taskItem);
}

function editTask(taskTextNode) {
    const newTaskText = prompt("Edit your task:", taskTextNode.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskTextNode.textContent = newTaskText.trim();
    }
}

function deleteTask(taskItem, isCompleted) {
    if (isCompleted) {
        completedTasks.removeChild(taskItem);
    } else {
        pendingTasks.removeChild(taskItem);
    }
}
