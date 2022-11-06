const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDos = document.querySelector(".toDos");

const TODOLIST = "toDoList";
let toDoList = [];

function saveToDoList() {
  localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
}

function saveToDo(toDo) {
  const toDoObj = {
    text: toDo,
    id: toDoList.length + 1,
  };
  toDoList.push(toDoObj);
  saveToDoList();
}

function delToDo(event) {
  const { target: button } = event;
  const li = button.parentNode;
  toDos.removeChild(li);
  toDoList = toDoList.filter((toDo) => toDo.id !== Number(li.id));
  saveToDoList();
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delButton = document.createElement("button");
  delButton.innerText = "[x]";
  delButton.addEventListener("click", delToDo);
  span.innerHTML = toDo;
  li.appendChild(span);
  li.appendChild(delButton);
  li.id = toDoList.length + 1;
  toDos.appendChild(li);
}

function createToDo(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  paintToDo(toDo);
  saveToDo(toDo);
  toDoInput.value = "";
}

function loadToDoList() {
  const loadedToDoList = localStorage.getItem(TODOLIST);
  if (loadedToDoList !== null) {
    const parsedToDoList = JSON.parse(loadedToDoList);
    for (let toDo of parsedToDoList) {
      const { text } = toDo;
      paintToDo(text);
      saveToDo(text);
    }
  }
}

function init() {
  loadToDoList();
  toDoForm.addEventListener("submit", createToDo);
}
init();

// const randomValue = toDoList[Math.floor(Math.random() * toDoList.length)];
// 구조 할당 분해를 활용한 랜덤 추천 함수 만들기
function randomChoice(array) {
  const transLate = JSON.stringify(toDoList);
  alert(transLate);
}
// const randomValue = transLate[Math.floor(Math.random() * toDoList.length)];
// alert(transLate);
// const randomValue =
//   JSON.stringify(toDoList)[Math.floor(Math.random() * toDoList.length)];
// alert(randomValue);
// const randomList = _.shuffle(toDoList);
// const [randomValue] = randomList;
// $(document).ready(function () {
//   jsonTest();
// });
// function jsonTest() {
//   alert(transLate[Math.floor(Math.random() * toDoList.length)].test);
// }
