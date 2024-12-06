export type ToggleVariant = 'simple' | 'withIcon' | 'leftLabel' | 'rightLabel';
export interface ToggleProps {
    toggleVariant: ToggleVariant;
    label?: string;
    enabled?: boolean;
    onChange?: (value: boolean) => void;
    icon?: React.ReactNode;
}
//# sourceMappingURL=toggle.interface.d.ts.map