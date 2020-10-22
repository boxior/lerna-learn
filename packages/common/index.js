const _ = require("lodash");
const server = require("@boxior/server");
const React = require("react");

console.log("server", server);
const a = {a: "A"};
const res =  _.get(a, "a", null);

module.exports = {
    res
};