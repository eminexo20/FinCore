// This file provides type definitions for image imports
// Next.js will eventually overwrite or supplement this with next-env.d.ts
// but this file immediately removes the red squiggly lines in the editor.

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}
