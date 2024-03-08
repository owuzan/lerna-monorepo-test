'use strict';

var React = require('react');

var Alert = function (props) {
    var children = props.children;
    return React.createElement("div", null, children);
};

exports.Alert = Alert;
