import { FunctionalIconNames } from 'lib';
import { HTMLAttributes } from 'react';
export interface LinkItem {
    icon: FunctionalIconNames;
    link: string;
}
export interface LinkListProps extends HTMLAttributes<HTMLDivElement> {
    headline: string;
    links: LinkItem[];
}
//# sourceMappingURL=linkList.interface.d.ts.map