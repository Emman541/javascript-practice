const todoList = [{
  name: 'make dinner',
  dueDate:'2022-12-22'}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'}
];
renderTodoList();
function renderTodoList() {
  

let todoListHTML = ''
for (let index = 0; index < todoList.length; index++) {
  const todoObject = todoList[index];
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate
  const { name, dueDate } = todoObject
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div> 
  <button onclick = "
  todoList.splice(${index}, 1);
  renderTodoList();
  " class= "delete-todo-button">Delete</button>
  `
  todoListHTML = todoListHTML + html
}
 console.log(todoListHTML);
 document.querySelector('.js-todo-list').innerHTML =todoListHTML
}
 //  .innerHTML = todoListHTML
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value
  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value
  todoList.push({
    name, dueDate});
  console.log(todoList);

  inputElement.value = '';
  renderTodoList()
}