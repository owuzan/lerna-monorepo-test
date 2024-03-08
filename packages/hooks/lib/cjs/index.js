'use strict';

var react = require('react');

var useCounter = function () {
    var _a = react.useState(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(count + 1); };
    var decrement = function () { return setCount(count - 1); };
    return { count: count, increment: increment, decrement: decrement };
};

exports.useCounter = useCounter;
