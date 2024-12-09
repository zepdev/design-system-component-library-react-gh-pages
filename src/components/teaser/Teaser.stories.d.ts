import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        ({ backgroundColor, imageAlignment, children }: import('./teaser.interface').TeaserProps): import("react/jsx-dev-runtime").JSX.Element;
        Image: ({ src, alt, aspectRatio }: import('./teaser.interface').TeaserImageProps) => import("react/jsx-dev-runtime").JSX.Element;
        Tagline: ({ children }: import('./teaser.interface').TeaserTaglineProps) => import("react/jsx-dev-runtime").JSX.Element;
        Body: ({ children }: import('./teaser.interface').TeaserBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
        Headline: ({ children }: import('./teaser.interface').TeaserHeadlineProps) => import("react/jsx-dev-runtime").JSX.Element;
        Description: ({ children }: import('./teaser.interface').TeaserDescriptionProps) => import("react/jsx-dev-runtime").JSX.Element;
        Button: ({ children, label, onClick }: Pick<import('..').ButtonProps, "children" | "onClick" | "label" | "icon" | "iconPosition">) => import("react/jsx-dev-runtime").JSX.Element;
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
export declare const ImageAlignmentRight: Story;
export declare const BackgroundColorWhite: Story;
//# sourceMappingURL=Teaser.stories.d.ts.map