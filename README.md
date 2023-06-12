
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

## Project Title

Multilingual service to assess knowledge of students and job applicants

## Demo

[https://albshar.github.io/quizFrontend/](https://albshar.github.io/quizFrontend/)

## Features

- Countdown Timer
- Displaying and hiding a modal window using React portals.
- Multilingual support (Russian and English) using hook _useTranslation_ and library _react-i18next_
- Graphical visualizations results of testing (_Chart.js_)
- Filtration of user answers by themes and right/wrong answers
- Dynamic display of questions and answer choices from Firebase Database using _Context API_

## Run Locally

Clone the project

```bash
  git clone https://github.com/AlbShar/quizFrontend.git
```

Go to the project directory

```bash
  cd quizFrontend
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run start
```


## Tech Stack

- TypeScript (4.9.5)
- React (18.2.0)
- Styled-components (5.3.6)
- Chart.js (4.3.0)
- ESLint
- Firebase

## Running Tests

To run ESLint, run the following command

```bash
  npm run lint
```

To automatically fix errors by ESLint, run the following command

```bash
  npm run lint: fix
```

## Localization
We use library i18next for text localization. There are JSON files with translates on folder public/locales.

## Team

- Frontend developer
- QA engineer
- Designer
- Project Manager

## License

[MIT](https://choosealicense.com/licenses/mit/)


