// JavaScript to handle page navigation and section interactivity
document.getElementById('profile-link').addEventListener('click', function() {
    switchSection('profile');
});

document.getElementById('dashboard-link').addEventListener('click', function() {
    switchSection('dashboard');
});

document.getElementById('tasks-link').addEventListener('click', function() {
    switchSection('tasks');
});

document.getElementById('messages-link').addEventListener('click', function() {
    switchSection('messages');
});

document.getElementById('calendar-link').addEventListener('click', function() {
    switchSection('calendar');
});

document.getElementById('settings-link').addEventListener('click', function() {
    switchSection('settings');
});

// Function to show/hide sections
function switchSection(sectionId) {
    const sections = document.querySelectorAll('.main-content > section');
    sections.forEach(section => section.style.display = 'none');
    
    document.getElementById(sectionId).style.display = 'block';
    
    // Update active link in sidebar
    const links = document.querySelectorAll('.sidebar nav ul li a');
    links.forEach(link => link.classList.remove('active'));
    document.getElementById(`${sectionId}-link`).classList.add('active');
}

// Task Mark as Complete
document.querySelectorAll('.mark-complete').forEach(button => {
    button.addEventListener('click', function() {
        const task = this.parentElement;
        task.style.textDecoration = 'line-through';
    });
});

// Add new task functionality
document.getElementById('add-task-btn').addEventListener('click', function() {
    document.getElementById('new-task-form').style.display = 'block';
});

document.getElementById('save-task').addEventListener('click', function() {
    const newTask = document.getElementById('new-task').value;
    if (newTask) {
        const taskList = document.getElementById('task-list');
        const newTaskElement = document.createElement('li');
        newTaskElement.innerHTML = `${newTask} <button class="mark-complete">Mark as Complete</button>`;
        taskList.appendChild(newTaskElement);
        document.getElementById('new-task').value = '';
        document.getElementById('new-task-form').style.display = 'none';

        // Add event listener to new task button
        newTaskElement.querySelector('.mark-complete').addEventListener('click', function() {
            newTaskElement.style.textDecoration = 'line-through';
        });
    }
});

// Send message
document.getElementById('send-message-btn').addEventListener('click', function() {
    const message = document.getElementById('new-message').value;
    if (message) {
        const messageList = document.getElementById('message-list');
        const newMessageElement = document.createElement('li');
        newMessageElement.innerText = message;
        messageList.appendChild(newMessageElement);
        document.getElementById('new-message').value = '';
    }
});

// Add calendar event
document.getElementById('add-event-btn').addEventListener('click', function() {
    const newEvent = document.getElementById('new-event').value;
    if (newEvent) {
        const eventList = document.getElementById('event-list');
        const newEventElement = document.createElement('li');
        newEventElement.innerText = newEvent;
        eventList.appendChild(newEventElement);
        document.getElementById('new-event').value = '';
    }
});

// Settings Form
document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const theme = document.getElementById('theme').value;
    document.body.setAttribute('data-theme', theme); // You can implement theme switching logic here
});
