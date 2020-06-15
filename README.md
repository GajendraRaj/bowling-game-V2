# Bowling Game Kata

[bowling-score]: https://github.com/stephane-genicot/katas/blob/master/Bowling.md

## Scoring bowling

Create a program, which, given a valid sequence of rolls for one line of American Ten-Pin Bowling, produces the total score for the game.

# Here are some things that the program will not do:

Problem Description

- We will not check for valid rolls.
- We will not check for correct number of rolls and frames.
- We will not provide scores for intermediate frames.
- Depending on the application, this might or might not be a valid way to define a complete story, but we do it here for purposes of keeping the kata light. I think you’ll see that improvements like those above would go in readily if they were needed for real.

# We can briefly summarize the scoring for this form of bowling:

- Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
- In each frame, the bowler gets up to two tries to knock down all the pins.
- If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in his two tries.
- If in two tries he knocks them all down, this is called a “spare” and his score for the frame is ten plus the number of pins knocked down on his next throw (in his next turn).
- If on his first try in the frame he knocks down all the pins, this is called a “strike”. His turn is over, and his score for the frame is ten plus the simple total of the pins knocked down in his next two rolls.
- If he gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
- The game score is the total of all frame scores.

### `npm install`

Install all project dependencies

#### `npm start`

Runs the app <br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
In order to run in different port please refer top answer from [stack overflow](https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project)

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Code Commiting Guidelines:

Inspired from [Udacity](https://udacity.github.io/git-styleguide/)

- chore: updating build tasks, package manager configs, initial commit, etc.. no production code change
- docs: changes to documentation (Readme file)
- feat: a new feature with test case
- fix: a bug fix
- tyle: formatting, missing semi colons, etc.. no code change
- refactor: refactoring production code
- test: Refactoring test; no production code change

##### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

###### Contributing

This repository is to get use to TDD - Learning Purpose Only.
