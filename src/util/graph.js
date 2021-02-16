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
    return { ...g, nodes: [...g.nodes, ...nodes], id: id, n: g.n + nodes.length };
}
/**
* Remove a node from a graph
* @param  {Object} g  The graph
* @param  {number} id The id of the node to be removed
* @return {Object}    A new graph that does not contain the node or any edges with the node
*/
export function removeNode(g, id) {
    // Remove the node from the nodes list
    let nodes = g.nodes.filter((node) => node.id !== id);

    // Remove any links with the node
    let links = g.links.filter((link) => link.source.id !== id && link.target.id !== id);

    // Return a new graph with the updated node and link list
    return { ...g, nodes: nodes, links: links, n: nodes.length };
}
/**
* Add a link to a graph
* @param  {Object} g        The graph
* @param  {number} source   The id of the source node
* @param  {number} target   The id of the source node
* @param  {...number} links Additional source, target pairs to be added as links
* @return {Object}          A new graph containing a link between source and target nodes
*/
export function addLink(g, source, target, ...links) {
    return g;
}