export function throttle(fn: <T>(arg?: T) => T |void, limit: number) {
  let inThrottle: boolean;
  return function thFn<U>(...args: U[]) {
    if (!inThrottle) {
      //@ts-ignore
      fn.call(this, ...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
