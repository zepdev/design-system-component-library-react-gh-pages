import { HTMLAttributes } from 'react';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    id: string;
    name?: string;
    checked: boolean;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    label?: string;
    children?: React.ReactNode;
    onChange: (e?: any) => void;
}
//# sourceMappingURL=checkbox.interface.d.ts.map