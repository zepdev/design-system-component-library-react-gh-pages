import { default as React, MouseEventHandler } from 'react';

type TooltipBubblePosition = 'top' | 'bottom' | 'left' | 'right';
type TooltipBubbleColor = 'light' | 'dark' | 'zps' | 'cat';
type TooltipBubbleAlign = 'start' | 'center' | 'end';
export interface TooltipBubbleProps {
    show?: boolean;
    position?: TooltipBubblePosition;
    align?: TooltipBubbleAlign;
    label?: string;
    description: string;
    className?: string;
    color?: TooltipBubbleColor;
    onClose?: MouseEventHandler;
}
export interface TooltipProps extends TooltipBubbleProps {
    children: React.ReactNode;
    className?: string;
}
export {};
//# sourceMappingURL=tooltip.interface.d.ts.map