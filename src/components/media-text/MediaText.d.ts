import { ButtonProps } from '..';
import { MediaTextBodyProps, MediaTextDescriptionProps, MediaTextHeadlineProps, MediaTextImageProps, MediaTextProps } from './media-text.interface';

declare const MediaText: {
    ({ children, align }: MediaTextProps): import("react/jsx-dev-runtime").JSX.Element;
    Image: ({ src, alt, children, aspectRatio }: MediaTextImageProps) => import("react/jsx-dev-runtime").JSX.Element;
    Body: ({ children }: MediaTextBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
    Headline: ({ children }: MediaTextHeadlineProps) => import("react/jsx-dev-runtime").JSX.Element;
    Description: ({ children }: MediaTextDescriptionProps) => import("react/jsx-dev-runtime").JSX.Element;
    Button: ({ children, label, onClick, }: Pick<ButtonProps, 'children' | 'onClick' | 'icon' | 'iconPosition' | 'label'>) => import("react/jsx-dev-runtime").JSX.Element;
};
export { MediaText };
//# sourceMappingURL=MediaText.d.ts.map