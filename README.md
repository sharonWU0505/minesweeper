# Minesweeper

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set Up at Local

- `npm install`
- `npm run start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start`
  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test`
  - Launches the test runner in the interactive watch mode.
- `npm run build`
  - Builds the app for production to the `build` folder.

## Design Ideas

- Components
  - `Game`
    - maintain all states here
      - game status: win or lose, how many bombs not being flagged
      - cell status: values, revealed not not, flagged or not
      - right click event handler (flag)
      - left click event handler (reveal)
  - `Board`
  - `Cell`
    - value (the number of bombs adjacent it)
    - revealed
    - flagged
- Utils
  - `createGame`
    - create a game by row, column, number of bombs
    - start to create a game if an user starts he/her first click
  - `revealAll`
    - clicking a cell with no adjacent mine clears that cell and clicks all adjacent cells
