var todoInput = document.getElementById("todoInput");
var list = document.getElementById("list");
var li = document.getElementById("li");
function addTodo(){
var inputVal = todoInput.value;
list.innerHTML += `<li id='li'>${inputVal}`;
todoInput.value = "";
}
