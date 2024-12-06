# Sprint 3 Report 
Video Link: 

## What's New (User Facing)
 * Navigation Bar
 * Clubs being displayed in the club datagrid
 * Club cards for clubs you are a part of
 * Ability to join clubs
 * Ability to leave clubs
 * Calendar Routing so you can access it
 * Account page

## Work Summary (Developer Facing)
This sprint included many user interface components. The website now has a polished look with a navigation bar allowing the users to route between pages. There is a dynamic club grid and club card system that displays clubs. The backend also now supports error messages for dynamic errors which can be pushed to the frontend for dynamic pop-ups later.

## Unfinished Work
The website currently has an issue with not properly rerendering components once the information is caught, requiring the user to switch pages before seeing the data. The calendar system currently doesn't save information to the database or retrieve events from the database. The notification system is not implemented on the frontend.

## Completed Issues/User Stories
Here are links to the issues that we completed in this sprint:
 * [NavBar](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946228&issue=noahschmal%7CClubHub%7C48)
 * [Ability to join clubs](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946247&issue=noahschmal%7CClubHub%7C49)
 * [Displaying of the user's clubs](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946253&issue=noahschmal%7CClubHub%7C50)
 * [Account Page](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946269&issue=noahschmal%7CClubHub%7C51)
 * [Calendar Routing](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946275&issue=noahschmal%7CClubHub%7C52)
 * [Ability to leave clubs](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946294&issue=noahschmal%7CClubHub%7C53)
 * [Backend Notification](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946443&issue=noahschmal%7CClubHub%7C56)
 * [Backend Add user to club](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946529&issue=noahschmal%7CClubHub%7C59)
 * [Backend Remove user from club](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946526&issue=noahschmal%7CClubHub%7C58)
 * [Backend Error Handling](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946521&issue=noahschmal%7CClubHub%7C57)


 ## Incomplete Issues/User Stories
 Here are links to issues we worked on but did not complete in this sprint:
 * [Frontend Notification Sender](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946330&issue=noahschmal%7CClubHub%7C54)
 * [Backend Calendar Implementation](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89949059&issue=noahschmal%7CClubHub%7C60)
 * [Backend Event Implementation](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=89946361&issue=noahschmal%7CClubHub%7C55)

## Code Files for Review
Please review the following code files, which were actively developed during this sprint, for quality:
 * [clubSlice.ts](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/slices/clubSlice.ts)
 * [ClubCard.tsx](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/pages/components/ClubCard.tsx)
 * [NavBar.tsx](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/pages/components/ClubCard.tsx)
 * [Account.tsx](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/pages/Account.tsx)
 * [ClubGrid.tsx](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/pages/ClubGrid.tsx)
 * [Home.tsx](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/pages/Home.tsx)
 
 
## Retrospective Summary
Here's what went well:
  * Feeling like we have a good understanding of React/Typescript and common node modules.
  * Creating an intuitive and simple user interface
  * Division of backend and frontend work
 
Here's what we'd like to improve:
  * Having more user-facing features
  * Issue of having items not rendering properly
  
Here are changes we plan to implement in the next sprint:
  * Frontend Notifications for clubs
  * Connecting to the backend for the calendar
  * Ability to change account passwords
