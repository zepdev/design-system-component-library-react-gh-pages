import { MouseEventHandler } from 'react';

type TooltipBubblePosition = 'top' | 'bottom' | 'left' | 'right';
type TooltipBubbleColor = 'light' | 'dark';
type TooltipBubbleAlign = 'start' | 'center' | 'end';
export interface TooltipBubbleProps {
    show?: boolean;
    position?: TooltipBubblePosition;
    align?: TooltipBubbleAlign;
    children: React.ReactNode;
    className?: string;
    color?: TooltipBubbleColor;
    onClose?: MouseEventHandler;
}
export interface TooltipProps extends TooltipBubbleProps {
    children: React.ReactNode;
    content: React.ReactNode;
    className?: string;
}
export {};
//# sourceMappingURL=tooltip.interface.d.ts.map