import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedTestingModule } from '@tmo/shared/testing';

import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchComponent } from './book-search.component';
import { searchBooks } from '@tmo/books/data-access';
import { fromEvent, of } from 'rxjs';

fdescribe('ProductsListComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should call searhBooks and dispatch search action', () => {
    spyOn(component, 'searchBooks');
    const el = fixture.nativeElement.querySelector('input');
    el.value = 'Python';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.searchBooks).toHaveBeenCalled();
      expect(component['store'].dispatch).toHaveBeenCalledWith(
        searchBooks({ term: 'Python' })
      );
    });
  });

  it('should call the unsubscribe method', () => {
    component.subscription = of({}).subscribe((val) => val);
    spyOn(component.subscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });

  it('should call the search Example method', () => {
    component.searchForm.controls.term.setValue('Python');
    spyOn(component,'searchBooks');
    component.searchExample();
    expect(component.searchBooks).toHaveBeenCalled()
  });

  it('should call the search Book method', () => {
    component.searchForm.controls.term.setValue('Python');
    const spy = spyOn(component['store'], 'dispatch')
    component.searchBooks();
    expect(spy).toHaveBeenCalledWith(
      searchBooks({ term: 'Python' })
    );
  });
});
