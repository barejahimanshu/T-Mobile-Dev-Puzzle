CODE_SMELL
# Observables are not unsubscribed which would cause memory leak.
# Reducers (failedRemoveFromReadingList, confirmedRemoveFromReadingList, failedAddToReadingList, confirmedAddToReadingList) were not handled for reading list.component.
# Spinner/Loader is required at the time of API calls to enhance user experience.
# Instead of subscriptions we can use async pipe.
# In Books.service.ts file, there is no proper error handling if API is not responding.
# The use of innerHTML creates a potential security risk for your website. 

ACCESSIBILITY
AutomationScans:-
# Background and foreground colors do not have a sufficient contrast ratio.
Manual Scans:- 
# Missing alternative text on images.
# Buttons do not have an accessible name.
# In BookSearch component,"JavaScript" anchor element is not clickable with tab. So, we can replace it with some other native element like button.
