import type { ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
    readonly cond: boolean;
}

export const If = ({ cond, children }: Props) => cond ? children : null;
