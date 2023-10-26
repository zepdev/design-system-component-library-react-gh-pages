import type { StoryObj } from '@storybook/react';
import { SpacingProps } from './spacing.interface';
declare const meta: {
    title: string;
    component: import("react").FC<SpacingProps>;
    tags: string[];
    argTypes: {
        direction: {
            control: {
                type: string;
                options: string[];
            };
        };
        gap: {
            control: {
                type: string;
                options: string[];
            };
        };
        justifyContent: {
            control: {
                type: string;
                options: string[];
            };
        };
        alignItems: {
            control: {
                type: string;
                options: string[];
            };
        };
        children: {
            control: {
                disable: boolean;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Spacing.stories.d.ts.map