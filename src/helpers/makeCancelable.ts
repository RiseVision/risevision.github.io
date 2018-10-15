export interface CancelablePromise {
  promise: Promise<any>;
  cancel: () => void;
}

export class CanceledError extends Error {
  constructor() {
    super("Promise cancelled");
  }
}

export const makeCancelable = (promise: Promise<any>): CancelablePromise => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => (hasCanceled_ ? reject(new CanceledError()) : resolve(val))
    );
    promise.catch(
      error => (hasCanceled_ ? reject(new CanceledError()) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    }
  };
};
