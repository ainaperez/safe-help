# SafeHelp: Web-APP to organize collection points during humanitarian crises

Master Thesis
Master's Degree in Development of Websites and Web Applications
Computer Science, Multimedia and Telecommunications

## Abstract

This Master's Final Project Report presents the development of an initial Single Page Application that will act as a connecting point between donation collection points and donors.
With the idea that emerged from the war in Ukraine, the application aims to be an organizing tool for collecting donations during humanitarian crises.

One of the main problems encountered during the war was the lack of a communication system between those who collected donations and those who wanted to offer them. Typically using channels such as social media, organizers found it difficult to update and transmit changes to their pickup point or updates. On the other hand, donors often found themselves without a clear idea of where to donate or what was really needed.

With this application it will be possible to maintain the traceability of the different collection points and will allow to provide to the different users concise and clear information.

The application will be developed with React for the front-end and with firebase as a database.

Keywords: Humanitarian Crisis, Single Page Applications, Donations, Donations, React, Firebase.

## Technologies

The application is divided into two parts: the backend, and the frontend.

For the Backend we will use Firebase, a Google tool that makes it very easy to manage databases and authentications. This app is very simple to use and connect with the front-end, which has greatly reduced the learning curve and programming fears.
Later, in the event that the app grew, it would have to be switched to a paid plan, since daily queries are limited with the free one. Surely a more defined structure should also be implemented. Another option would be to change it to MySQL or MongoDB.

In order to interact with the Firebase databases and functions, Axios will be used.

Git and Netlify will be used to install the application publicly.

Due to the constant changes in the application and the need to continuously scale it, it has been considered appropriate to base the architecture of the application on that of Single Page Application.

React will help eliminate many of the complexities that appear in Single Page Applications.

In order to develop the application in the most efficient way possible, a Build workflow will be created . This workflow will allow us to reduce the code as much as possible and optimize it in order to improve the performance of the application. We must also be able to use ES6 features but compiling them in ES5 for older browsers. Likewise, an autoprefixer CSS is also needed.

In order to achieve all this, the workflow will include the following tools:

- NPM: Dependency Managment Tool.
- Webpack: Bundler to be able to put all the files together.
- Babel: will be the compiler that will transform ES6 to previous versions. Webpack will be configured to use Babel when you make the bundle.

For this, Create-React-App, a tool created by React developers and already automatically includes all of the above tools, will be used.

## Apis

The application incorporates the following APIs:

• Autocomplete Places: This Google API allows you to incorporate inputs where users type in the address and it is autocompleted. Users can select the address, and then the API returns the coordinates. It will be very useful later to be able to use these coordinates and create dynamic maps that will show the results with the different collection points.

• Axios: This API allows you to connect the Firebase backend through requests.

• UI Material: Similar to Bootstrap, this API provides various UI elements such as inputs, buttons, modals, etc., which streamline the functionality and stylization of the APP. Initially it was thought to use Bootstrap, but Material UI offers more functionalities such as the Autocomplete input.
