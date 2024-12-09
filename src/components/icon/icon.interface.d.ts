import { SVGAttributes } from 'react';
import { FunctionalIcons, ProductIcons, SocialMediaIcons } from './Icons';

export type FunctionalIconNames = keyof typeof FunctionalIcons;
export type ProductIconNames = keyof typeof ProductIcons;
export type SocialMediaIconNames = keyof typeof SocialMediaIcons;
interface IconProps extends SVGAttributes<SVGAElement> {
    role?: 'presentation' | 'img';
    className?: string;
    title?: string;
}
export interface FunctionalIconProps extends IconProps {
    name: FunctionalIconNames;
    size?: 20 | 24 | 32;
}
export interface ProductIconProps extends IconProps {
    name: ProductIconNames;
    size?: 56;
}
export interface SocialMediaIconProps extends IconProps {
    name: SocialMediaIconNames;
    size?: 20 | 24;
}
export {};
//# sourceMappingURL=icon.interface.d.ts.map