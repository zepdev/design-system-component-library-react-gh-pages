export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
    maxWidth?: number;
    maxHeight?: number;
    fullWidth?: boolean;
}
export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}
export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    dataLabel?: string;
}
export interface TableHeadCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
}
export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
}
//# sourceMappingURL=table.interface.d.ts.map