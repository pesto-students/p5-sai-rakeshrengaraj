// Created Memoize function


function add(a, b) {
	return a + b
}

function memoize(fn) {
	let cache = {}
	return function (...args) {
		let key = args;
		console.log(cache);
		console.log(args)
		if (key in cache) {
			console.log("Without Computing")
			return cache[key]
		}
		else {
			let result = 0;
			for (let i = 0; i < key.length; i++) {
				result = result + key[i]
			}
			cache[key] = result
			console.log("Computing")
			return result
		}
	};
}

const memoizeAdd = memoize(add);

memoizeAdd(100, 100);
memoizeAdd(100);
memoizeAdd(100, 200)
memoizeAdd(100, 100)
