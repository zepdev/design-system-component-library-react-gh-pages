import { InputHTMLAttributes } from 'react';
import { FunctionalIconNames } from '../icon/icon.interface';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    icon?: FunctionalIconNames;
    hasInfoIcon?: boolean;
    infoTitle?: string;
    placeholder: string;
    required?: boolean;
    notRequiredHint?: string;
    message?: string;
    messageAriaLive?: 'assertive' | 'polite' | 'off';
    state?: 'error' | 'info' | 'default' | 'disabled';
    onIconToggle?: () => void;
    onIconInfoClick?: () => void;
}
export declare const InputScope = "zep-input";
//# sourceMappingURL=input.interface.d.ts.map