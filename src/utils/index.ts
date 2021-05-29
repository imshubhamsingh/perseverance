export function debounce(fn: Function, wait: number) {
    let timeOut: NodeJS.Timeout | undefined;
    return function debounceFn(...args: any[]) {
        const later = () => {
            timeOut = undefined;
                fn.call(null, ...args);
        };
        clearTimeout(timeOut as NodeJS.Timeout);

        timeOut = setTimeout(later, wait);
    };
}