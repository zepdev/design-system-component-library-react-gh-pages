import { InputHTMLAttributes } from 'react';
export interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    excludeCountries?: string[];
    initialCountry?: string;
    message?: string;
    onlyCountries?: string[];
    preferredCountries?: string[];
    state?: 'default' | 'error' | 'info';
}
export declare const PhoneInputScope = "zep-phone-input";
//# sourceMappingURL=PhoneInput.interface.d.ts.map