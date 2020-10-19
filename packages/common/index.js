const _ = require("lodash");
const server = require("server");
const React = require("react");
const reactApp = require("react-app");

console.log("reactApp", reactApp);

console.log("server", server);
const a = {a: "A"};
const res =  _.get(a, "a", null);

module.exports = {
    res
};