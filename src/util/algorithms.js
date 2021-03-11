/**
* Return an adjacency list generated from a given graph
* @param  {Object} g The graph
* @return {Object}   The adjacency list representing the edges in the graph
*/
export function getAdjacencyList(graph) {
    let list = {};
    graph.nodes.forEach((node) => {
        list[node.id] = [];
    });
    graph.links.forEach((link) => {
        let source = link.source.id != null ? link.source.id : link.source;
        let target = link.target.id != null ? link.target.id : link.target;
        list[source].push(target);
    });
    return list;
}
/**
* Find a path between a start and goal node with breadth first search
* @param  {number} start         The id of the starting node
* @param  {number} goal          The id of the goal node
* @param  {Object} adjacencyList The id of the node to be removed
* @return {Object}               An object containing a list of expanded nodes in order and the final path
*/
export function breadthFirstSearch(start, goal, adjacencyList) {
    // A map between a node and the node it was reached from
    let trace = new Map();
    trace.set(start, null);

    let queue = [start];

    // The list of expanded nodes in order of expansion
    let expands = [];

    // The path
    let path = [];

    while (queue.length) {
        // Take a node from the beginning of the queue
        let currentNode = queue.shift();

        // If this is the goal node stop searching
        if (currentNode === goal) {
            path.push(goal);
            break;
        }

        // Add the node to the list of expanded nodes
        expands.push(currentNode);

        // Expand the node
        for (let target of adjacencyList[currentNode]) {
            // Only add to the queue if the neighbor node has not been seen
            if (!trace.has(target)) {
                // Set the traceback of the neighbor node to the current node
                trace.set(target, currentNode);
                // Push the neighbor node to the queue
                queue.push(target);
            }
        }
    }

    // Rebuild path backwards from the goal using trace
    if (path.length) {
        while (trace.get(path[0]) != null) {
            // Add the parent node to the beginning of the path
            path.unshift(trace.get(path[0]));
        }
    }

    // Return a list of expands and a list representing the path found
    return { expands, path };
}
/**
* Find a path between a start and goal node with depth first search
* @param  {number} start         The id of the starting node
* @param  {number} goal          The id of the goal node
* @param  {Object} adjacencyList The id of the node to be removed
* @return {Object}               An object containing a list of expanded nodes in order and the final path
*/
export function depthFirstSearch(start, goal, adjacencyList) {
    // A map between a node and the node it was reached from
    let trace = new Map();
    trace.set(start, null);

    let stack = [start];

    // The list of expanded nodes in order of expansion
    let expands = [];

    // The path
    let path = [];

    while (stack.length) {
        // Take a node from the top of the stack
        let currentNode = stack.pop();

        // If this is the goal node stop searching
        if (currentNode === goal) {
            path.push(goal);
            break;
        }

        // Add the node to the list of expanded nodes
        expands.push(currentNode);

        // Expand the node
        for (let target of adjacencyList[currentNode]) {
            // Only add to the stack if the neighbor node has not been seen
            if (!trace.has(target)) {
                // Set the traceback of the neighbor node to the current node
                trace.set(target, currentNode);
                // Push the neighbor node to the stack
                stack.push(target);
            }
        }
    }

    // Rebuild path backwards from the goal using trace
    if (path.length) {
        while (trace.get(path[0]) != null) {
            // Add the parent node to the beginning of the path
            path.unshift(trace.get(path[0]));
        }
    }

    // Return a list of expands and a list representing the path found
    return { expands, path };
}