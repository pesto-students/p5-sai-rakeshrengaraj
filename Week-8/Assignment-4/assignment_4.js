

var validPath = function (edges, source, destination) {
  let graph = new Map();
  let visited = new Set();

  for (let [v, e] of edges) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    if (graph.has(e)) {
      graph.get(e).push(v);
    } else {
      graph.set(e, [v]);
    }
  }

  function isValidPath(vertex) {
    visited.add(vertex);
    let relatives = graph.get(vertex);

    if (relatives && relatives.length > 0) {
      for (let i = 0; i < relatives.length; i++) {
        if (!visited.has(relatives[i])) {
          isValidPath(relatives[i]);
        }
      }
    }
  }

  isValidPath(source)
  return visited.has(destination)
};


console.log(validPath([[0,1],[1,2],[2,0]],0,2))
console.log(validPath( [[0,1],[0,2],[3,5],[5,4],[4,3]],0,5))
