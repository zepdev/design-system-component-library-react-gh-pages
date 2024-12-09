import { ReactNode } from 'react';

export interface ListProps {
    children: ReactNode;
    type: 'numeric' | 'bullet' | 'alphabetical';
    className?: string;
}
export interface ListItemProps {
    children: ReactNode;
    className?: string;
}
//# sourceMappingURL=list.interface.d.ts.map