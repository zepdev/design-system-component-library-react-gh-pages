import { StoryObj } from '@storybook/react';
import { LinkMode, LinkProps, LinkSize, LinkTarget } from './link.interface';

declare const meta: {
    title: string;
    component: import('react').FC<LinkProps>;
    tags: string[];
    argTypes: {
        disabled: {
            control: {
                type: string;
            };
        };
        size: {
            control: {
                type: string;
                options: LinkSize[];
            };
        };
        target: {
            control: {
                type: string;
                options: LinkTarget[];
            };
        };
        mode: {
            control: {
                type: string;
                options: LinkMode[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Inline: Story;
export declare const Standalone: Story;
export declare const Disabled: Story;
export declare const Small: Story;
export declare const Icon: Story;
export declare const External: Story;
export declare const AsSpanTag: Story;
export declare const RelAttribute: Story;
//# sourceMappingURL=Link.stories.d.ts.map