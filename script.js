// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event listener for adding a new task
addTaskBtn.addEventListener('click', () => {
    // Get the value of the task input
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new list item
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = taskText;

        // Append the new task to the task list
        taskList.appendChild(newTaskItem);

        // Clear the task input field
        taskInput.value = '';

        // Focus back on the input field for convenience
        taskInput.focus();
    } else {
        alert('Please enter a task!');
    }
});

// Event listener for removing a task (delegation)
taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        // Remove the clicked task
        event.target.remove();
    }
});
