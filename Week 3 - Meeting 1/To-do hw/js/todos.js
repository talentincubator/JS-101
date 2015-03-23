// ------------- We Create the Project object --------------- // 
function Project() {
    this.todos = [];
}
Project.prototype.addTodo = function(todoObject) {
    console.log(todoObject);
    if (todoObject) {
        this.todos.push(todoObject);
        document.getElementById("addTodo").value = "";
    }
};
Project.prototype.deleteTodo = function(todoObject) {
    console.log(todoObject);
    removeItem(this.todos, todoObject);
    this.listTodos();
};
Project.prototype.listTodos = function() {
    document.getElementById("listTodos").innerHTML = "";
    for (var i = 0; i < this.todos.length; i++) {
        document.getElementById("listTodos").innerHTML += "<li>" + buttonHTML + '<span>' + this.todos[i] + '</span>' + "</li>";
    }
    return this.todos;
};

// ------------- Todo Object   --------------- // 
var ToDo = function() {
    Project.apply(this);
};
ToDo.prototype = new Project();

// ------------- Global Functions  --------------- // 
function ShowAll(projects) {
    document.getElementById("listProjects").innerHTML = "";
    for (var i = 0; i < projects.length; i++) {
        document.getElementById("listProjects").innerHTML += "<li>" + buttonHTML + '<a href="#" onclick="ChangeProject(\'' + projects[i].name + '\')">' + projects[i].name + '</a>' + "</li>";
    }
}
var GetData = function(GetSelector) {
    var task = document.getElementById(GetSelector).value;
    document.getElementById(GetSelector).value = "";
    return task;
};

function ChangeProject(projectname) {
    console.log(projectname);
    for (var i = projectsAll.length - 1; i >= 0; i--) {
        if (projectsAll[i].name == projectname) {
            GlobalProject = projectsAll[i];
        }
    }
    GlobalProject.listTodos();
    document.getElementById("title").innerHTML = GlobalProject.name;
}

function removeItem(Array, item) {
    var index = Array.indexOf(item);
    if (index > -1) {
        Array.splice(index, 1);
    }
}

// ------------- Run time  --------------- // 
var GlobalProject;
var projectsAll = [];
document.getElementById('ProjectButton').onclick = function() {
    var project = new Project();
    project.name = GetData('addProject');
    project.name ? projectsAll.push(project) : "";
    ShowAll(projectsAll);
    GlobalProject = project;
};
document.getElementById('todoButton').onclick = function() {
    var todo = new ToDo();
    todo.name = GetData('addTodo');
    GlobalProject.addTodo(todo.name);
    GlobalProject.listTodos();
};
// ------------- Templates  --------------- // 
var buttonHTML = "<button class='btn btn-danger deleteTodo' onclick='project1.deleteTodo(this.parentNode.childNodes[1].textContent);'>Delete</button>";