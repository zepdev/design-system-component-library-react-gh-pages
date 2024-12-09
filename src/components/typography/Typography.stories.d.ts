import { StoryObj } from '@storybook/react';
import { default as React, ElementType } from 'react';

type TypographyProps = {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | ElementType;
    children: React.ReactNode;
    className?: string;
    ref?: any;
};
declare const meta: {
    title: string;
    component: React.FC<TypographyProps>;
    tags: string[];
    argTypes: {
        children: {
            className: {
                disable: boolean;
            };
            control: {
                disable: boolean;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Scale: Story;
export declare const Weights: Story;
export declare const Specs: Story;
//# sourceMappingURL=Typography.stories.d.ts.map