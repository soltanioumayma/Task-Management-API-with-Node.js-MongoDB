// data.js

export let tasks = [
  {
    id: "1",
    title: "Apprendre Node.js",
    done: false
  },
  {
    id: "2",
    title: "Apprendre Express",
    done: false
  }
];


// GET ALL
export function getAllTasks() {
  return tasks;
}


// GET BY ID
export function getTaskById(id) {
  return tasks.find((task) => task.id === id);
}


// CREATE
export function createTask(data) {
  const newTask = {
    id: String(tasks.length + 1),
    title: data.title,
    done: data.done ?? false
  };

  tasks.push(newTask);

  return newTask;
}


// UPDATE
export function updateTask(id, data) {
  const task = getTaskById(id);

  if (!task) {
    return null;
  }

  Object.assign(task, data);

  return task;
}


// DELETE
export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);

  return true;
}