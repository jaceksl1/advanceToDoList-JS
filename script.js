//global variables

let $todoInput; // place, where user can put info
let $alertInfo; // info about no task
let $addBtn; // add btn
let $ulList; // our list of to do <ul><li>
let $newTask; // new task in <li>
let $allTasks; // whole list of tasks <li>
let $idNumber = 0; // ID for every created new task
let $popup; //getting popup
let $popupInfo; // alert in popup about empty txt
let $editedTodo; // edited Todo
let $popupInput; //txt added in input in popup
let $addPopupBtn; // popup btn - accept
let $closeTodoBtn; //popup btn - close

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  $todoInput = document.querySelector(".todo-input");
  $alertInfo = document.querySelector(".alert-info");
  $addBtn = document.querySelector(".add-btn");
  $ulList = document.querySelector(".todo-list ul");
  $allTasks = document.getElementsByTagName("li");
  $popup = document.querySelector(".popup");
  $popupInfo = document.querySelector(".popup-info");
  $popupInput = document.querySelector(".popup-input");
  $addPopupBtn = document.querySelector(".accept");
  $closeTodoBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
  $addBtn.addEventListener("click", addNewTask);
  $todoInput.addEventListener("keyup", enterCheck);
  $ulList.addEventListener("click", checkClick);
};

const addNewTask = () => {
  if ($todoInput.value !== "") {
    $idNumber++;
    $newTask = document.createElement("li");
    $newTask.innerText = $todoInput.value;
    $newTask.setAttribute("id", `todo-${$idNumber}`);
    $ulList.appendChild($newTask);

    $todoInput.value = "";
    $alertInfo.innerText = "";

    createToolsArea();
  } else {
    $alertInfo.innerText = "Write task info!";
  }
};

const enterCheck = () => {
  if (event.key === "Enter") {
    addNewTask();
  }
};

const createToolsArea = () => {
  const divToolsPanel = document.createElement("div");
  divToolsPanel.classList.add("tools");
  $newTask.appendChild(divToolsPanel);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = `<i class="fas fa-check"></i>`;

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerHTML = "EDIT";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;

  divToolsPanel.appendChild(completeBtn);

  divToolsPanel.appendChild(editBtn);

  divToolsPanel.appendChild(deleteBtn);
};

const checkClick = (e) => {
  if (e.target.classList.value !== "") {
    if (e.target.closest("button").classList.contains("complete")) {
    } else if (e.target.closest("button").classList.contains("edit")) {
    } else if (e.target.closest("button").classList.contains("delete")) {
    }
  }
};

document.addEventListener("DOMContentLoaded", main);
