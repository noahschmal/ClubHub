# Sprint x Report 
Video Link: https://drive.google.com/file/d/1_m8c439CWS40-JPW93szGjdQ9XonW2NS/view?usp=sharing

## What's New (User Facing)
 * The JSON database 
 * User registration page
 * User login page
 * Ability for users to use previously created accounts

## Work Summary (Developer Facing)
During this sprint, we decided as a team to focus entirely on building a flexible base and finding a good language around which to build our project. We did a lot of research to decide between the use of JavaScript and C# and finally decided to use JavaScript with Node and TypeScript. This was done because we believed that this would give us a good amount of online resources as well as useability and flexibility going forward. This was especially important for our team as we had little to no experience with web development. 
In the back end and the database we ran into several issues. First, in the backend, we decided to use a tutorial to help shape a healthy long-term backend the problem that we ran into though was that this specific tutorial was rather old. This meant that one of the libraries in use had changed and had left some of the code unusable. This had to be fixed and would not have been as difficult if it were not for it being the first time that we had used JavaScript and TypeScript. Finally, we had an almost functional locally hosted database before we realized that it would not be able to be run on all of our machines and would have to be drastically altered twice to run on Windows and Mac after being built on Linux. So instead we decided to use an online server hosting service called Atlas. For the frontend, things were fairly straight forward. We first implemented an early version that had login/registration UI, then we added role-based access control to the pages and connected the frontend to the backend.

## Unfinished Work
We did not have any unfinished work because we decided to focus mainly on creating a solid foundation on which we will create the rest of the project. Specifically we decided to spend a lot of time looking at different language and layouts for out project as well as creating a flexible base. Therefore our actual programing was not quite as feature rich but should put us into a good position going forward.

## Completed Issues/User Stories
Here are links to the issues that we completed in this sprint:

 * [Frontend Implementation](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=84422694&issue=noahschmal%7CClubHub%7C10)
 * [Backend Implementation](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=84422889&issue=noahschmal%7CClubHub%7C12)
 * [RBAC](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=84422803&issue=noahschmal%7CClubHub%7C11)
 * [Database Creation](https://github.com/users/noahschmal/projects/3/views/1?pane=issue&itemId=84422162&issue=noahschmal%7CClubHub%7C9)

 ## Incomplete Issues/User Stories
 Here are links to issues we worked on but did not complete in this sprint:
 
 * We completed everything we initially slated to complete in this sprint.

## Code Files for Review
Please review the following code files, which were actively developed during this sprint, for quality:
 * [index.tsx](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/index.tsx)
 * [login.tsx](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/pages/Login.tsx)
 * [authSlice.ts](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/slices/authSlice.ts)
 * [userSlice.ts](https://github.com/noahschmal/ClubHub/blob/main/frontend/src/slices/userSlice.ts)
 * [User.ts](https://github.com/noahschmal/ClubHub/blob/main/backend/src/models/User.ts)
 * [authController.ts](https://github.com/noahschmal/ClubHub/blob/main/backend/src/controllers/authController.ts)
 * Basically everything under the src folders in frontend and backend
 
## Retrospective Summary
Here's what went well:
  * The creation of the database after the abandonment of the locally hosted version
  * Division of work
  * Effective diagrams
 
Here's what we'd like to improve:
   * UI/UX
   * Moving faster with making decisions about big-picture things.
   * More in line coding and documentation
  
Here are changes we plan to implement in the next sprint:
   * Addition of documentation as things are implemented
   * More pages for the user to utilize
   * Addition of clubs to the database
