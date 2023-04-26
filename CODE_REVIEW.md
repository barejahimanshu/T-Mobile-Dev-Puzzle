CODE_SMELL
# UI is not responsive; it breaks on small screens so media queries can be used to make UI responsive.
# Track by can be using along with the *ngFor as it helps in improving the performance.
# Empty constructor and ngOnInit functions can be removed for better readability of code.
# Async Pipes can be used instead of the subscriptions.
# There should be proper error handling at the service level i.e if API is resulting into an error it should be caught and handled properly.Example :- Search Method in Book.service.ts file should have a catch Error block.
# Books description in p tag is being displayed using the innerHTML property which is not the best coding practice; so instead of it interpolation can be used.
# Reducers (failedRemoveFromReadingList, confirmedRemoveFromReadingList, failedAddToReadingList, confirmedAddToReadingList) were not handled for reading list.component.
# To make UI better interactive, we can show loader until API has fetched us the result.
# Unsubscription of observables should be handled to avoid memory leak issues.


ACCESSIBILITY
AutomationScans:-
# Text are not having a sufficient background and foreground color contrast ratio for text .
Manual Scans:- 
# All HTML Button Elements should have aria-label property defined as it is intended for interactive elements for screen readers.
# Sample text(i.e. JavaScript) in BookSearch Component is not accessible if we are trying to navigate with the help of tab. Need to replace that anchor element with Button element.
# img tags in the Book Search and Reading List component are not having the alt attribute which is immportant for screen readers.
