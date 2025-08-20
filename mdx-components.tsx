import type { MDXComponents } from 'mdx/types';
import { theme } from "@/features/mdx";

export const useMDXComponents: () => MDXComponents = () => {
    return theme;
};
