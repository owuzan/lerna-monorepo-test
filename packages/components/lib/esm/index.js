import React from 'react';

var Alert = function (props) {
    var children = props.children;
    return React.createElement("div", null, children);
};

export { Alert };
