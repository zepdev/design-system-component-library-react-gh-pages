export interface MediaTextProps {
    children: React.ReactNode;
    align?: 'left' | 'right';
}
export interface MediaTextBodyProps {
    children: React.ReactNode;
}
export interface MediaTextImageProps {
    src: string;
    alt: string;
    aspectRatio?: '16:9' | '9:16';
    orientation?: 'landscape' | 'portrait';
    children?: React.ReactNode;
}
export interface MediaTextHeadlineProps {
    children: React.ReactNode;
}
export interface MediaTextDescriptionProps {
    children: React.ReactNode;
}
//# sourceMappingURL=media-text.interface.d.ts.map