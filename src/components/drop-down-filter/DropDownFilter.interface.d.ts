import { HTMLAttributes } from 'react';

type DropDownFilterItem = {
    id: string | number;
    name: string;
};
export interface DropDownFilterProps extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    items: Array<DropDownFilterItem>;
    label?: string;
    message?: string;
    noOptionsLabel: string;
    placeholder?: string;
    readOnly?: boolean;
    state?: 'default' | 'error' | 'info';
}
export {};
//# sourceMappingURL=DropDownFilter.interface.d.ts.map