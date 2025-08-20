import type { ComponentType, ReactNode } from "react";
import type { MDXProps } from 'mdx/types';
import type { Metadata as NextMetadata } from "next";
import { Subheading } from "@/ui";
import { ViewportPage } from "@/features/page";

export interface Metadata {
    title?: string;
    subtitle?: string;
    breadcrumbs?: ReactNode;
    sidebar?: ReactNode;
}

const defaultHeading = "No Heading";

interface Props {
    children?: ReactNode;
    metadata?: Metadata;
}

const Page = ({ children, metadata = {} }: Props) => {
    const { title = defaultHeading, subtitle, breadcrumbs, sidebar } = metadata;
    return <ViewportPage heading={title} subheading={<Subheading>{subtitle}</Subheading>} breadcrumbs={breadcrumbs} support={sidebar}>
        {children}
    </ViewportPage>;
};

interface Module {
    'default': ComponentType<MDXProps>;
    metadata?: Metadata;
}

export const toMetadata = (mod: Module) => {
    const { title } = mod.metadata ?? {};
    return {
        title
    } satisfies NextMetadata;
};

export const toPage = (mod: Module) => {
    const {'default': Component, metadata } = mod;
    const MdxPage = () => <Page metadata={metadata}>
        <Component />
        </Page>;
    return MdxPage;
};
