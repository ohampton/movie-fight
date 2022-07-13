const debounce = (func, delay = 100) => {
    let timeoutID;
    return (...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    };
};