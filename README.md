# Minesweeper

> Preview Page: https://sharonwu0505.github.io/minesweeper/

The game has the following rules:

- [x] Clicking a mine ends the game.
- [x] Clicking a cell with an adjacent mine clears that cell and shows the number of mines touching it.
- [x] Clicking a cell with no adjacent mine clears that cell and clicks all adjacent cells.
- [x] The first click will never be a mine.
- [x] It will clear the map and place numbers on the grid.
- [x] The numbers reflect the number of mines touching a cell.

| Ready to Start                                                                                                  | Playing                                                                                                         | Win!!                                                                                                           | Lose QQ                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/19202399/116819761-0615a480-aba4-11eb-9eac-088f5946f337.png) | ![image](https://user-images.githubusercontent.com/19202399/116819786-2ba2ae00-aba4-11eb-8a32-be5aeba9cfb0.png) | ![image](https://user-images.githubusercontent.com/19202399/116819874-bbe0f300-aba4-11eb-9259-dad26de80b72.png) | ![image](https://user-images.githubusercontent.com/19202399/116819832-758b9400-aba4-11eb-9963-d70fe564a549.png) |

## Set Up at Local

1. Make sure that `node` (`>= v.14.15.4`) and `npm` (`>= v6.14.10`) are installed
   - Installing `node` and `npm` by [`nvm`](https://github.com/nvm-sh/nvm) is suggested.
2. Clone the repository: `git clone https://github.com/sharonWU0505/minesweeper.git`
3. Stay on the `main` branch
4. Install packages: `npm install`
5. Run the web app: `npm run start`
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start`
  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test`
  - Launches the test runner in the interactive watch mode.
- `npm run build`
  - Builds the app for production to the `build` folder.

## Project Details

> This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Packages Included

- Provided by [Create React App](https://github.com/facebook/create-react-app#whats-included)
- More installed
  - [`prop-types`](https://www.npmjs.com/package/prop-types) for validating React components' props
  - [`node-sass`](https://www.npmjs.com/package/node-sass) for transforming SCSS to CSS
  - [`react95`](https://www.npmjs.com/package/react95) for styling pages with Windows95 styles
  - [`styled-components`](https://www.npmjs.com/package/styled-components) for implementing CSS-in-JS
  - [`font-awesome`](https://www.npmjs.com/package/font-awesome) for using pictographic icons

#### Folder Structure

```
minesweeper
├── .vscode                 // settings for integrating linters and formatter with VSCode
├── public
│   ├── images
│   ├── index.html          // the web app's template
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── __tests__
│   ├── assets
│   │   └── scss            // for global styling
│   ├── components          // presentational components
│   ├── containers          // container components
│   ├── utils               // utilities functions for getting updated data of the game
│   ├── App.js              // the main container
│   ├── config.js           // settings for creating a minesweeper
│   ├── index.js            // the web app's JavaScript entry point
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env.development
├── .env.production
├── .eslintrc
├── .gitignore
├── .prettierrc
├── package-lock.json
├── package.json
└── README.md
```

## Design Ideas

> `square` in the Google Doc is called `cell` here

#### Basics

Firstly, I build this minesweeper by [React](https://reactjs.org/). And the project is bootstrapped by [Create React App](https://github.com/facebook/create-react-app), which is a reliable and well-designed project template provided by Facebook.

In the web app, I totally rely on React [Hooks](https://reactjs.org/docs/hooks-reference.html) to deal with states, because data flows and changes of state from operations are quite simple in the game. I do not include any state management tool that may be more suitable for larges-scale and complicated websites.

Other than React, [`styled-components`](https://www.npmjs.com/package/styled-components) and [`react95`](https://www.npmjs.com/package/react95) are used for styling and displaying Windows-like pages.

#### Components Explanation

##### The `Game` Component

Due to cases that data from multiple components should be collected to judge the game's status and child components should communicate with each other. I decide to maintain shared states in the `Game` component. Those are

- whether the game is `started` or not
- whether the game is `ended` or not
- `cells`: I use an array of object to abstract a minesweeper, since it's easier to realize immutability on 1D array compared to 2D array.
- a `failedCell` causing the failure after clicking it

This keep child components in sync.

##### Child Components: `ActionBar`, `Cell`

> - All are presentational components

- `ActionBar`: for rendering restart- and solve- buttons
- `Cell`: for rendering a cell with different status, `value`, click events, etc. by `props` received

##### The Actions

> - Those are defined in `/utils`.
> - Those are triggered by events in `Game` component to get updated game data

1. `createGame`
   - to create an array of default cells based on the game level
2. `initializeGame`
   - will be triggered by `handleLeftClick` if it is the first click
   - The rule, the first click will never be a mine, is required, so mines and values of cells are set here.
   - randomly generate mines based on the game level
   - update properties, `isMine` and `value`, for cells
3. `revealCells`
   - will be triggered by `handleLeftClick`
   - will reveal the clicked cell
   - will traverse and reveal cells if the clicked one has no adjacent mines
4. `setFlagOnCell`
   - will be triggered by `handleRightClick`
   - update `isFlagged` on the clicked cell and check if the game finished
