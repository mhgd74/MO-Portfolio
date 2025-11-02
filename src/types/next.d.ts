/// <reference types="next" />

declare module 'next/image' {
  import { ImageProps } from 'next/image';
  const Image: React.FC<ImageProps>;
  export default Image;
}

declare module 'next/link' {
  import { LinkProps } from 'next/link';
  const Link: React.FC<LinkProps>;
  export default Link;
}