import { MediaTextBodyProps, MediaTextButtonProps, MediaTextDescriptionProps, MediaTextHeadlineProps, MediaTextImageProps, MediaTextProps, MediaTextTaglineProps } from './mediaText.interface';
export declare const useMediaTextContext: () => {
    imageAlignment: string;
};
declare const MediaText: {
    ({ imageAlignment, children }: MediaTextProps): import("react/jsx-dev-runtime").JSX.Element;
    Image: ({ src, alt, aspectRatio }: MediaTextImageProps) => import("react/jsx-dev-runtime").JSX.Element;
    Body: ({ children }: MediaTextBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
    Tagline: ({ children }: MediaTextTaglineProps) => import("react/jsx-dev-runtime").JSX.Element;
    Headline: ({ children }: MediaTextHeadlineProps) => import("react/jsx-dev-runtime").JSX.Element;
    Description: ({ children }: MediaTextDescriptionProps) => import("react/jsx-dev-runtime").JSX.Element;
    Button: ({ labelPrimary, labelSecondary, onClickPrimary, onClickSecondary }: MediaTextButtonProps) => import("react/jsx-dev-runtime").JSX.Element;
};
export { MediaText };
//# sourceMappingURL=MediaText.d.ts.map