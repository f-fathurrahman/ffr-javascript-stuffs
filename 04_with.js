var radius1 = 4;
var area1 = Math.PI * radius1 * radius1;
console.log("area1 = ", area1);
var radius2 = 4;
with (Math) {
    var area2 = PI * radius2 * radius2;
    console.log("area2 = ", area2);
}
//console.log("area2 = ", area2); // error
