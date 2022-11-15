console.log("index");

var user = "loser";
// Example from here https://codeql.github.com/codeql-query-help/javascript/js-insecure-randomness/
// ...for testing new CodeScanningAlerts table.
// BAD: the random suffix is not cryptographically secure
var suffix = Math.random();
var password = "myPassword" + suffix;

console.log("You have generated a very bad password! Congratulations " + user +"!");