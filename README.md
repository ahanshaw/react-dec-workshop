# FUN WITH FIREBASE!

November 2021 React Challenge

## We're going to finish building an address book!

We've set up a basic React app that connects to a Firebase Realtime database. Currently, if fetches data and filters results according to the letter selected. Your mission, should you choose to accept it (and you should), is to create a form that will allow users to add new addresses to the address book.

### User emulation!

We've included Firebase Auth Emulation so that you can submit form data to the db without first having to create users and user accounts (but you're welcome to do that if you want bonus points, see below!).

IMPORTANT NOTE: For the auth emulation to work, you need to make sure it's using the correct port. To check this, open the src/services/firebase.js file and make sure auth.useEmulator('http://localhost:xxxx') matches your localhost URL. Otherwise, the form will appear to submit, but the data will not be added to the db. (Instead, if you look at your console, you'll see "Uncaught (in promise) Error: PERMISSION_DENIED: Permission denied.")

### Creating the Form!

Click on the "+" button at the top right of the page to see where the form should go.

The React docs have info on [React forms] (https://reactjs.org/docs/forms.html) to help get you started.

### Sending data!

Once you've created your form, you can hook it up to the database. Documentation for using a Realtime db can be found on the [Firebase docs] (https://firebase.google.com/docs/database/web/start).

You'll be most interested in [writing data] (https://firebase.google.com/docs/database/web/read-and-write#basic_write).

ANOTHER IMPORTANT NOTE: We used version 8 to fetch data. You can use version 9, but if you want to keep things consistent, use version 8.

## Bonus Goals!

-   Add form validation.
-   Allow addresses to be [edited or deleted] (https://firebase.google.com/docs/database/web/read-and-write#updating_or_deleting_data).
-   Only show tabs for letters that have data.
-   Add pagination.
-   Create user accounts and registration, login, and logout pages using [Firebase authentification] (https://firebase.google.com/docs/auth/web/start).

## &nbsp;

&nbsp;

# Original React README

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
