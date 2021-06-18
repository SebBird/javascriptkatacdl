# ReadMe

My documentation for this project follows the default instructions generated with Create React App!

Thank you, and I look forward to your feedback!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# My Process

Starting out with this Kata, I knew right away that I wished to use React due to its flexibility and relative ease when using it to interact with the DOM in single page apps. The ability to change the state of an element and allow the library to handle updating the DOM is really powerful and allowed me to focus on implementing the logic required for the task at hand.

## Key Decisions

Whilst the choice to use React was my first major decision, I had many minor design choices to think about when beginning to write my application. First and foremost, I wished to create a codebase which not only adhered to the DRY principle, but was also easily expandable in the future. For this reason, I created an array of objects representing each individual product and placed it in ProductList.js. This was meant to mimic the process of receiving data from the back-end.

Creating an array in this manner allowed my code to work with as many products needed, and I tested this by adding a few extra products beyond the initial four listed in the specification. These additional products had different prices to those in the specification, and a few also had their own special offers when purchasing certain amounts.

This design choice also meant that my logic had to be implemented in such a way that it could work with any amount of products. I made use of the .map and .forEach methods when dealing with arrays, and also had to use Object.entries when dealing with standalone objects.

Outside of this, I chose to use styled-components as my main focus was on the logic of the application and this would allow me to quickly and easily write readable, reusable CSS required to build a simple UI.

## What I'd Do Differently

Given the time frame of this kata, I would definitely implement more features if I had extra time.

Besides the improvements to the styling, I would also have liked to implement a more detailed basket. In the current state, it only updates and displays the current products in the basket alongside their quantity. I would have liked to include a running total for each individual product, so you could more accurately breakdown the total pricing of the basket. To do this, I would have updated my calculateTotal function to calculate these values seperately and store them in another variable, which would then be passed down to the basket.

In addition, I would have also liked to include a delete button on each individual item in the basket, so users could remove and alter their items without having to reset the entire basket each time. I would have utilised the setNewProductQuantities function to reset the individual product's quantity back to zero.

Given my beginner knowledge of Cypress, I did not attempt to make any tests for my application as it would have fallen outside of the set time-frame. However, I will still be attempting to do so in my own time, and this will most likely be pushed to a branch in the near future.

I would have also liked to utilise localStorage and make the program persist beyond a page refresh, to more accurately mimic a real world online shopping basket.
