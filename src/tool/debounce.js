function debounce(func, wait) {
    let timeoutID;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeoutID = null;
            func.apply(context, args);
        };
        clearTimeout(timeoutID);
        timeoutID = setTimeout(later, wait);
    }
}

export default debounce;