# Sprint x Report 
<<<<<<< HEAD
Video Link: 
## What's New (User Facing)
 * Feature 1: The json database 
 * Feature 2 or Bug Fix 2
 * Feature n or Bug Fix n

## Work Summary (Developer Facing)
During this sprint we decided as a team to focus entirely on build a flexible base and finding a good language to build our project around. We did a lot of research to decide between the use of JavaScript and C# and finaly decided to use JavaScript with Node and TypeScript. This was done because we believed that this would give us a good amount of online resources as well as useability and flexibility going forward. This was especially important for our team as we had little to no experience with web development. 
In the back end and the database we ran into serveral issues. First in the backend we decided to use a tutorial to help shape a health long term backend the problem that we ran into though was that this specific tutorial was rather old. This meant that one of the libraries in use had changed and had left some of the code unusable. This had too be fixed and would not have been as dificult if it were not for it being the 
## Unfinished Work
We did not have any unfinished work because we decided to focus mainly on creating a solid foundation on which we will create the rest of the project. Specifically we decided to spend a lot of time looking at different language and layouts for out project as well as creating a flexible base. Therefore our actual programing was not quite as feature rich but should put us into a good position going forward.
## Completed Issues/User Stories
Here are links to the issues that we completed in this sprint:

 * URL of issue 1
 * URL of issue 2
 * URL of issue n

 Desirables (Remove this section when you save the file):
  * Each issue should be assigned to a milestone
  * Each completed issue should be assigned to a pull request
  * Each completed pull request should include a link to a "Before and After" video
  * All team members who contributed to the issue should be assigned to it on GitHub
  * Each issue should be assigned story points using a label
  * Story points contribution of each team member should be indicated in a comment
 
 ## Incomplete Issues/User Stories
 Here are links to issues we worked on but did not complete in this sprint:
 
 * URL of issue 1 <<One sentence explanation of why issue was not completed>>
 * URL of issue 2 <<One sentence explanation of why issue was not completed>>
 * URL of issue n <<One sentence explanation of why issue was not completed>>
 
 Examples of explanations (Remove this section when you save the file):
  * "We ran into a complication we did not anticipate (explain briefly)." 
  * "We decided that the feature did not add sufficient value for us to work on it in this sprint (explain briefly)."
  * "We could not reproduce the bug" (explain briefly).
  * "We did not get to this issue because..." (explain briefly)

## Code Files for Review
Please review the following code files, which were actively developed during this sprint, for quality:
 * [Name of code file 1](https://github.com/your_repo/file_extension)
 * [Name of code file 2](https://github.com/your_repo/file_extension)
 * [Name of code file 3](https://github.com/your_repo/file_extension)
 
## Retrospective Summary
Here's what went well:
  * Item 1: The creation of the database after the abandonment of the locally hosted version
  * Item 2
  * Item x
 
Here's what we'd like to improve:
   * Item 1: UI
   * Item 2
   * Item x
  
Here are changes we plan to implement in the next sprint:
   * Item 1
   * Item 2
   * Item x
=======
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
>>>>>>> a760a74 (updating to main)
