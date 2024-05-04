class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create the head of the tree
const head = new Leaf(5);

// Create more leaves and connect them to the tree
head.left = new Leaf(3);
head.right = new Leaf(8);
head.left.left = new Leaf(2);
head.left.right = new Leaf(4);
head.right.left = new Leaf(7);
head.right.right = new Leaf(9);
head.left.left.left = new Leaf(1);
head.left.left.right = new Leaf(6);
head.right.right.left = new Leaf(10);

// Depth First Search function
function depthFirstSearch(node, depthArray) {
    if (node !== null) {
        depthFirstSearch(node.left, depthArray);
        depthArray.push(node.value);
        depthFirstSearch(node.right, depthArray);
    }
}

// Breadth First Search function
function breadthFirstSearch(node, breadthArray) {
    const queue = [];
    if (node !== null) {
        queue.push(node);
        while (queue.length > 0) {
            const currentNode = queue.shift();
            breadthArray.push(currentNode.value);
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }
}

// Perform depth first search
const depth = [];
depthFirstSearch(head, depth);
// Perform breadth first search
const breadth = [];
breadthFirstSearch(head, breadth);

// Display the contents of each array
document.getElementById("depthResult").textContent = depth.join(", ");
document.getElementById("breadthResult").textContent = breadth.join(", ");

// Dynamically generate tree visualization
const treeContainer = document.getElementById("tree");
generateTreeVisualization(head, treeContainer);

function generateTreeVisualization(node, container) {
    if (node !== null) {
        const branch = document.createElement("div");
        branch.classList.add("branch");

        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        leaf.textContent = node.value;
        branch.appendChild(leaf);

        container.appendChild(branch);

        generateTreeVisualization(node.left, branch);
        generateTreeVisualization(node.right, branch);
    }
}
