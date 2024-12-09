import { StoryObj } from '@storybook/react';
import { HeaderShortProps } from './headershort.interface';

declare const meta: {
    title: string;
    component: ({ textColor, tagline, headline, showArrow }: HeaderShortProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LongHeadline: Story;
export declare const ComponentWithoutTagline: Story;
export declare const ComponentWithoutArrow: Story;
//# sourceMappingURL=HeaderShort.stories.d.ts.map