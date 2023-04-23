CODE_SMELL
# Observables are not unsubscribed which would cause memory leak.
# Reducers (failedRemoveFromReadingList, confirmedRemoveFromReadingList, failedAddToReadingList, confirmedAddToReadingList) were not handled for reading list.component.
# Spinner/Loader is required at the time of API calls to enhance user experience.
# Instead of subscriptions we can use async pipe.
# In Books.service.ts file, there is no proper error handling if API is not responding.
# The use of innerHTML creates a potential security risk for your website. Malicious users can use cross-site scripting (XSS) to add malicious client-side scripts that steal private user information stored in session cookies.

ACCESSIBILITY
AutomationScans:-
# Background and foreground colors do not have a sufficient contrast ratio.
Manual Scans:- 
# Missing alternative text on images.
# Buttons do not have an accessible name.
# In BookSearch component,"JavaScript" anchor element is not clickable with tab. So, we can replace it with some other native element like button.
(Explanation :- Links that are built with anchor elements (<a>) are not accessible without an href value. The href value determines what page or content a user will be directed to once the link is activated. If the href value is left blank, then the link may appear to be broken to users and may also cause confusing screen reader announcements. )
