/*
Program channels into your TV's memory. 
An array with channels (strings) will be passed as an argument to the function redarr(). 
Sort the channels in an alphabetical order, remove duplicates and, finally, 
return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.

Examples:
  let arr = ["BBC1", "BBC2", "MTV"];
  redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
  let arr = ["BBC1", "BBC1", "BBC2", "MTV"];
  redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
*/


// Solution

function redarr(arr) {
  return Object.assign({}, Array.from(new Set(arr)).sort());
}

// or

function redarr(arr) {

	let ar = arr.slice().sort(),
        obj = {},
        count = 0;
        
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === ar[i-1]) continue;
		obj[count] = ar[i];	
		count++;
	}
	return obj;
}