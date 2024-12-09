import { StoryObj } from '@storybook/react';
import { ToggleProps } from './toggle.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ToggleProps>;
    tags: string[];
    argTypes: {
        toggleVariant: {
            control: {
                type: string;
            };
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LeftLabel: Story;
export declare const RightLabel: Story;
export declare const WithIcon: Story;
//# sourceMappingURL=Toggle.stories.d.ts.map