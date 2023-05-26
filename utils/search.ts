const debounce = (callback: Function, delayInMS: number, isAsync: boolean) => {
  let timeoutId: NodeJS.Timeout;
  let resolves: any[] = [];

  if (isAsync) {
    return function (...args: any[]) {
      // Run the function after a certain amount of time
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Get the result of the callback function, then apply it to the resolve function of
        // each promise that has been created since the last time the callback function was run
        let result = callback(...args);
        resolves.forEach((r) => r(result));
        resolves = [];
      }, delayInMS);

      return new Promise((r) => resolves.push(r));
    };
  }
  // Run the function after a certain amount of time and Get the result of the callback function
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback(...args), delayInMS);
  };
};

export default debounce;
