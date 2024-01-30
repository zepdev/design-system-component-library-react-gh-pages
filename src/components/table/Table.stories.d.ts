import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ children, className, maxWidth, maxHeight, fullWidth, ...props }: import("./table.interface").TableProps): import("react/jsx-dev-runtime").JSX.Element;
        Body: ({ children, ...props }: import("./table.interface").TableBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
        Cell: ({ children, className, align, dataLabel, ...props }: import("./table.interface").TableCellProps) => import("react/jsx-dev-runtime").JSX.Element;
        Head: ({ children, className, ...props }: import("./table.interface").TableHeadProps) => import("react/jsx-dev-runtime").JSX.Element;
        HeadCell: ({ children, className, align, ...props }: import("./table.interface").TableHeadCellProps) => import("react/jsx-dev-runtime").JSX.Element;
        Row: ({ children, className, ...props }: import("./table.interface").TableRowProps) => import("react/jsx-dev-runtime").JSX.Element;
    };
    tags: string[];
    argTypes: {
        children: {
            control: {
                disable: boolean;
            };
        };
    };
    parameters: {
        a11y: {
            disable: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const AlignLeft: Story;
export declare const AlignCenter: Story;
export declare const AlignRight: Story;
export declare const FixedSize: Story;
export declare const FullWidth: Story;
//# sourceMappingURL=Table.stories.d.ts.map