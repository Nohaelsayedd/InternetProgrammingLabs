document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Event listener for the "Add Task" button
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for the Enter key press in the input field
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Delegated event listener for the task list (for mark complete and remove)
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            createTaskElement(taskText, false); // Add new task (not completed)
            saveTasks();
            taskInput.value = ""; // Clear the input field
        }
    }

    function createTaskElement(text, isCompleted) {
        const listItem = document.createElement('li');
        
        // Add the 'completed' class if the task is loaded as completed
        if (isCompleted) {
            listItem.classList.add('completed');
        }

        // Task Text (Clickable to mark complete)
        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = text;

        // Action Buttons (Remove)
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('data-action', 'remove');

        actionsDiv.appendChild(removeBtn);

        listItem.appendChild(taskSpan);
        listItem.appendChild(actionsDiv);
        taskList.appendChild(listItem);
    }

    function handleTaskActions(e) {
        const target = e.target;
        const listItem = target.closest('li');

        if (!listItem) return;

        // Mark as completed/uncompleted
        if (target.classList.contains('task-text')) {
            listItem.classList.toggle('completed');
            saveTasks();
        } 
        
        // Remove task
        else if (target.getAttribute('data-action') === 'remove') {
            listItem.remove();
            saveTasks();
        }
    }

    // --- Local Storage Functions ---

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(listItem => {
            const text = listItem.querySelector('.task-text').textContent;
            const isCompleted = listItem.classList.contains('completed');
            tasks.push({ text, completed: isCompleted });
        });
        // Save the array of task objects as a JSON string
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        // Retrieve the JSON string, or '[]' if nothing is saved
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

        // Create the task elements for each stored task
        storedTasks.forEach(task => {
            createTaskElement(task.text, task.completed);
        });
    }

});