function List() {
  this.tasks = {};
}

//function Task(taskName) {
  //this.taskName = taskName;
//}

List.prototype.addTask = function(taskName) {
  this.task[taskName.theTask] = taskName
}

//business logic for List 
function List() {
  this.taskList = {};
  this.currentId = 0;
}

List.prototype.addTask = function(listItem) {
  this.taskList[listItem.id] = listItem;
}

List.prototype.assignId = function() {
  this.currentId =+ 1;
  return this.currentId;
}

//business logic for tasks
function Task(taskName) {
  this.taskName = taskName;
}

let newList = new List();
let task1 = new Task("hans");
let task2 = new Task("hans2");
newList.addTask(task1);

//////////////Niles' attempt
function List() {
  this.tasks = {};
  this.currentId = 0;
}

List.prototype.addTask = function(errand) {
  errand.id = this.assignId();
  this.tasks[errand.id] = errand;
};

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};


function Task(taskName) {
  this.taskName = taskName;
}



let list = new List();
let errand = new Task(["laundry", "washCar", "vacuum", "oilChange"]);
list.addTask(errand);

////////////bossman's////
function TaskList() {
  this.tasks = {};
}

TaskList.prototype.addTask = function(task) {
  this.tasks[task.toString()] = task;
}

function Task(taskName) {
  this.taskName = taskName;
}


let list = new TaskList();
let tasks = new Task(["laundry", "washCar", "vacuum", "oilChange"]);
list.addTask(tasks);

////template before we added id's (safe code, return if needed)

function List() {
  this.tasks = {};
}

List.prototype.addTask = function(errand) {
  this.tasks[errand.taskName] = errand;
};

function Task(taskName) {
  this.taskName = taskName;
}



let list = new List();
let errand = new Task(["laundry", "washCar", "vacuum", "oilChange"]);
list.addTask(errand);