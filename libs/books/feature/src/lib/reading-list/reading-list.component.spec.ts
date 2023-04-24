import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';
import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@tmo/books/feature';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  it('should mark a book as read', () => {
    const item = {
      bookId: 'test',
      title: 'test',
      authors: ['test'],
      description: 'test',
      id: 'test',
    };
    const spy = spyOn(snackBar, 'open');
    component.markAsFinished(item);
    expect(spy).toHaveBeenCalled();
  });
});
