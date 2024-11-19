# Sprint 2 Report 
Video Link: https://drive.google.com/file/d/1MExtevE8y7sGK405dQDoQ3hnCWxcbR_Q/view?usp=sharing

## What's New (User Facing)
 * Calendar
 * Email System
 * User Club grid page
 * Ability for users to create Clubs

## Work Summary (Developer Facing)
During this sprint, we focused on modifying the backend to accept more than one object in the database. This came in creating new models to be put into the database as well as significant challenges in debugging the middleware(express and axios). The difficulty in implementing this was mostly when learning the implementation. Beyond this, we now have a system and architecture that add new things to the database is now much quicker and can be done just as fast as it takes to type out the files. 

The frontend development included creating a new slice for clubs which required extensive debugging due to the aforementioned middleware that required different implementation then was done in sprint 1 to include clubs. The datagrid page was then created and setup in a way to allow editing of the information. Information for the grid is currently hardcoded, but will be added in sprint 3. Unfortunately, we ran into a bug that miraculously fixed itself which will now allow us to continue displaying database information on the website.

## Unfinished Work
For this sprint, one of the largest pieces of unfinished work is the club datagrid for displaying all clubs and the user’s clubs. Significant time during this sprint was spent trying to develop it, however, it remains unfished. This will be a large portion of sprint 3 as well being that it is the main feature of our website and needs to be functioning well. Right now as it sits we are able to pull club info from our database, and we can display info on the grid. They unfortunately, are not playing well together leading to many many hours of frustration. We also need to integrate the calendar and events notification system to be integrated with the backend.

## Completed Issues/User Stories
Here are links to the issues that we completed in this sprint:

 * [Clubs frontend implementation](https://github.com/users/noahschmal/projects/3?pane=issue&itemId=87741060&issue=noahschmal%7CClubHub%7C29)
 * [Clubs backend implementation](https://github.com/users/noahschmal/projects/3?pane=issue&itemId=87741066&issue=noahschmal%7CClubHub%7C28)
 * [Create Club](https://github.com/users/noahschmal/projects/3?pane=issue&itemId=87741110&issue=noahschmal%7CClubHub%7C23)
* [Create Club](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=87741110&issue=noahschmal%7CClubHub%7C23)
* [Calendar](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=87741080&issue=noahschmal%7CClubHub%7C26)
* [Email System](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=87741094&issue=noahschmal%7CClubHub%7C25)

 ## Incomplete Issues/User Stories
 Here are links to issues we worked on but did not complete in this sprint:
 
 * [Clubs grid implementation](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=87741069&issue=noahschmal%7CClubHub%7C27)
 * [Event system backend](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=87741100&issue=noahschmal%7CClubHub%7C24)


## Code Files for Review
Please review the following code files, which were actively developed during this sprint, for quality:
 * [Clubs.tsx] (https://github.com/noahschmal/ClubHub/blob/main/frontend/src/pages/Clubs.tsx)
 * [ClubGrid.tsx] (https://github.com/noahschmal/ClubHub/blob/frontend-changes/frontend/src/pages/ClubGrid.tsx)
 * [clubSlice.ts] (https://github.com/noahschmal/ClubHub/blob/main/frontend/src/slices/clubSlice.ts)
 * [Club.ts] (https://github.com/noahschmal/ClubHub/blob/main/backend/src/models/Club.ts)
 * [Event.ts] (https://github.com/noahschmal/ClubHub/blob/DBConnection/backend/src/models/Event.ts)
 * [clubControler.ts] (https://github.com/noahschmal/ClubHub/blob/main/backend/src/controllers/clubController.ts)
 * [eventControler.ts] (https://github.com/noahschmal/ClubHub/blob/DBConnection/backend/src/controllers/eventController.ts)
 * [clubRouter.ts] (https://github.com/noahschmal/ClubHub/blob/main/backend/src/routes/clubRouter.ts)
 * [eventRouter.ts] (https://github.com/noahschmal/ClubHub/blob/DBConnection/backend/src/routes/eventRouter.ts)
 
## Retrospective Summary
Here's what went well:
  * Refactoring of database calls in frontend to receive data using middleware
 
Here's what we'd like to improve:
   * Communication 
   * Adding the rest of the features and cleaning up the UI
   * Knowledge of JavaScript (Typescript/NodeJS/React/Express/Axios/JSON/Mongoose/redux)
  
Here are changes we plan to implement in the next sprint:
   * Implementation of frontend club grid with saving for changes
   * Calendar and events tied together
   * Error statements bad inputs in the UI (implemented in backend must be ported to the UI/frontend)
