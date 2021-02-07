export default class Graph {
    #nodes;
    #links;
    #n;
    constructor() {
        this.#nodes = [];
        this.#links = [];
        this.#n = 0;
    }
    addNode(value) {
        let index = this.#n;
        this.#nodes.push(new Node(index, value));
        this.#n = this.#nodes.length;
        return index;
    }
    hasNode(index) {
        return index < this.#nodes.length && index >= 0;
    }
    removeNode(index) {
        if (this.hasNode(index)) {
            this.#nodes[index] = this.#nodes.pop();
            this.#nodes[index].index = index;
            this.#n = this.#nodes.length;
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
            for (let i = toRemove.length - 1; i >= 0; i--)
                this.#links.splice(toRemove[i], 1);
            return true;
        }
        return false;
    }
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
    get nodes() {
        return this.#nodes;
    }
    get links() {
        return this.#links;
    }
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