const greet = require('./index');

console.log("Running test");

if(greet() === "Hello world") {
    console.log("Test passed");
    process.exit(0);
    
} else {
    console.log("Test failed");
    process.exit(1);
}



