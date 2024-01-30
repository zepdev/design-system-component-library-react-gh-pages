import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ children, align }: import("./media-text.interface").MediaTextProps): import("react/jsx-dev-runtime").JSX.Element;
        Image: ({ src, alt, children, aspectRatio }: import("./media-text.interface").MediaTextImageProps) => import("react/jsx-dev-runtime").JSX.Element;
        Body: ({ children }: import("./media-text.interface").MediaTextBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
        Headline: ({ children }: import("./media-text.interface").MediaTextHeadlineProps) => import("react/jsx-dev-runtime").JSX.Element;
        Description: ({ children }: import("./media-text.interface").MediaTextDescriptionProps) => import("react/jsx-dev-runtime").JSX.Element;
        Button: ({ children, label, onClick, }: Pick<import("..").ButtonProps, "label" | "children" | "onClick" | "icon" | "iconPosition">) => import("react/jsx-dev-runtime").JSX.Element;
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
export declare const LongText: Story;
//# sourceMappingURL=MediaText.stories.d.ts.map