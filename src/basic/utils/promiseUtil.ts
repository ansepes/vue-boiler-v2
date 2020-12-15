export default class PromiseUtillity {
  public static createDifferd<T>() {
    let _resolve: () => T | void = () => {}
    let _reject: () => T | void = () => {}

    const promise = new Promise<T>((resolve, reject) => {
      _resolve = resolve
      _reject = reject
    })

    return {
      promise,
      resolve: _resolve,
      reject: _reject,
    }
  }
}

export const PromiseUtil = new PromiseUtillity()
