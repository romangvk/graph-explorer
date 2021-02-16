export default class graph {
    constructor() {
        this.unused = [];
    }
    addNode(g, value) {
        return { ...g, nodes: [...g.nodes, { v: value, id: unused[0] ? unused.pop() : g.nodes.length }] };
    }
    removeNode(g, id) {
        let nodes = g.nodes.filter((node) => node.id !== id);
        let links = g.links.filter((link) => link.source.id !== id && link.target.id !== id);
        return { ...g, nodes: nodes, links: links };
    }
}