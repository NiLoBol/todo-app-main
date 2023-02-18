console.log(document.getElementById("style"));
function toggleDarkLightMode() {
  let body = document.getElementsByTagName("body")[0];
  let currentClass = body.className;
  body.className = currentClass === "light-mode" ? "dark-mode" : "light-mode";
  document.getElementById("icon").innerHTML =
    currentClass === "light-mode"
      ? '<img src="images/icon-sun.svg" alt="">'
      : '<img src="images/icon-moon.svg" alt="">';
  document.getElementById("imgheader").src =
    currentClass === "light-mode"
      ? "/images/bg-desktop-dark.jpg"
      : "/images/bg-desktop-light.jpg";
  document.getElementById("imgheadermobile").src =
    currentClass === "light-mode"
      ? "/images/bg-mobile-dark.jpg"
      : "/images/bg-mobile-light.jpg";
}
let TodoList = [
  "Complete online JavaScript course",
  "Jog around the park 3x",
  "10 inutes meditation",
  "Read for 1 hour",
  "Pick up groceries",
  "Complete Todo App on Frontend Mentor",
];
let checkedArray = [true, false, false, false, false, false];

let getTodoListserchAll = TodoList;
let getTodoListserchActive;
let getTodoListserchCompleted;

setTimeout(() => {
  toggleDarkLightMode();
  getTodoListserchActive = getCheckedTodoList(false);
  getTodoListserchCompleted = getCheckedTodoList(true);
  console.log(getTodoListserchActive);
  console.log(getTodoListserchCompleted);
}, 500);
function groupF1() {
  getTodoListserchAll = TodoList;
  getTodoListserchActive = getCheckedTodoList(false);
  getTodoListserchCompleted = getCheckedTodoList(true);
  serchprimary();
}
function Addtodo() {
  let todo = document.getElementById("todo").value;
  TodoList = [...TodoList, todo];
  checkedArray = [...checkedArray, false];
  console.log(TodoList);
  document.getElementById("todo").value = "";
  groupF1();
}

function creattodolist(DATA) {
  document.getElementById("todolist").innerHTML = DATA.map(
    (todo, index) => `
    <div id='todolist-${index}' class="d-flex align-items-center elem">
      <div class="checkbox-wrapper-15 me-3">
      <input ${
        document
          .querySelector("#serch .col-2")
          .classList.contains("text-primary")
          ? "onchange='changeto(" + index + ")'"
          : "onchange=\"closetodo2('" + todo + "')\""
      } class="inp-cbx" id="cbx-${index}" type="checkbox" style="display: none" ${
      document.querySelector("#serch .col-3").classList.contains("text-primary")
        ? ""
        : document
            .querySelector("#serch .col-4")
            .classList.contains("text-primary")
        ? "checked"
        : checkedArray[index]
        ? "checked"
        : ""
    } />
        <label class="cbx" for="cbx-${index}">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
          </span>
        </label>
      </div>
      <p class="m-0 w-100 fw700 ${
        document
          .querySelector("#serch .col-3")
          .classList.contains("text-primary")
          ? ""
          : document
              .querySelector("#serch .col-4")
              .classList.contains("text-primary")
          ? "clicktext"
          : checkedArray[index]
          ? "clicktext"
          : ""
      }">${todo}</p>
      <svg onclick="closetodo('${todo}')" class="cross" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#5f5f5f" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
      </svg>
    </div>
  `
  );
  document.querySelectorAll("#itemsnum")[0].innerHTML =
    TodoList.length + " items left";
  document.querySelectorAll("#itemsnum")[1].innerHTML =
    TodoList.length + " items left";
}
function changeto(index, todo) {
  const checkboxChecked = document.getElementById("cbx-" + index).checked;
  const textElement = document.querySelector("#todolist-" + index + " p");
  if (checkboxChecked) {
    textElement.classList.add("clicktext");
    checkedArray[index] = true;
    console.log(checkedArray);
  } else {
    textElement.classList.remove("clicktext");
    checkedArray[index] = false;
    console.log(checkedArray);
  }
}
function closetodo2(todostring) {
  index = TodoList.findIndex((todo) => {
    return todo === todostring;
  });
  if (index == -1) {
  } else {
    checkedArray[index] = !checkedArray[index];
    groupF1();
  }
}
function closetodo(todostring) {
  index = TodoList.findIndex((todo) => {
    return todo === todostring;
  });
  if (index == -1) {
  } else {
    TodoList.splice(index, 1);
    checkedArray.splice(index, 1);
    groupF1();
  }
}
setTimeout(() => {
  serchprimary();
}, 300);
function serchAll() {
  getTodoListserchAll = TodoList;
  serchprimary();

  // ปรับ CSS class ของปุ่ม "All"
  document.querySelector("#serch .col-2").classList.add("text-primary");
  document.querySelector("#serch .col-3").classList.remove("text-primary");
  document.querySelector("#serch .col-4").classList.remove("text-primary");

  // ปรับ CSS class ของปุ่ม "Active" และ "Completed"
  document.querySelector("#serch .col-3").classList.add("sub");
  document.querySelector("#serch .col-4").classList.add("sub");

  document.querySelectorAll("#serch2")[1].classList.remove("text-primary");
  document.querySelectorAll("#serch2")[2].classList.remove("text-primary");
  document.querySelectorAll("#serch2")[1].classList.add("sub");
  document.querySelectorAll("#serch2")[2].classList.add("sub");
  document.querySelectorAll("#serch2")[0].classList.add("text-primary");
  document.querySelectorAll("#serch2")[0].classList.remove("sub");
}

