# Getting Started with TGUI Example

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# App Structure

## The main part of project is in /src folder.


## /index.ts - app starter component


## /router
Files associated with routing

### /router/AppRouter.tsx - component that initialize routing
### /router/path.tsx - route paths and array (routes) which initialize routing 


## /pages
Page components


## /components
All components 

### /components/App - Main component
### /components/layout - Layout component
### /components/BottomNavbar - Bottom menu


## /store
Files associated with redux store and api requests 

### /store/store.ts - redux store initializer
### /store/tools/fetchTools.ts - variables and functions associated with api requests
* baseUrl - backend server url
* baseConfig - config that using on every request
* ENDPOINTS - api endpoints
* fetchRequest - function which send api request (parameters - url(required), method(def. "GET"), body(def. null) config(def. baseConfig))


## /providers/TransitionProvider.tsx
Provider component for appear and hide components with animation

#### props
* style: enum(TransitionStyleTypes) - animation style
* inProp: boolean - state to show or hide component 
* className - class for wrapper element
* duration - animation duration (def. 300) 


## /models
Type annotation models

## /hooks
Custom hooks

### /hooks/redux.ts - Typified useDispatch and useSelector 
### /hooks/useTelegram.ts - returns telegram WebApp object 
### /hooks/useImageLoader.ts - Loads all images on start app 


## /utils/lsProps.ts
localStorage (CloudStorage) properties

## /helpers/
helper functions

### /helpers/formatNumber.ts
function that set spaces between big numbers

### /helpers/localStorage.ts
functions to set and get values from/in localStorage (CloudStorage) 

## /assets
Media files, and their URLs  

### /assets/images/ - Image files
### /assets/fonts/ - css fonts
### /assets/icons - Icon images
### /assets/lotties - Lottie files

### /assets/images.ts - image paths
### /assets/lotties.ts - lottie paths
### /assets/svg.ts - svg ids

### /assets/svgSprite.tsx - component for rendering svg images


## /styles
SCSS files


## Constants in files

### /components/FriendsPage/FriendsWrapper/FriendsWrapper.tsx
BOT_URL - share bot url
SHARE_TEXT - shate text

