/**
 * Simply throttle a function from being called too often withing a time range.
 * Will return a handle which you can use to call the target function.
 * @param target Function to be called.
 * @param delay Time in ms to postphone the execution.
 * @returns {function} Handle to call the target function.
 */
export default function Throttle(target: Function, delay: number): () => void {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(target.bind(this, args), delay);
    };
}
