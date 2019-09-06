import { Injectable } from '@angular/core';
import { PagingData, PagingConfig } from './paging-data.model';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class PaginationService {
  init(pagingData: PagingData): PagingConfig {
    const paginate = require('jw-paginate');

    return pagingData ? paginate(pagingData.totalRows, Number(pagingData.page), pagingData.rowsPerPage, env.maxPages) as PagingConfig : null;
  }
}
