var require = load
var console = {log: print}

var ndarray = require("./ndarray.js")

var p = ndarray(new Float32Array([1,2,3,4]), [2,2])

console.log(p)


