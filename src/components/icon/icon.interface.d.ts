import { SVGAttributes } from 'react';
import { FunctionalIcons, ProductIcons } from './Icons';
export type FunctionalIconNames = keyof typeof FunctionalIcons;
export type ProductIconNames = keyof typeof ProductIcons;
interface IconProps extends SVGAttributes<SVGAElement> {
    role?: 'presentation' | 'img';
    className?: string;
    title?: string;
}
export interface FunctionalIconProps extends IconProps {
    name: FunctionalIconNames;
    size?: 20 | 24;
}
export interface ProductIconProps extends IconProps {
    name: ProductIconNames;
    size?: 56;
}
export {};
//# sourceMappingURL=icon.interface.d.ts.map