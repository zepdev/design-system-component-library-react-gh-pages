import { MouseEvent } from 'react';
export declare enum TableThemes {
    Zps = "ZPS",
    Cat = "CAT"
}
export declare enum cellType {
    Text = "text",
    Icon = "icon",
    Booliean = "boolean"
}
export interface TableCell extends React.HTMLAttributes<HTMLTableElement> {
    value: string;
    type: cellType;
}
export interface TableRow extends React.HTMLAttributes<HTMLTableElement> {
    rowCells: TableCell[];
}
export interface TableHeads extends React.HTMLAttributes<HTMLTableElement> {
    name: string;
}
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    rows: TableRow[];
    columnNames: TableHeads[];
    maxWidth?: number;
    maxHeight?: number;
    fullWidth?: boolean;
    variant?: TableThemes;
    textTop?: boolean;
    descriptionTop?: string;
    descriptionBottom: string;
    buttonLabel: string;
    align?: 'left' | 'center' | 'right';
    tableButtonOnClick: (ev: MouseEvent<HTMLElement>) => void;
    iconButtonOnClick?: (ev: MouseEvent<HTMLElement>) => void;
}
export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}
export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    isFirstRow?: boolean;
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