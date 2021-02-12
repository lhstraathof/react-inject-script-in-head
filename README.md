# Inject bundle / script in head without ejecting from create-react-app

Solution to inject the script in the head while using create-react-app.
Using craco to override creat-react-app htmlWebpackPlugin options, we can inject the script in the head.
Then in index.js we wait with the initial render of the app until the DOM is loaded. So we can target the root element.