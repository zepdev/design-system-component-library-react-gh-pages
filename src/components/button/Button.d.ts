import { ButtonProps, ButtonVariant } from './button.interface';

export declare const buttonVariants: {
    primary: string[];
    secondary: string[];
    tertiary: string[];
    "dark-primary": string[];
    "dark-secondary": string[];
    "dark-tertiary": string[];
    "light-primary": string[];
    "light-secondary": string[];
    "light-tertiary": string[];
};
export declare const button: (props?: ({
    variant?: ButtonVariant | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map