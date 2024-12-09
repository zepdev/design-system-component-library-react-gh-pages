import { HTMLAttributes, ReactNode } from 'react';

export interface FieldsetProps extends HTMLAttributes<HTMLFieldSetElement> {
    children: ReactNode;
    messageAriaLive?: 'off' | 'assertive' | 'polite';
    messageId?: string;
    message?: string;
    state?: 'error' | 'info' | 'default' | 'disabled';
    disabled?: boolean;
}
export declare const FieldsetScope = "zep-field-set";
//# sourceMappingURL=Fieldset.interface.d.ts.map