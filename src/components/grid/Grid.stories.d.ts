import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('./grid.interface').GridProps>;
    tags: string[];
    argTypes: {
        children: {
            control: {
                disable: boolean;
            };
        };
        columns: {
            control: {
                type: string;
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
export declare const CustomGridItemsSpan: Story;
//# sourceMappingURL=Grid.stories.d.ts.map