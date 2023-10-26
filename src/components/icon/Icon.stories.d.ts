import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./icon.interface").FunctionalIconProps>;
    argTypes: {
        name: {
            control: {
                type: string;
                options: ("string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function")[];
            };
        };
        size: {
            control: {
                disable: boolean;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Functional: Story;
export declare const Colored: Story;
export declare const Product: Story;
export declare const Overview: Story;
//# sourceMappingURL=Icon.stories.d.ts.map