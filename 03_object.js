let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel)
console.log(day1.wolf)

console.log(Object.keys(day1))

let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);


console.log(journal);