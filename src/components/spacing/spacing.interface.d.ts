import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { spacing } from './Spacing';
export interface SpacingProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof spacing> {
    children: ReactNode;
}
//# sourceMappingURL=spacing.interface.d.ts.map