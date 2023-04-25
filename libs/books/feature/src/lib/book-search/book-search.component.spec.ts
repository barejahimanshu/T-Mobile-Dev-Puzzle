import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  createReadingListItem,
  SharedTestingModule,
} from '@tmo/shared/testing';
import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchComponent } from './book-search.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayContainer } from '@angular/cdk/overlay';
import { of } from 'rxjs';
import { addToReadingList } from '@tmo/books/data-access';

describe('ProductsListComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;
  let snackBar: MatSnackBar;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule],
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
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should add book to the reading list when Want To Read button is clicked, 1', () => {
    const book = {
      id: '765',
      title: 'Graphana',
      authors: ['Maxmillan'],
      description: 'A textbook to become expert in Graphana',
    };
    const spy = spyOn(component['store'],'dispatch');
    component.addBookToReadingList(book);
    expect(spy).toHaveBeenCalledWith(addToReadingList({book}));
 
  });


  it('should add book to the reading list when want to read button is clicked, 2', () => {
    const book = {
      id: '234',
      title: 'Python',
      authors: ['McOBailley'],
      description: 'from Basic to Advanced in Python',
    };
    spyOn(snackBar, 'open').and.returnValue(
      (component.snackBarRef = {
        onAction: () => {
          return of({});
        },
      })
    );
    const spySnackBarAction = spyOn(
      component.snackBarRef,
      'onAction'
    ).and.returnValue(of({}));
    component.addBookToReadingList(book);
    expect(spySnackBarAction).toHaveBeenCalled();
  });

  it('should call the openSnackbar function', () => {
    const spy = spyOn(snackBar, 'open');
    const message="Book with title Python has been added to the reading list";
    const snackAction = "UNDO";
    const timer = {"duration": 3000};
    component.openSnackBar(message, snackAction);
    expect(spy).toHaveBeenCalledWith(message,snackAction,timer);
  });

 
});
