import Graph from './graph';

// beforeEach(() => {
//     initializeCityDatabase();
// });

// afterEach(() => {
//     clearCityDatabase();
// });

// beforeAll(() => {
//     return initializeCityDatabase();
// });

// afterAll(() => {
//     return clearCityDatabase();
// });

test('this should pass', () => {
    expect(null).toBeNull();
});

test('creating a graph', () => {
    let g = new Graph();

    expect(g.nodes).not.toBeNull();
    expect(g.nodes.length).toBe(0);
    expect(g.links).not.toBeNull();
    expect(g.links.length).toBe(0);
    expect(g.n).toBe(0);
});

describe('addNode', () => {
    let g;
    beforeAll(() => {
        g = new Graph();
    });
    afterAll(() => {
        g = null;
    });
    test('adding a node', () => {
        let index = g.addNode(0);
        expect(g.nodes.length).toBe(1);
        expect(g.nodes).toContainEqual({ index: 0, value: 0 });
        expect(g.n).toBe(1);
        expect(index).toBe(0);
    });
    test('adding the same node', () => {
        let index = g.addNode(0);
        expect(g.nodes.length).toBe(2);
        expect(g.nodes).toContainEqual({ index: 1, value: 0 });
        expect(g.n).toBe(2);
        expect(index).toBe(1);
    });
    test('adding a different node', () => {
        let index = g.addNode(1);
        expect(g.nodes.length).toBe(3);
        expect(g.nodes).toContainEqual({ index: 2, value: 1 });
        expect(g.n).toBe(3);
        expect(index).toBe(2);
    });
});

describe('removeNode', () => {
    let g;
    beforeEach(() => {
        g = new Graph();
    });
    afterAll(() => {
        g = null;
    });
    test('removing from an empty graph', () => {
        expect(g.removeNode(0)).toBe(false);
    });
    test('removing a node', () => {
        let index = g.addNode('banana');
        expect(g.removeNode(index)).toBe(true);
    });
    test('removing a node not in the graph', () => {
        g.addNode('banana');
        expect(g.removeNode(-1)).toBe(false);
        expect(g.removeNode(2)).toBe(false);
    })
});