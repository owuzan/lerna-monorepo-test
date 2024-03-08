import { useState } from 'react';

var useCounter = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(count + 1); };
    var decrement = function () { return setCount(count - 1); };
    return { count: count, increment: increment, decrement: decrement };
};

export { useCounter };
