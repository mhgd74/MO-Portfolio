declare module 'react/jsx-runtime' {
  export namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface ElementClass extends React.Component<any> {
      render(): React.ReactNode;
    }
    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }
    interface IntrinsicAttributes extends React.Attributes {}
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  export function jsx(
    type: string | React.JSXElementConstructor<any>,
    props: any,
    key?: string | number | null
  ): React.ReactElement;

  export function jsxs(
    type: string | React.JSXElementConstructor<any>,
    props: any,
    key?: string | number | null
  ): React.ReactElement;

  export function jsxDEV(
    type: string | React.JSXElementConstructor<any>,
    props: any,
    key: string | number | null | undefined,
    isStaticChildren: boolean,
    source: any,
    self: any
  ): React.ReactElement;
}