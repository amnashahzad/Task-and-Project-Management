document.addEventListener('DOMContentLoaded', function() {
    var taskForm = document.getElementById('task-form');
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
    var projectList = document.getElementById('project-list');
    
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var task = taskInput.value;
      if (task) {
        addTask(task);
        taskInput.value = '';
      }
    });
    
    taskList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
      }
    });
    
    function addTask(task) {
      var li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
    }
  });
  