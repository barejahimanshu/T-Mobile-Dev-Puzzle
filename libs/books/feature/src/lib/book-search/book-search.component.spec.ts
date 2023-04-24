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
    component.snackBarRef = snackBar.open('HEY');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should add to reading list', () => {
    const book = {
      id: 'test',
      title: 'test',
      authors: ['test'],
      description: 'test description',
    };
    const spy = spyOn(component, 'openSnackBar');
    const spySnackBarAction = spyOn(
      component.snackBarRef,
      'onAction'
    ).and.returnValue(of({}));
    component.addBookToReadingList(book);
    expect(spy).toHaveBeenCalled();
    expect(spySnackBarAction).toHaveBeenCalled();
  });

  it('should define snackbar', () => {
    const spy = spyOn(snackBar, 'open');
    component.openSnackBar('a', 'b');
    expect(spy).toHaveBeenCalled();
  });
});
