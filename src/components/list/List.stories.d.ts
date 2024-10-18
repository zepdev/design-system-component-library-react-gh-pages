import type { StoryObj } from '@storybook/react';
import { ListProps } from './list.interface';
declare const meta: {
    title: string;
    component: {
        ({ type, children, className }: ListProps): import("react/jsx-dev-runtime").JSX.Element;
        Item: ({ children }: import("./list.interface").ListItemProps) => import("react/jsx-dev-runtime").JSX.Element;
    };
    tags: string[];
    argTypes: {
        children: {
            control: {
                disable: boolean;
            };
        };
        type: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Ordered: Story;
export declare const Mixed: Story;
export declare const LinkItems: Story;
//# sourceMappingURL=List.stories.d.ts.map