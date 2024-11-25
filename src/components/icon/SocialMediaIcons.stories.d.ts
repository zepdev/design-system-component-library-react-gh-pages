import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    tags: string[];
    component: import("react").FC<import("./icon.interface").SocialMediaIconProps>;
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
export declare const Overview: Story;
//# sourceMappingURL=SocialMediaIcons.stories.d.ts.map