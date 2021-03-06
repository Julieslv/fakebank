This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Browser support
Modern browsers, not IE11, Edge, FF, Chrome.

## Additonal Tools an libraries


### [Styled Components](https://styled-components.com/)
I have chosen styled components as I think that this allows your to folow the idea of building componets using the [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/).

CSS in JS allows us to use our components out the box without having to include any external files. They should just work.

Further but out of scope for this project it would be better to include [Storybook](https://storybook.js.org/) when developing components so as to avoid duplication and giving both designers and developers a visual reference of everything in the project.

### [Styled normalised](https://www.npmjs.com/package/styled-normalize)

### [Style-lint](https://stylelint.io/)

### [React-Axe](https://stylelint.io/)
Useful for Accessibility development

## improvements and considerations
### TODO - a few points
* Finish off layout
  * the layout for desktop is significantly different from desktop.. in terms of behaviour... while this may make sense from a UX perspective, it may result in having to duplicate components, one for mobile and another for desktop which I want to avoid while accommodating the desktop behaviour. In the world of SPA's this may not be such a bad thing since SEO would not be of concern here.

  Plan would be to have two different behaviours on click for desktop and mobile. Desktop would expand the content while mobile would render a different component with details.

  The header has the potential for a colour property to be passed to it. I am not sure where or how this would be stored and may need to be discussed with someone more technical than myself.

  * font-sizes are in px, but should be in em and rem. Would be nice to add a library that could do the calculation for us. so we could write something like [styled-units](https://www.npmjs.com/package/styled-units)

* navigation bottom menu for mobile
* add a loading to the list
* populate the list with data from the endpoint
  * I had issues with getting the endpoint to work... I had a syntax error in my hook that resulted in an empty object. :unamused:
  ** The idea is to extract the data from the endpoint into a new array, depending on the date as there are two grouping, one by state then the items in the list for each date. I think this may be a loop in a loop, but I am not too certain how good practice this is and if another better approach may ne needed.

* Routes using [react router](https://reacttraining.com/react-router/web/example/url-params)





