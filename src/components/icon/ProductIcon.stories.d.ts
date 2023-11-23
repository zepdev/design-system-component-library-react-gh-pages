import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    tags: string[];
    component: import("react").FC<import("./icon.interface").ProductIconProps>;
    argTypes: {
        name: {
            control: {
                type: string;
                options: ("string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function")[];
            };
        };
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Colored: Story;
export declare const Overview: Story;
//# sourceMappingURL=ProductIcon.stories.d.ts.map