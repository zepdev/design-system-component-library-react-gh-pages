import { DefaultInputComponentProps, Props } from 'react-phone-number-input';
export interface PhoneInputProps extends Pick<Props<DefaultInputComponentProps>, 'value' | 'onChange' | 'readOnly' | 'className' | 'disabled' | 'defaultCountry'> {
    id?: string;
    label?: string;
    error?: boolean;
    required?: boolean;
    notRequiredHint?: string;
}
//# sourceMappingURL=phone-input.interface.d.ts.map