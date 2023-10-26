import { ListboxProps } from '@headlessui/react';
export type DropDownItem = {
    id: string | number;
    name: string;
};
export interface DropDownProps extends ListboxProps<'div', any, any> {
    items: Array<DropDownItem>;
    placeholder: string;
    value: DropDownItem;
    disabled?: boolean;
    label?: string;
    message?: string;
    readOnly?: boolean;
    required?: boolean;
    notRequiredHint?: string;
    state?: 'default' | 'error' | 'info';
    onChange?: (item: string) => void;
}
//# sourceMappingURL=drop-down.interface.d.ts.map