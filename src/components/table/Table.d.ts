import { TableBodyProps, TableCellProps, TableHeadCellProps, TableHeadProps, TableProps, TableRowProps } from './table.interface';
declare const Table: {
    ({ children, className, maxWidth, maxHeight, fullWidth, ...props }: TableProps): import("react/jsx-dev-runtime").JSX.Element;
    Body: ({ children, ...props }: TableBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
    Cell: ({ children, className, align, dataLabel, ...props }: TableCellProps) => import("react/jsx-dev-runtime").JSX.Element;
    Head: ({ children, className, ...props }: TableHeadProps) => import("react/jsx-dev-runtime").JSX.Element;
    HeadCell: ({ children, className, align, ...props }: TableHeadCellProps) => import("react/jsx-dev-runtime").JSX.Element;
    Row: ({ children, className, ...props }: TableRowProps) => import("react/jsx-dev-runtime").JSX.Element;
};
export { Table };
//# sourceMappingURL=Table.d.ts.map