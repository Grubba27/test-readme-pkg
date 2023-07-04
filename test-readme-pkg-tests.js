// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by test-readme-pkg.js.
import { name as packageName } from "meteor/test-readme-pkg";

// Write your tests here!
// Here is an example.
Tinytest.add('test-readme-pkg - example', function (test) {
  test.equal(packageName, "test-readme-pkg");
});
