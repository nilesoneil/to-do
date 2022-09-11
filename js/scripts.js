
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

List.prototype.findChore = function(id) {
  if (this.tasks[id] !== undefined) {
    return this.tasks[id];
  }
  return false;
};

List.prototype.deleteChore = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};

List.prototype.finTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  return true;
  let newClass = document.getElementById(#)element.classList.add("class")
}

function Task(taskName) {
  this.taskName = taskName;
}

//test code
let list = new List();
let errand = new Task("laundry");
let errand2 = new Task("washCar");
let errand3 = new Task("vacuum");
let errand4 = new Task("oilChange");
list.addTask(errand);
list.addTask(errand2);
list.addTask(errand3);
list.addTask(errand4);