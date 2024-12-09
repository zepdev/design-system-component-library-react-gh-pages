import { HTMLAttributes, ReactNode } from 'react';

export interface SmallHeroProps extends HTMLAttributes<HTMLDivElement> {
    Comp?: keyof JSX.IntrinsicElements;
    imagePath: string;
    children: ReactNode;
}
//# sourceMappingURL=small-hero.interface.d.ts.map