document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.className = 'task-text';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    
    li.appendChild(taskTextSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    taskInput.value = '';
}
