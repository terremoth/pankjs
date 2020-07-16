function pank(selector, eventOrEventGroup, exec = null) {
    
    if (selector === document || selector === window) {
       return selector.addEventListener(eventOrEventGroup, exec);
    } 
    
    let elements = document.querySelectorAll(selector);

    if (typeof eventOrEventGroup === 'string') {
        let evt = eventOrEventGroup;
        return elements.forEach((el) => el.addEventListener(evt, exec));
    }

    let eventGroup = eventOrEventGroup;

    return elements.forEach((el) => {
        Object.keys(eventGroup).forEach((entry) => {
            el.addEventListener(entry, eventGroup[entry])
        });
    });

}

pank.clear = function (el) {
    document.querySelectorAll(el).forEach((el) => {
        let oldEl = el;
        let newEl = oldEl.cloneNode(true);
        oldEl.parentNode.replaceChild(newEl, oldEl);
    });
}

pank.detach = function (evt, el, listener) {
    const elements = document.querySelectorAll(el).forEach((el) => el.removeEventListener(evt, listener));
}