function serchActive() {
  getTodoListserchActive = getCheckedTodoList(false);
  console.log(getTodoListserchActive);
  serchprimary();
  // ปรับ CSS class ของปุ่ม "Active"
  document.querySelector("#serch .col-3").classList.add("text-primary");
  document.querySelector("#serch .col-2").classList.remove("text-primary");
  document.querySelector("#serch .col-4").classList.remove("text-primary");

  document.querySelectorAll("#serch2")[0].classList.remove("text-primary");
  document.querySelectorAll("#serch2")[2].classList.remove("text-primary");
  document.querySelectorAll("#serch2")[0].classList.add("sub");
  document.querySelectorAll("#serch2")[2].classList.add("sub");
  document.querySelectorAll("#serch2")[1].classList.add("text-primary");
  document.querySelectorAll("#serch2")[1].classList.remove("sub");

  // ปรับ CSS class ของปุ่ม "All" และ "Completed"
  document.querySelector("#serch .col-2").classList.add("sub");
  document.querySelector("#serch .col-4").classList.add("sub");
}

function serchCompleted() {
  getTodoListserchCompleted = getCheckedTodoList(true);
  console.log(getTodoListserchCompleted);
  serchprimary();
  // ปรับ CSS class ของปุ่ม "Completed"
  document.querySelector("#serch .col-4").classList.add("text-primary");
  document.querySelector("#serch .col-2").classList.remove("text-primary");
  document.querySelector("#serch .col-3").classList.remove("text-primary");

  // ปรับ CSS class ของปุ่ม "All" และ "Active"
  document.querySelector("#serch .col-2").classList.add("sub");
  document.querySelector("#serch .col-3").classList.add("sub");

  document.querySelectorAll("#serch2")[0].classList.remove("text-primary");
  document.querySelectorAll("#serch2")[1].classList.remove("text-primary");
  document.querySelectorAll("#serch2")[0].classList.add("sub");
  document.querySelectorAll("#serch2")[1].classList.add("sub");
  document.querySelectorAll("#serch2")[2].classList.add("text-primary");
  document.querySelectorAll("#serch2")[2].classList.remove("sub");
}

function getCheckedTodoList(stringtext) {
  return TodoList.filter((todo, index) => checkedArray[index] === stringtext);
}

function serchprimary() {
  setTimeout(() => {
    if (
      document.querySelector("#serch .col-2").classList.contains("text-primary")
    ) {
      creattodolist(getTodoListserchAll);
      console.log("all");
    } else if (
      document.querySelector("#serch .col-3").classList.contains("text-primary")
    ) {
      creattodolist(getTodoListserchActive);
      console.log("act");
    } else if (
      document.querySelector("#serch .col-4").classList.contains("text-primary")
    ) {
      creattodolist(getTodoListserchCompleted);
      console.log("com");
    }
  }, 300);
}

function Clear() {
  for (let i = checkedArray.length - 1; i >= 0; i--) {
    if (checkedArray[i]) {
      TodoList.splice(i, 1);
      checkedArray.splice(i, 1);
    }
  }
  groupF1();
}
