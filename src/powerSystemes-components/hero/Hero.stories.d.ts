import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ children }: import("./hero.interface").HeroProps): import("react/jsx-dev-runtime").JSX.Element;
        Image: ({ imageSrc, imageAlt }: import("./hero.interface").HeroImageProps) => import("react/jsx-dev-runtime").JSX.Element;
        Body: ({ children }: import("./hero.interface").HeroBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
        Header: ({ children }: import("./hero.interface").HeroHeadlineProps) => import("react/jsx-dev-runtime").JSX.Element;
        Button: ({ buttonPrimary, buttonSecondary }: import("./hero.interface").HeroButtonProps) => import("react/jsx-dev-runtime").JSX.Element;
        IconArrow: ({ imageSrc, alt }: import("./hero.interface").HeroArrowIconProps) => import("react/jsx-dev-runtime").JSX.Element;
    };
    tags: string[];
    argTypes: {
        children: {
            control: {
                disable: boolean;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Hero.stories.d.ts.map