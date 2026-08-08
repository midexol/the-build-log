import type { MDXComponents } from "mdx/types";

// Override tags rendered inside .mdx post content. Extend this as you
// need custom components (e.g. a <Callout /> or <ProjectCard />).
export function getMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    ...components,
  };
}
