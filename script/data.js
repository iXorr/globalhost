function getTasks() {
    let userTasks = localStorage.getItem('userTasks');

    if (userTasks) {
        return JSON.parse(userTasks);
    }

    return [];
}

let userTasks = getTasks();

function setNewTask() {
    let newTask = {};

    for (let input of tasks_menu_inputs) {
        switch (input.id) {
            case 'task-title':
                newTask.title = input.value;
                break;

            case 'task-descr':
                newTask.descr = input.value;
                break;

            case 'subtask__first-input':
                newTask.subtask1 = input.value;
                break;

            case 'subtask__second-input':
                newTask.subtask2 = input.value;
                break;

            case 'subtask__third-input':
                newTask.subtask3 = input.value;
                break;
        }
    }

    return newTask;
}

function pushNewTask(newTask) {
    userTasks.push(newTask)
}

function updateTasks() {
    localStorage.setItem('userTasks', JSON.stringify(userTasks));
}

btn_submit.onclick = () => {
    pushNewTask(setNewTask());
    updateTasks();
}

// Если есть хоть одна задача

if (userTasks.length > 0) {
    header_no_tasks.style.display = 'none';

    for (let task of userTasks) {

        let taskElem = document.createElement('div');
        taskElem.classList.add('task-element');

            let taskChecker = document.createElement('input');
            taskChecker.classList.add('task-checker');
            taskChecker.type = 'radio';
            taskElem.prepend(taskChecker);

            let taskBody = document.createElement('div');
            taskBody.classList.add('task-body');

                let taskHeader = document.createElement('h1');
                taskHeader.classList.add('task-body__title');
                taskHeader.textContent = task.title;
                taskBody.prepend(taskHeader);

            taskElem.append(taskBody);

        task_collection.append(taskElem);
    }
}

// console.log(task_collection)


{/* <div class="task-element">
    <input type="radio" class="task-checker">

    <div class="task-body">
        <h1 class="task-body__title">ЗАГОЛОВОК</h1>
        <div class="task-body__popup task-body__list">ОПИСАНИЕ</div>

        <ul class="task-body__popup task-body__list">
            <li class="task-body__list-item">ПОДЗАДАЧА 1</li>
            <li class="task-body__list-item">ПОДЗАДАЧА 2</li>
            <li class="task-body__list-item">ПОДЗАДАЧА 3</li>
        </ul>
    </div>
</div> */}