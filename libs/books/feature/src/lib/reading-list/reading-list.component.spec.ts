import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';
import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@tmo/books/feature';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayContainer } from '@angular/cdk/overlay';
import { of } from 'rxjs';

describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;
  let snackBar: MatSnackBar;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule],
    }).compileComponents();
  }));

  beforeEach(inject(
    [MatSnackBar, OverlayContainer],
    (sb: MatSnackBar, oc: OverlayContainer) => {
      snackBar = sb;
      overlayContainer = oc;
      overlayContainerElement = oc.getContainerElement();
    }
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove book from the reading list when remove button icon clicked, 1', () => {
    const book = {
      bookId: 'Java',
      title: 'Java and SpringBoot',
      authors: ['Kevin O'],
      description: 'Java and SpringBootconcepts'
    };
    spyOn(snackBar, 'open').and.returnValue(
      (component.snackBarRef = {
        onAction: () => {
          return of({});
        },
      })
    );
    component.removeFromReadingList(book);
    expect(snackBar.open).toHaveBeenCalled();
  });

  it('should call the openSnackbar function', () => {
    const spy = spyOn(snackBar, 'open');
    const message="Book with title Python has been removed from the reading list";
    const snackAction = "UNDO";
    const timer = {"duration": 3000};
    component.openSnackBar(message, snackAction);
    expect(spy).toHaveBeenCalledWith(message,snackAction,timer);
  });
});
