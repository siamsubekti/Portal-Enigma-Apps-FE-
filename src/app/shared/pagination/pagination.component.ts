import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Params } from '@angular/router';
import { PagingData, PagingConfig } from './paging-data.model';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'ngx-pagination',
  templateUrl: './views/pagination.html',
  styleUrls: ['./views/pagination.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input('link') link: string;
  @Input('queryParams') queryParams: Params;
  @Input('pagingData') pagingData: PagingData;
  @Input('position') position: 'start' | 'center' | 'end' = 'start';
  @Input('size') size: 'small' | 'normal' | 'large' = 'normal';

  protected paginationSizes = {
    small: 'pagination-sm',
    normal: '',
    large: 'pagination-lg',
  };

  protected pager: PagingConfig;
  protected term: string;
  protected order: string;
  protected sort: string;

  constructor(private readonly service: PaginationService) {}

  ngOnChanges(changes: SimpleChanges) {
    const { changePagingData, changeQueryParams } = changes;
    this.pagingData = changePagingData ? changePagingData.currentValue : this.pagingData;
    this.queryParams = changeQueryParams ? changeQueryParams.currentValue : this.queryParams;
    this.init();
  }

  private init() {
    this.pager = this.service.init(this.pagingData);
    if (this.pager) {
      this.term = this.queryParams.term;
      this.order = this.queryParams.order;
      this.sort = this.queryParams.sort;

      // console.log('pagingData:', this.pagingData, 'queryParams:', this.queryParams, 'pager:', this.pager);
    }
  }
}
