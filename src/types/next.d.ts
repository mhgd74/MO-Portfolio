declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
    keywords?: string;
    authors?: Array<{ name: string }>;
    creator?: string;
    metadataBase?: URL;
    openGraph?: {
      title?: string;
      description?: string;
      images?: string[];
      type?: string;
    };
    twitter?: {
      card?: string;
      title?: string;
      description?: string;
      images?: string[];
    };
    icons?: {
      icon?: Array<{ url: string; sizes: string; type: string }>;
      apple?: Array<{ url: string; sizes: string; type: string }>;
    };
    manifest?: string;
    robots?: {
      index?: boolean;
      follow?: boolean;
    };
  }
}

declare module 'next/font/google' {
  interface FontOptions {
    subsets?: string[];
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    weight?: string | number | Array<string | number>;
    style?: 'normal' | 'italic';
    variable?: string;
  }

  export function Inter(options: FontOptions): {
    className: string;
    variable: string;
    style: { fontFamily: string };
  };
}

declare module 'next/link' {
  import * as React from 'react';
  const Link: React.ComponentType<any>;
  export default Link;
}

declare module 'next/image' {
  import * as React from 'react';
  const Image: React.ComponentType<any>;
  export default Image;
}