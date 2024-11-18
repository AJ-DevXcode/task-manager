document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    
    if (taskValue) {
        const taskList = document.getElementById('task-list');
        
        // Create new list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskValue;

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        taskItem.appendChild(deleteBtn);

        // Append task item to list
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';

        // Add delete functionality
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });
    }
});