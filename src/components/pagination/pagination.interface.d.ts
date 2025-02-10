export interface PaginationProps {
    Comp?: keyof JSX.IntrinsicElements;
    currentPage: number;
    itemsPerPage: number;
    setCurrentPage: (page: number) => void;
    totalElements: number;
    theme?: 'default' | 'indigo';
}
//# sourceMappingURL=pagination.interface.d.ts.map