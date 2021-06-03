const DEFAULT_DELAY: number = 300;

export const debounce = (fn: Function, delay: number = DEFAULT_DELAY) => {
  let timeout: NodeJS.Timeout = null;
  return (...params: any[]) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(fn.bind(undefined, ...params), delay);
  }
};

export const throttle = (fn: Function, delay: number = DEFAULT_DELAY) => {
  let timeout: NodeJS.Timeout = null;
  return (...params: any[]) => {
    if (timeout) return;
    timeout = setTimeout(() => {
      fn.call(undefined, ...params);
      timeout = null;
    }, delay);
  }
};