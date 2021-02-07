export default class Graph {
    #nodes;
    #links;
    #n;
    constructor() {
        this.#nodes = [];
        this.#links = [];
        this.#n = 0;
    }
    
    // adds a new node with value value to the graph
    // returns the index of the new node
    addNode(value) {
        let index = this.#n;
        this.#nodes.push(new Node(index, value));
        this.#n = this.#nodes.length;
        return index;
    }
    
    // whether or not a certain node exists in the graph
    // returns true if the node exists, false if not
    hasNode(index) {
        return index < this.#nodes.length && index >= 0;
    }

    // remove a node and all related links
    // returns true if the node was removed, false if not
    removeNode(index) {
        if (this.hasNode(index)) {
            // replace the node at index with the last node in nodes
            this.#nodes[index] = this.#nodes.pop();
            this.#nodes[index].index = index;
            this.#n = this.#nodes.length;

            // remove links with the node at index and update links with the last node in nodes
            let toRemove = [];
            for (let i = 0; i < this.#links.length; i++) {
                if (this.#links[i].source == index || this.#links[i].target == index) {
                    toRemove.push(i);
                } else {
                    if (this.#links[i].source == this.#n) {
                        this.#links[i].source = index;
                    }
                    if (this.#links[i].target == this.#n) {
                        this.#links[i].target = index;
                    }
                }
            }
            for (let i = toRemove.length - 1; i >= 0; i--) {
                this.#links.splice(toRemove[i], 1);
            }
            // the node has been removed
            return true;
        }
        // no node was removed
        return false;
    }
    
    // adds a weighted link from i1 to i2
    // if no weight is provided, weight is 0
    // returns true if the link was added successfully, false otherwise
    addLink(i1, i2, weight = 0) {
        if (!this.hasNode(i1) || !this.hasNode(i2)) {
            return false;
        }
        for (let i = 0; i < this.#links.length; i++) {
            if (this.#links[i].source == i1 && this.#links[i].target == i2) {
                return false;
            }
        }
        this.#links.push(new Link(i1, i2, weight));
        return true;
    }

    // removes a link from i1 to i2
    // returns true if the link was removed successfully, false otherwise
    removeLink(i1, i2) {
        if (!this.hasNode(i1) || !this.hasNode(i2)) {
            return false;
        }
        for (let i = 0; i < this.#links.length; i++) {
            if (this.#links[i].source == i1 && this.#links[i].target == i2) {
                this.#links.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    
    // the list of nodes
    get nodes() {
        return this.#nodes;
    }
    
    // the list of links
    get links() {
        return this.#links;
    }
    
    // the number of nodes
    get n() {
        return this.#n;
    }
}

export class Node {
    constructor(index, value) {
        this.index = index;
        this.value = value;
    }
}
export class Link {
    constructor(source, target, weight = 0) {
        this.source = source;
        this.target = target;
        this.weight = weight;
    }
}