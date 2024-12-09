import { default as React, MouseEvent } from 'react';
import { FunctionalIconNames } from '../icon';

export declare enum TableThemes {
    Zps = "ZPS",
    Cat = "CAT"
}
export declare enum CellType {
    Text = "text",
    Button = "button"
}
export interface ColumnProps<T = {}> extends Omit<React.HTMLAttributes<HTMLTableElement>, 'onClick'> {
    onClick?: (text: string, row: T, index: number) => void;
    iconName?: FunctionalIconNames;
    title?: string;
}
export interface TableColumn<T> extends Omit<React.HTMLAttributes<HTMLTableElement>, 'title'> {
    title: string | React.ReactNode;
    key: string;
    dataIndex: string;
    renderAs?: CellType;
    props?: ColumnProps<T>;
}
export interface TableProps<T = {}> extends React.HTMLAttributes<HTMLTableElement> {
    dataSource: T[];
    columns: TableColumn<T>[];
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
export declare class cellType {
}
//# sourceMappingURL=table.interface.d.ts.map