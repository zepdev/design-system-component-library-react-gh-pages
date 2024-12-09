import { HTMLAttributes, ReactNode } from 'react';

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
    Comp?: keyof JSX.IntrinsicElements;
    imagePath: string;
    children: ReactNode;
    alignment?: 'left' | 'right';
}
//# sourceMappingURL=hero.interface.d.ts.map