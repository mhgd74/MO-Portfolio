/// <reference types="react" />

declare module 'react' {
  namespace React {
    interface Component {}
    interface ComponentClass {}
    interface FunctionComponent {}
    interface ReactElement {}
  }

  const React: {
    createElement: any;
    Fragment: symbol;
  };

  export = React;
  export as namespace React;

  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
}