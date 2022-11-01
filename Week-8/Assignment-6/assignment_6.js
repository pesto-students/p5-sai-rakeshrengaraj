
// JavaScript program to print all
// paths from a source to
// destination.

let v;

let adjList;

// A directed graph using
// adjacency list representation
function Graph(vertices)
{
	// initialise vertex count
		v = vertices;

		// initialise adjacency list
		initAdjList();
}

// utility method to initialise
	// adjacency list
function initAdjList()
{
	adjList = new Array(v);

		for (let i = 0; i < v; i++) {
			adjList[i] = [];
		}
}

// add edge from u to v
function addEdge(u,v)
{
	// Add v to u's list.
		adjList[u].push(v);
}

// Prints all paths from
	// 's' to 'd'
function printAllPaths(s,d)
{
	let isVisited = new Array(v);
	for(let i=0;i<v;i++)
		isVisited[i]=false;
		let pathList = [];

		// add source to path[]
		pathList.push(s);

		// Call recursive utility
		printAllPathsUtil(s, d, isVisited, pathList);
}

// A recursive function to print
	// all paths from 'u' to 'd'.
	// isVisited[] keeps track of
	// vertices in current path.
	// localPathList<> stores actual
	// vertices in the current path
function printAllPathsUtil(u,d,isVisited,localPathList)
{
	if (u == (d)) {
			console.log(localPathList);
			// if match found then no need to
			// traverse more till depth
			return;
		}

		// Mark the current node
		isVisited[u] = true;

		// Recur for all the vertices
		// adjacent to current vertex
		for (let i=0;i< adjList[u].length;i++) {
			if (!isVisited[adjList[u][i]]) {
				// store current node
				// in path[]
				localPathList.push(adjList[u][i]);
				printAllPathsUtil(adjList[u][i], d,
				isVisited, localPathList);

				// remove current node
				// in path[]
				localPathList.splice(localPathList.indexOf
				(adjList[u][i]),1);
			}
		}

		// Mark the current node
		isVisited[u] = false;
}

// Driver program
// Create a sample graph [[1,2],[3],[3],[]]


Graph(4);
addEdge(0, 4);
addEdge(0, 3);
addEdge(0, 1);
addEdge(1, 3);
addEdge(1, 2);
addEdge(1, 4);
addEdge(2, 3);
addEdge(3, 4);

// arbitrary source
let s = 0;

// arbitrary destination
let d = 4;

printAllPaths(s,d)







// Graph(3);
// addEdge(0, 1);
// addEdge(0, 2);
// addEdge(1, 3);
// addEdge(2, 3);

// // arbitrary source
// let s = 0;

// // arbitrary destination
// let d = 3;

// printAllPaths(s,d)


