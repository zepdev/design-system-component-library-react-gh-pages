export interface PaginationProps {
    Comp?: keyof JSX.IntrinsicElements;
    currentPage: number;
    lastPage: number;
    maxLength: number;
    setCurrentPage: (page: number) => void;
    totalElements: number;
}
//# sourceMappingURL=pagination.interface.d.ts.map