import type { StoryObj } from '@storybook/react';
import { HeroProps } from './hero.interface';
declare const meta: {
    title: string;
    component: import("react").FC<HeroProps>;
    argTypes: {
        imagePath: {
            control: {
                type: string;
            };
        };
        alignment: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Right: Story;
//# sourceMappingURL=hero.stories.d.ts.map