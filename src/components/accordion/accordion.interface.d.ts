import { ButtonHTMLAttributes, ReactNode } from 'react';

export declare enum AccordionInitialState {
    ALL_CLOSED = "ALL_CLOSED",
    ALL_OPEN = "ALL_OPEN",
    FIRST_OPEN = "FIRST_OPEN"
}
export type AccordionItem = {
    title: string;
    content: ReactNode;
    disabled?: boolean;
    className?: string;
};
export interface AccordionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    items: AccordionItem[];
    initialState?: AccordionInitialState;
}
//# sourceMappingURL=accordion.interface.d.ts.map