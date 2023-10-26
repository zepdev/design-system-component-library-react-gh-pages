import type { StoryObj } from '@storybook/react';
import { ButtonProps, ButtonVariant } from './button.interface';
declare const meta: {
    title: string;
    component: import("react").FC<ButtonProps>;
    tags: string[];
    argTypes: {
        disabled: {
            control: {
                type: string;
            };
        };
        isLoading: {
            control: {
                type: string;
            };
        };
        variant: {
            control: {
                type: string;
                options: ButtonVariant[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const FullWidth: Story;
export declare const Overview: Story;
//# sourceMappingURL=Button.stories.d.ts.map