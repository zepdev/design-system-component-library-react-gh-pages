import { TableBodyProps, TableCellProps, TableHeadCellProps, TableHeadProps, TableProps, TableRowProps, TableThemes } from './table.interface';
export declare const useTableContext: () => {
    variant: TableThemes;
};
declare const Table: {
    ({ children, className, variant, maxWidth, maxHeight, fullWidth, textTop, buttonLabel, descriptionBottom, descriptionTop, rows, columnNames, align, tableButtonOnClick, iconButtonOnClick, ...props }: TableProps): import("react/jsx-dev-runtime").JSX.Element;
    Body: ({ children, ...props }: TableBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
    Cell: ({ children, className, isFirstRow, align, ...props }: TableCellProps) => import("react/jsx-dev-runtime").JSX.Element;
    Head: ({ children, className, ...props }: TableHeadProps) => import("react/jsx-dev-runtime").JSX.Element;
    HeadCell: ({ children, className, align, ...props }: TableHeadCellProps) => import("react/jsx-dev-runtime").JSX.Element;
    Row: ({ children, className, ...props }: TableRowProps) => import("react/jsx-dev-runtime").JSX.Element;
};
export { Table };
//# sourceMappingURL=Table.d.ts.map