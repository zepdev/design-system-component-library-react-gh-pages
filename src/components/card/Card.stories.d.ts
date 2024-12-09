import { StoryObj } from '@storybook/react';
import { CardProps } from './card.interface';

declare const meta: {
    title: string;
    component: import('react').FC<CardProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithChildren: Story;
export declare const WithChildrenAndImage: Story;
export declare const ProductCard: Story;
export declare const WithFluidTypoHeadline: Story;
//# sourceMappingURL=Card.stories.d.ts.map