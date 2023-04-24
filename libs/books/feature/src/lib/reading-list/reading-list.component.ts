import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToReadingList, getReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  snackBarRef: any;

  constructor(private readonly store: Store, private _snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.snackBarRef = this._snackBar.open(
      `Removed book ${item.title}`,
      'UNDO',
    );

    this.snackBarRef.onAction().subscribe(async () => {
      this.store.dispatch(
        addToReadingList({
          book: {
            id: item.bookId,
            ...item,
          },
        })
      );
    });
  }
}
