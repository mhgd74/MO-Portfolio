declare namespace React {
  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }

  type ReactNode = ReactElement | string | number | ReactFragment | ReactPortal | boolean | null | undefined;

  interface ReactFragment {
    children?: ReactNode;
  }

  interface ReactPortal extends ReactElement {
    key: Key | null;
    children: ReactNode;
  }

  type Key = string | number;

  type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any> | null) | (new (props: P) => Component<any, any>);

  interface Component<P = {}, S = {}> {
    render(): ReactNode;
    props: Readonly<P>;
    state: Readonly<S>;
    setState(state: S | ((prevState: S, props: P) => S)): void;
  }

  interface FunctionComponent<P = {}> {
    (props: P): ReactElement<any, any> | null;
  }

  interface FC<P = {}> extends FunctionComponent<P> {}

  interface PropsWithChildren<P = unknown> {
    children?: ReactNode;
    [key: string]: any;
  }
}

declare module 'react' {
  export = React;
  export as namespace React;

  // React Hooks
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useContext<T>(context: React.Context<T>): T;
  export function useReducer<R extends React.Reducer<any, any>>(
    reducer: R,
    initialState: React.ReducerState<R>,
    initializer?: (arg: React.ReducerState<R>) => React.ReducerState<R>
  ): [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>];
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useRef<T>(initialValue: T): { current: T };
  export function useImperativeHandle<T, R extends T>(
    ref: React.Ref<T>,
    init: () => R,
    deps?: any[]
  ): void;
  export function useLayoutEffect(effect: React.EffectCallback, deps?: any[]): void;
  export function useDebugValue<T>(value: T, format?: (value: T) => any): void;

  // React Context
  interface Context<T> {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
    displayName?: string;
  }
  
  interface Provider<T> {
    $$typeof: symbol;
    props: {
      value: T;
      children?: ReactNode;
    };
  }
  
  interface Consumer<T> {
    $$typeof: symbol;
    props: {
      children: (value: T) => ReactNode;
    };
  }

  export function createContext<T>(defaultValue: T): Context<T>;
}