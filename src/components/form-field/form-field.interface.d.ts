import { HTMLAttributes, ReactNode } from 'react';
export interface FormFieldProps extends HTMLAttributes<HTMLFieldSetElement> {
    children: ReactNode;
    messageId?: string;
    message?: string;
    state?: 'error' | 'info' | 'default';
}
export declare const FormFieldScope = "zep-form-field";
//# sourceMappingURL=form-field.interface.d.ts.map