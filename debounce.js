// Line 1 : Reusable debounce wrapper that delays execution by 'delayMs'
const debounce = (func, delayMs) => {
    let timerId;


    return function (...args) {
        clearTimeout(timerId);
        
        timerId = setTimeout(() => {
            func(...args);
        }, delayMs);
    };
};

const searchAPI = (query) => {
    console.log(`Searching for: ${query}`);
};

const debouncedSearch = debounce(searchAPI, 300);

debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("react");