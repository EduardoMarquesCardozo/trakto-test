export interface Pagination<T> {
    data: T[];
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}