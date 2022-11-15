console.log("index");

var user = "loser";
// Example from here https://codeql.github.com/codeql-query-help/javascript/js-insecure-randomness/
// ...for testing new CodeScanningAlerts table.
// BAD: the random suffix is not cryptographically secure
var suffix = Math.random();
// It's ok, this is only for tests :sweat_smile:
var testPassword = "myPassword" + suffix;
// Later that day...
var prodPassword = "superPassword" + suffix;
console.log("You have generated a very bad passwords! Congratulations " + user +"!");