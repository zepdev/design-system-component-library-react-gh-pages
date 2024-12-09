import { SpacingProps } from './spacing.interface';

export declare const spacing: (props?: ({
    direction?: "row" | "column" | null | undefined;
    gap?: "0" | "1" | "0.25" | "0.5" | "0.75" | "1.5" | "2" | "2.5" | "3" | "3.75" | "4" | null | undefined;
    justifyContent?: "end" | "start" | "center" | "between" | "around" | "evenly" | null | undefined;
    alignItems?: "end" | "start" | "center" | "baseline" | "stretch" | null | undefined;
    wrap?: "wrap" | "nowrap" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export declare const Spacing: React.FC<SpacingProps>;
//# sourceMappingURL=Spacing.d.ts.map