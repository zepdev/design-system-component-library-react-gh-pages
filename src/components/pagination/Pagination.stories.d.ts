import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('./pagination.interface').PaginationProps>;
    tags: string[];
    argTypes: {};
    decorators: ((Story: import('@storybook/types').PartialStoryFn<import('@storybook/react/dist/types-0fc72a6d').R, {
        Comp?: keyof JSX.IntrinsicElements | undefined;
        currentPage: number;
        lastPage: number;
        maxLength: number;
        setCurrentPage: (page: number) => void;
        totalElements: number;
    }>) => import("react/jsx-dev-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const With1Page: Story;
export declare const With2Pages: Story;
export declare const With12Pages: Story;
export declare const AsButtonPageLinks: Story;
//# sourceMappingURL=Pagination.stories.d.ts.map