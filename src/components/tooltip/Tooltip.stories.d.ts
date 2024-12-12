import { StoryObj } from '@storybook/react';
import { TooltipProps } from './tooltip.interface';

declare const meta: {
    title: string;
    component: ({ children, label, description, className, color, position, align, }: TooltipProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Tooltip.stories.d.ts.map