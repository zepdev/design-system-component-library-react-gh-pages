import { AnchorHTMLAttributes, ElementType } from 'react';
import { FunctionalIconNames, SocialMediaIconNames } from '../icon';
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
    icon?: FunctionalIconNames;
    hasIcon?: boolean;
    socialMediaIcon?: boolean;
    socialIcon?: SocialMediaIconNames;
    iconPlacement?: 'before' | 'after';
    className?: string;
}
//# sourceMappingURL=link.interface.d.ts.map