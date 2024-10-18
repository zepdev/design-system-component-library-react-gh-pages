import type { StoryObj } from '@storybook/react';
import { SmallHeroProps } from './small-hero.interface';
declare const meta: {
    title: string;
    component: import("react").FC<SmallHeroProps>;
    argTypes: {
        imagePath: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=SmallHero.stories.d.ts.map