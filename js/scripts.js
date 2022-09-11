function List() {
  this.tasks = {};
}

function Task(taskName) {
  this.taskName = taskName;
}

List.prototype.fullList = 