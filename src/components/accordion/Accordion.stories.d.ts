import { StoryObj } from '@storybook/react';
import { AccordionProps } from './accordion.interface';

declare const meta: {
    title: string;
    component: import('react').FC<AccordionProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ExpandAll: Story;
export declare const ExpandFirstItem: Story;
//# sourceMappingURL=Accordion.stories.d.ts.map