import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
type Task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

console.log("hi")
const tasks : Task[] = [];

const list = document.querySelector<HTMLUListElement>("#list");
const input = document.querySelector<HTMLInputElement>("#input");
list?.addEventListener("submit", e => {
  e.preventDefault();
  if (input?.value == "" || input?.value == null) return;

  const task : Task = {
    id: "testId",
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  task.id
})

function addListItem(list : HTMLUListElement, task: Task) : boolean {
  return true;
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

function loadTasks() : Task[] {
  const taskJSON = localStorage.getItem("TASKS");
  if (taskJSON == null) return [];
  return taskJSON != null ? JSON.parse(taskJSON) : [];
}
*/