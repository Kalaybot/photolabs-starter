# Photolabs

PhotoLabs is a React-based single-page application. It allows user to browse photos depending on topics available on the app. Adding and removing favourites is also one of the user experience. We built this app on top of a pre-existing API for frontend which is built with React, backend is also provided and is powered by Node.js and Express with PostgreSQL database.

## Features

- Browse a collection of photos
- Add/Remove favourite photos
- Notify users if they add a photo to their favourites
- Filter photos by topics available on the app
- Click photo for enlarge image
- Enlarge photo container also contain similar/related photos

## Screenshots
!["Photolabs Home page"](https://github.com/Kalaybot/photolabs-starter/blob/main/appScreenshot/homePage.png)
!["Photolabs Modal window"](https://github.com/Kalaybot/photolabs-starter/blob/main/appScreenshot/modal.png)

## Setup

Install dependencies with `npm install` on both `/frontend` and `/backend` directories.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm run dev
```
## [Backend] Running Backend Server

Read `backend/readme` for additional setup details.

```sh
cd backend
npm start
```

## API Endpoints

- Get topics: GET /api/topics
- Get photos: GET /api/photos
- Get photos by topics: GET /api/topics/photos/:id

## Dependencies
  ### Frontend
    - React
    - React-dom
    - React-scripts
    - Sass
  ### Backend
    - Express
    - pg
    - dotenv
