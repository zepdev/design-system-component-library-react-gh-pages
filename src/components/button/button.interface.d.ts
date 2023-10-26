import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { FunctionalIconNames } from '../icon/icon.interface';
export declare enum ButtonVariant {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    DarkPrimary = "dark-primary",
    DarkSecondary = "dark-secondary",
    DarkTertiary = "dark-tertiary",
    LightPrimary = "light-primary",
    LightSecondary = "light-secondary",
    LightTertiary = "light-tertiary"
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label?: string;
    variant?: ButtonVariant;
    icon?: FunctionalIconNames;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
    children?: ReactNode;
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=button.interface.d.ts.map