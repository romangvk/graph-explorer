/**
* Creates a new graph object
* @return {Object} A new graph
*/
export function create() {
    // Return a new graph with no nodes or links
    return { nodes: [], links: [], id: 0, n: 0 };
}
/**
* Add a node to a graph
* @param  {Object} g     The graph
* @param  {...any} value The value for the new node
* @return {Object}       A new graph containing the new node
*/
export function addNode(g, ...value) {
    // Create new nodes for each value
    let id = g.id;
    let nodes = value.map((v) => { return { v: v, id: id++ } });

    // Return a new graph with the new nodes in g.nodes
    return { ...g, nodes: [...g.nodes, ...nodes], id, n: g.n + nodes.length };
}

/**
* Update a node's value
* @param  {Object} g     The graph
* @param  {number} id    The id of the node to be updated
* @param  {...any} value The value for the node
* @return {Object}       A new graph containing the updated node
*/
export function updateNode(g, id, value) {
    let nodes = [...g.nodes];
    let index = 0;
    for(let node of nodes) {
        if(node.v === id) {
            index = node.index;
            break;
        }
    }
    nodes[index].v = value
    return { ...g, nodes };
}
/**
* Remove a node from a graph
* @param  {Object} g     The graph
* @param  {...number} id The id of the node to be removed
* @return {Object}       A new graph that does not contain the node or any links with the node
*/
export function removeNode(g, ...id) {
    // Put ids in a map for constant lookup
    let map = {}
    for (const i of id)
        map[i] = true;

    // Remove the nodes from the nodes list
    let nodes = g.nodes.filter((node) => !map[node.id]);

    // Remove any links with the node
    let links = g.links.filter((link) => !map[link.source.id] && !map[link.target.id] && !map[link.source] && !map[link.target]);

    // Return a new graph with the updated node and link list
    return { ...g, nodes, links, n: nodes.length };
}
/**
* Add a link to a graph
* @param  {Object} g       The graph
* @param  {...number} link The source, target pair to be added
* @return {Object}         A new graph containing a link between source and target
*/
export function addLink(g, ...link) {
    // Put ids in a map for constant lookup
    let map = {}
    for (const node of g.nodes) {
        map[node.id] = true;
    }

    // Add valid links to a list
    let links = []
    for (let i = 1; i < link.length; i += 2) {
        let source = link[i - 1];
        let target = link[i];

        // Check that the link is between two valid nodes
        if (map[source] && map[target]) {
            // Check that the link doesn't already exist
            if (g.links.reduce((acc, cur) => {
                return acc &&
                    !(cur.source.id === source && cur.target.id === target) &&
                    !(cur.source === source && cur.target === target);
            }, true)) {
                // Add the link to the list
                links.push({ source, target });
            }
        }
    }
    // Return a new graph with the new links in g.links
    return { ...g, links: [...g.links, ...links] };
}
/**
* Remove a link from a graph
* @param  {Object} g       The graph
* @param  {...number} link The source, target pair to be removed
* @return {Object}         A new graph that does not contain a link between source and target
*/
export function removeLink(g, ...link) {
    // Put all links in a map for constant lookup
    let map = {};
    for (let i = 1; i < link.length; i += 2) {
        let source = link[i - 1];
        let target = link[i];
        if (!map[source])
            map[source] = {};
        map[source][target] = true;
    }

    // Remove all links
    let links = g.links.filter((link) =>
        !(map[link.source.id] && map[link.source.id][link.target.id])
        && !(map[link.source] && map[link.source][link.target])
    );

    // Return a new graph with the new links in g.links
    return { ...g, links };
}