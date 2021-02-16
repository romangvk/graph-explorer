import * as G from './graph';

test('this should pass', () => {
    expect(null).toBeNull();
});
test('creating a graph', () => {
    let g = G.create();
    expect(g.nodes).not.toBeNull();
    expect(g.nodes.length).toBe(0);
    expect(g.links).not.toBeNull();
    expect(g.links.length).toBe(0);
    expect(g.id).toBe(0);
});
describe('addNode', () => {
    let g;
    beforeAll(() => {
        g = G.create();
    });
    afterAll(() => {
        g = null;
    });
    test('adding a node to an empty graph', () => {
        g = G.addNode(g, 0);
        expect(g.nodes.length).toBe(1);
        expect(g.nodes).toContainEqual({ id: 0, v: 0 });
        expect(g.n).toBe(1);
    });
    test('adding the same node', () => {
        g = G.addNode(g, 0);
        expect(g.nodes.length).toBe(2);
        expect(g.nodes).toContainEqual({ id: 1, v: 0 });
        expect(g.n).toBe(2);
    });
    test('adding a different node', () => {
        g = G.addNode(g, 1);
        expect(g.nodes.length).toBe(3);
        expect(g.nodes).toContainEqual({ id: 2, v: 1 });
        expect(g.n).toBe(3);
    });
    test('adding multiple nodes', () => {
        g = G.addNode(g, 3, 4, 5);
        expect(g.nodes.length).toBe(6);
        expect(g.nodes).toContainEqual({ id: 3, v: 3 });
        expect(g.nodes).toContainEqual({ id: 4, v: 4 });
        expect(g.nodes).toContainEqual({ id: 5, v: 5 });
        expect(g.n).toBe(6);
    });
});
describe('removeNode', () => {
    let g;
    beforeAll(() => {
        g = G.addNode(G.create(), 0, 1);
    });
    afterAll(() => {
        g = null;
    });
    test('removing a node', () => {
        g = G.removeNode(g, 0);
        expect(g.nodes.length).toBe(1);
        expect(g.nodes).not.toContainEqual({ id: 0, v: 0 });
        expect(g.nodes).toContainEqual({ id: 1, v: 1 });
        expect(g.n).toBe(1);
    });
    test('removing a node not in the graph', () => {
        g = G.removeNode(g, -1);
        expect(g.nodes.length).toBe(1);
        expect(g.n).toBe(1);
        g = G.removeNode(g, 2);
        expect(g.nodes.length).toBe(1);
        expect(g.n).toBe(1);
    });
    test('removing the last node', () => {
        g = G.removeNode(g, 1);
        expect(g.nodes.length).toBe(0);
        expect(g.n).toBe(0);
    });
});
describe('addLink', () => {
    let g;
    beforeAll(() => {
        g = G.addNode(G.create(), 0, 1, 2, 3);
    });
    afterAll(() => {
        g = null;
    });
    test('adding a link', () => {
        g = G.addLink(g, 0, 1);
        expect(g.links.length).toBe(1);
        expect(g.links).toContainEqual({ source: 0, target: 1 });
    });
    test('adding the same link', () => {
        g = G.addLink(g, 0, 1);
        expect(g.links.length).toBe(1);
        expect(g.links).toContainEqual({ source: 0, target: 1 });
    });
    test('adding a different link', () => {
        g = G.addLink(g, 1, 2);
        expect(g.links.length).toBe(2);
        expect(g.links).toContainEqual({ source: 1, target: 2 });
    });
    test('adding multiple links', () => {
        g = G.addLink(g, 0, 2, 2, 3);
        expect(g.links.length).toBe(4);
        expect(g.links).toContainEqual({ source: 0, target: 2 });
        expect(g.links).toContainEqual({ source: 2, target: 3 });
    });
})