E-Learning Mobile Application

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://playprosite.itside.co/)

E-Learning Mobile Application,
# Project description:
This project aims to provide a comprehensive e-learning platform accessible through mobile devices. The application targets learners of all ages and backgrounds, offering a diverse range of courses covering various subjects and skills. The primary goal is to facilitate convenient, flexible, and engaging learning experiences, empowering users to enhance their knowledge and capabilities anytime, anywhere.
## Skills and deliverables
React Native
TypeScript
Redux
RTK query

# Features
module Home
module Chat
module progression 
module custom search course
module course details
module profile
Tech
Dillinger uses a number of open source projects to work properly:

React Native - Version 0.74!
Redux - state management global.
i18n translate text
RTK Query RTK Query is provided as an optional addon within the @reduxjs/toolkit package. It is purpose-built to solve the use case of data fetching and caching, supplying a compact, but powerful toolset to define an API interface layer for your app.
UI Kitten - UI Kitten is a customizable React Native UI Library based on Eva Design System specifications, with 30+ UI components,
node.js - version 18.18.0
Installation
Playpro requires Node.js v18+ to run.

clone the repository
# using SSH
$ git clone git@github.com:souhailtourjmen/E_Learning.git

# OR using HTTPS
git clone https://github.com/souhailtourjmen/E_Learning.git
Create files
.env
.env.prod
ENVIRONMENT VARIABLES
- API_URL=""
Install the dependencies and devDependencies and start the server.

# using npm
npm i

# OR using Yarn
yarn 
Step 1: Start the Metro Server
First, you will need to start Metro, the JavaScript bundler that ships with React Native.

To start Metro, run the following command from the root of your React Native project:

# using npm
npm start

# OR using Yarn
yarn start
Step 2: Start your Application
Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project. Run the following command to start your Android or iOS app:

For Android
# using npm
npm run android

# OR using Yarn
yarn android
For iOS
# using npm
npm run ios

# OR using Yarn
yarn ios
If everything is set up correctly, you should see your new app running in your Android Emulator or iOS Simulator shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

For production environments...
# using npm
npm run build-prod

# OR using Yarn
yarn build-prod
For clean server & gradlew...
# using npm
npm run dev

# OR using Yarn
yarn dev
Plugins
Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

Plugin	README
Development
Want to contribute? Great!

Playpro uses MVVM patern for a clear separation of concerns, making it easier to develop, test, and maintain software applications. NOTE: If you don't know what MVVM is, you can either google it or read along anyway. Make a change in your file and instantaneously see your updates!

Playpro Project Tree
Project Root
📁 android: Android project files.
📁 ios: iOS project files.
📁 src:source code .
📁 src:assets: Static assets (images, fonts, etc.).
📁 src:assets:img: Image assets.
📁 src:assets:fonts: Custom fonts.
📁 src:components: Reusable components.
📁 src:config: Configuration files.
📁 src:constants: Custom constants file.
📁 src:helpers: Custom helpers functions.
📁 src:hooks: Custom hooks for all hooks project.
📁 /language: language file for all languages files in the project
english.json: Custom language file for english
french.json: Custom language file for French .
📁 src:models: Data models and view models.
📁 src:modules: Definition of the Module
📁 src:navigation: Navigation setup..
📁 src:navigation:viewController : View controller for navigation
📁 src:screens: Application screens.
📁 src:storage: AsyncStorage
📁 src:store: sore redux global state management.
📁 src:store:api:
📁 src:store:services:
📁 src:store:slices: index.ts: Index store redux global state management
📁 src:types: Global types .index.ts: Definition types
📁 src:utils: Global functions for consumers webServices .
📄 package.tson: Project dependencies and scripts.
📄 README.md: Project documentation.
📄 app.json: App configuration.
📄 App.ts: Main application entry point.
Building for source
For production release :
For generating Apk :
# using npm
npm run release 

# OR using Yarn
yarn release
