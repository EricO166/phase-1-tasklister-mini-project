document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const tasksUl = document.getElementById("tasks");


  form.addEventListener("submit", event => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    const li = document.createElement("li");
    li.textContent = taskText;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.setAttribute("aria-label", `Delete ${taskText}`);
    deleteBtn.addEventListener("click", () => li.remove());
    li.append(" ", deleteBtn);


    tasksUl.appendChild(li);
    form.reset();
  });
});
