export class PagingData {
  page: number;
  totalPages: number;
  totalRows: number;
  rowsPerPage: number;
}

export class PagingConfig {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
}
