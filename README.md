
## Quiz

Multilingual service to assess knowledge of students and job applicants


## Demo

[https://albshar.github.io/quizFrontend/](https://albshar.github.io/quizFrontend/)

## Getting Started
- At first clone the repository from Github
``` 
git clone https://github.com/AlbShar/quizFrontend.git
```
- Install dependencies. Make sure you already have node.js and npm installed in your system
``` 
npm install
```
- Run local web server
``` 
npm run start
```


## Features

- Countdown Timer
- Changing language to English or Russian with help library react-i18next
- Storing user answers, spent time and quantity of pauses at Firebase Realtime Database
- Graphical visualizations results of testing with help Chart.js
- Filtration of user answers by themes and right/wrong answers

## Branch naming convention
 - Branch name must starts with type of the task - ‘feature', ‘bugfix’ or 'hotfix’ and short task description
 - Between type of the task and task description we should use '/'
 - Branch name must ends short task description, which must contain ticket number from Jira. Task description must contain about 2-4 words which describe goal of the task, every word must separated with ‘-'. For hot fix it’s not necessary to put task number in branch name
 
Example: *feature/QF-45-add-filtration*

Example: *hotfix/endless-loading*

## Commit message convention 
- Commit message must starts with ticket number from Jira and short description of what was done
- Ticket number and description (36 chars of less) must separated with space
- First description word must be started with capital letter. Write your commit message in the imperative: "Fix bug" and not "Fixed bug" or "Fixes bug."
- If you need to fix something quickly it’s not necessary to put task number in commit message


Example: *QF-45 Add filtration by theme*

Example: *HOT-FIX Fix endless loading*

## Tech Stack

- TypeScript
- React
- Styled-components
- Firebase
- Chart.js
- ESLint

## Linting
- Check .ts and .tsx files by ESLint
``` 
npm run lint
```
- Fix .ts and .tsx files by ESLint 
``` 
npm run lint: fix
```
## Localization
We use library i18next for text localization. There are JSON files with translates on folder public/locales.

## Team
- Frontend developer
- QA engineer
- Designer
- Project Manager


