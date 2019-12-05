let list = document.getElementById('list');
let addButton = document.getElementById('add');
let input = document.getElementById('input');
// let deleteButton = document.getElementById('delete');
let buttonNum = 0;

addButton.onclick = function() {
    let text = input.value; 
    if (text != undefined) {
        list.insertAdjacentHTML("beforeEnd", `
        <li class="task">
            <div class="task-wrapper">
                <div class="text-wrapper">
                    <p class="text"> ${text}</p> 
                </div>
                <button id="delete${buttonNum}">Done</button>
            </div>
        </li>
        `)
        document.getElementById('input').value = "";
        // document.getElementById('delete' + buttonNum).onclick = function () {document.getElementById("task-wrapper" + buttonNum).parentNode.removeChild(document.getElementById('task-wrapper' + buttonNum));
    }
        // buttonNum++;
}

// function deleteTask(num) {
//     console.log("Вы нажали на кнопку номер " + num);
// } 

// function f1() {
//     document.getElementById("task-wrapper" + buttonNum).parentNode.removeChild(document.getElementById('task-wrapper' + buttonNum));
// }


// background

// document.querySelector("wrapper").style.backgroundImage = "url(backgrounds/bg1.jpg)";

