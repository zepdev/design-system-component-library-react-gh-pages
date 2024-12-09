import { ButtonHTMLAttributes, ReactNode } from 'react';

export type AccordionItem = {
    title: string;
    content: ReactNode;
    disabled?: boolean;
    className?: string;
};
export interface AccordionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    items: AccordionItem[];
}
//# sourceMappingURL=accordion.interface.d.ts.map