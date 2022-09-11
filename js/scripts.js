
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


//test code
let list = new List();
let errand = new Task("laundry");
let errand2 = new Task("washCar");
let errand3 = new Task("vacuum");
let errand4 = new Task("oilChange");
list.addTask(errand);