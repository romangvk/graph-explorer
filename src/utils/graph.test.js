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
        expect(g.nodes).toContainEqual({ index: index, value: 0 });
        expect(g.n).toBe(1);
    });
    test('adding the same node', () => {
        let index = g.addNode(0);
        expect(g.nodes.length).toBe(2);
        expect(g.nodes).toContainEqual({ index: index, value: 0 });
        expect(g.n).toBe(2);
    });
    test('adding a different node', () => {
        let index = g.addNode(1);
        expect(g.nodes.length).toBe(3);
        expect(g.nodes).toContainEqual({ index: index, value: 1 });
        expect(g.n).toBe(3);
    });
});

describe('removeNode', () => {
    let g, i0, i1;
    beforeAll(() => {
        g = new Graph();
        i0 = g.addNode(0);
        i1 = g.addNode(1);
        g.addLink(i0, i1);
        g.addLink(i1, i0);
    });
    afterAll(() => {
        g = null;
    });
    test('removing a node', () => {
        expect(g.removeNode(i0)).toBe(true);
        expect(g.nodes.length).toBe(1);
        let links = g.links;
        for(let link in links) {
            expect(link.source).not.toBe(index);
            expect(link.target).not.toBe(index);
        }
    });
    test('removing a node not in the graph', () => {
        expect(g.removeNode(-1)).toBe(false);
        expect(g.removeNode(3)).toBe(false);
        expect(g.nodes.length).toBe(1);
    });
});
describe('addLink', () => {
    let g, i0, i1, i2;
    beforeAll(() => {
        g = new Graph();
        i0 = g.addNode(0);
        i1 = g.addNode(1);
        i2 = g.addNode(2);
    });
    afterAll(() => {
        g = null;
    });
    test('adding a link', () => {
        expect(g.addLink(i0, i1)).toBe(true);
        expect(g.links.length).toBe(1);
        expect(g.links).toContainEqual({ source: i0, target: i1, weight: 0 });
    });
    test('adding the same link', () => {
        expect(g.addLink(i0, i1)).toBe(false);
        expect(g.links.length).toBe(1);
        expect(g.links).toContainEqual({ source: i0, target: i1, weight: 0 });
    });
    test('adding a different link', () => {
        expect(g.addLink(i0, i2)).toBe(true);
        expect(g.links.length).toBe(2);
        expect(g.links).toContainEqual({ source: i0, target: i2, weight: 0 });
    });
});
describe('removeLink', () => {
    let g, i0, i1, i2;
    beforeAll(() => {
        g = new Graph();
        i0 = g.addNode(0);
        i1 = g.addNode(1);
        i2 = g.addNode(2);
        g.addLink(0, 1);
        g.addLink(0, 2);
        g.addLink(1, 2);
    });
    afterAll(() => {
        g = null;
    });
    test('removing a link', () => {
        expect(g.removeLink(i0, i1)).toBe(true);
        expect(g.links.length).toBe(2);
        expect(g.links).not.toContainEqual({ source: i0, target: i1, weight: 0 });
    });
    test('removing a link not in the graph', () => {
        expect(g.removeLink(i2, i0)).toBe(false);
        expect(g.links.length).toBe(2);
    });
});