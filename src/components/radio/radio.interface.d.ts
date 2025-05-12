import { HTMLAttributes } from 'react';

export declare enum RadioVariant {
    Zps = "ZPS",
    Cat = "CAT",
    Zsd = "ZSD"
}
export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    checked?: boolean;
    label: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    onChange: () => void;
    variant?: RadioVariant;
}
//# sourceMappingURL=radio.interface.d.ts.map