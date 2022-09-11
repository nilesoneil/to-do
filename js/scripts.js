function List() {
  this.tasks = {};
}

//function Task(taskName) {
  //this.taskName = taskName;
//}

List.prototype.addTask = function(taskName) {
  this.task[taskName.theTask] = taskName
}

//List.prototype.fullList = 
function List() {
  this.taskList = {};
  this.currentId = 0;
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

List.prototype.addTask = function(listItem) {
  listItem.id = this.assignId();
  this.taskList[listItem.id] = listItem
}

function Task(taskName) {
  this.taskName = taskName;
  
}
let ourList = new List();
let task1 = new Task("hans");
ourList.addTask(tasks);


//////////////Niles' attempt
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