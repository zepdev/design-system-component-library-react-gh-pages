import { ButtonProps } from '..';
import { TeaserBodyProps, TeaserDescriptionProps, TeaserHeadlineProps, TeaserImageProps, TeaserProps, TeaserTaglineProps } from './teaser.interface';

export declare const useTeaserContext: () => {
    backgroundColor: string;
};
declare const Teaser: {
    ({ backgroundColor, imageAlignment, children }: TeaserProps): import("react/jsx-dev-runtime").JSX.Element;
    Image: ({ src, alt, aspectRatio }: TeaserImageProps) => import("react/jsx-dev-runtime").JSX.Element;
    Tagline: ({ children }: TeaserTaglineProps) => import("react/jsx-dev-runtime").JSX.Element;
    Body: ({ children }: TeaserBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
    Headline: ({ children }: TeaserHeadlineProps) => import("react/jsx-dev-runtime").JSX.Element;
    Description: ({ children }: TeaserDescriptionProps) => import("react/jsx-dev-runtime").JSX.Element;
    Button: ({ children, label, onClick }: Pick<ButtonProps, 'children' | 'onClick' | 'icon' | 'iconPosition' | 'label'>) => import("react/jsx-dev-runtime").JSX.Element;
};
export { Teaser };
//# sourceMappingURL=Teaser.d.ts.map