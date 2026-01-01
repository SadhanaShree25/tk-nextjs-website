// This file is used to declare types for MDX files
declare module '*.mdx' {
  import { ComponentType } from 'react';
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
