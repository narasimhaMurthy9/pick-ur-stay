import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @ViewChildren('theLastUser', { read: ElementRef })
  theLastUser: QueryList<ElementRef>;
  @Input() responseData: any = [];
  @Input() config: any = {};
  @Input() customSort: boolean = true;
  @Input() paginator: boolean = false;
  @Input() showPageLinks: boolean = true;
  @Input() rows: number;
  @Input() metadata: {};
  @Input() loading: {};
  @Input() showInfiniteLoad:boolean;
  @Output() pageChange = new EventEmitter();
  @Output() intersectionHappened = new EventEmitter();
  @Output() sortcolumn = new EventEmitter();
  columns: object[] = [];
  records: object[] = [];
  observer: any;
  ngOnInit(): void {
    this.getData();
  }

  // infinite loading

  onInterSection() {
    this.intersectionHappened.emit(true);
  }
  // get the response data from parent component
  getData() {
    this.columns = this.config.columns;
    this.records = this.responseData;
  }

  // sorting
  customSorting(event: SortEvent) {
    this.sortcolumn.emit(event);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['responseData'] && changes['responseData'].currentValue) {
      this.records = this.responseData;
    }
  }
  // pagination
  onPageChange(pageData: any) {
    this.pageChange.emit({
      first: pageData.first,
      page: pageData.page,
      pageCount: pageData.pageCount,
      rows: pageData.rows,
    });
  }
}
