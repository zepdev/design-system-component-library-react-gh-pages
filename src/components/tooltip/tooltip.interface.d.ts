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
    onClose?: (event: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => void;
}
export interface TooltipProps extends TooltipBubbleProps {
    children: React.ReactNode;
    className?: string;
}
export {};
//# sourceMappingURL=tooltip.interface.d.ts.map