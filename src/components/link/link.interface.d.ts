import { ElementType, AnchorHTMLAttributes } from 'react';
export declare enum LinkMode {
    Standalone = "standalone",
    Inline = "inline"
}
export declare enum LinkSize {
    Base = "base",
    Small = "sm"
}
export declare enum LinkTarget {
    Self = "_self",
    Blank = "_blank"
}
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    as?: ElementType;
    label: string;
    mode?: LinkMode;
    disabled?: boolean;
    size?: LinkSize;
    target?: LinkTarget;
}
//# sourceMappingURL=link.interface.d.ts.map