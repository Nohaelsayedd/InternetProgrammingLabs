class Tasks {
    constructor(mytasks) {
        this.mytasks = mytasks;
    }

}

function addtask() {
    const list = document.getElementById('list1');
    const li = document.createElement('li');
    li.textContent = document.getElementById("textarea1").value;
    list.appendChild(li);
}

const tasks = [];
document.getElementById("button1").addEventListener("click", (e) => {
    e.preventDefault();
    const currenttask = document.getElementById("textarea1").value;
    const t = new Tasks(currenttask);
    tasks.push(t);
    addtask();
})

document.getElementById('list1').addEventListener("click", (e) => {
    toggletask(e);
})

document.getElementById('list1').addEventListener("dblclick", (e) => {
    deletetask(e);
})

function toggletask(e) {
    const finished = false;
    if (e.target && e.target.nodeName === 'LI') {
        e.target.style.textDecoration = 'line-through';
        e.target.finished = true;

    }

}

function deletetask(e) {
    if (e.target && e.target.nodeName === 'LI' && e.target.finished) {
        e.target.remove();
    }
}