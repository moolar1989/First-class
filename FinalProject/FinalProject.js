// Linked List implementation
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `<li class="task-item">${current.value}</li>`;
            current = current.next;
        }
        return result;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const myList = new LinkedList();

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            myList.insert(taskText);
            taskList.innerHTML = myList.display();
            taskInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    });

    let draggingTask = null;

    taskList.addEventListener('mousedown', function (e) {
        if (e.target.classList.contains('task-item')) {
            draggingTask = e.target;
        }
    });

    taskList.addEventListener('mouseup', function () {
        draggingTask = null;
    });

    taskList.addEventListener('mousemove', function (e) {
        if (draggingTask) {
            const aboveTask = document.elementFromPoint(e.clientX, e.clientY);
            if (aboveTask && aboveTask.classList.contains('task-item')) {
                const rect = aboveTask.getBoundingClientRect();
                if (e.clientY < rect.top + rect.height / 2) {
                    taskList.insertBefore(draggingTask, aboveTask);
                } else {
                    taskList.insertBefore(draggingTask, aboveTask.nextElementSibling);
                }
            }
        }
    });
});
