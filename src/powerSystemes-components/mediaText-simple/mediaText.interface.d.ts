import { ReactNode } from 'react';

export interface MediaTextProps {
    imageAlignment?: 'left' | 'right';
    children?: ReactNode;
}
export interface MediaTextBodyProps {
    children: ReactNode;
    imageAlignment?: 'left' | 'right';
}
export interface MediaTextImageProps {
    src: string;
    alt: string;
    aspectRatio?: '4:3' | '3:4';
    orientation?: 'landscape' | 'portrait';
    imageAlignment?: 'left' | 'right';
}
export interface MediaTextTaglineProps {
    children: ReactNode;
}
export interface MediaTextHeadlineProps {
    children: ReactNode;
}
export interface MediaTextDescriptionProps {
    children: ReactNode;
}
export interface MediaTextButtonProps {
    children?: ReactNode;
    labelPrimary: string;
    labelSecondary: string;
    onClickPrimary?: () => void;
    onClickSecondary?: () => void;
}
//# sourceMappingURL=mediaText.interface.d.ts.map