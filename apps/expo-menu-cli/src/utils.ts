export function returnLoggerMiddleware(
  fn: (...args: any[]) => any | Promise<any>
) {
  return async function (...args: any[]) {
    try {
      const result = await fn(...args);

      console.log("---- return output ----");
      console.log(result);
    } catch (error) {
      console.log("---- thrown error ----");
      console.log(error);
    }
  };
}

export enum Platform {
  Android = "android",
  Ios = "ios",
  All = "all",
}
