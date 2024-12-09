import { default as React, ReactNode } from 'react';

export interface TeaserProps {
    backgroundColor?: 'dark' | 'white';
    imageAlignment?: 'left' | 'right';
    children?: ReactNode;
}
export interface TeaserBodyProps {
    children: React.ReactNode;
}
export interface TeaserImageProps {
    src: string;
    alt: string;
    aspectRatio?: '16:9' | '9:16';
    orientation?: 'landscape' | 'portrait';
}
export interface TeaserTaglineProps {
    children: React.ReactNode;
}
export interface TeaserHeadlineProps {
    children: React.ReactNode;
}
export interface TeaserDescriptionProps {
    children: React.ReactNode;
}
//# sourceMappingURL=teaser.interface.d.ts.map