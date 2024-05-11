# Network Requests Management Project

This project provides a custom React hook for managing network requests. It handles API calls with features like error handling, loading state management, and refetching. The hook is written in TypeScript and utilizes library Axios.

## Installation
To install the project dependencies, run the following command:

`npm install`

## Usage
1. Import the custom hook `useAxios` from the `useAxios` module.
2. Use the `useAxios` hook in your React components to make network requests.
3. Pass the API endpoint URL to the `useAxios` hook to send requests.
4. The hook returns an object containing the response data, loading state, and error information.
5. You can trigger a refetch of the API request by calling the `refetch` function returned by the hook.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npx cypress open`

To run the Cypress tests locally:

1. Make sure your development server is running (npm start).
2. Open a new terminal window and navigate to the project directory.
3. Run `npx cypress open` to launch the Cypress Test Runner.
4. Click on the test file (*.spec.ts or *.spec.js) you want to run.
5. Cypress will open a browser window and execute the tests, providing real-time feedback on the results.


