<h1 align="center"> SV Games Demo </h1>

<div align="center" text-align="center">
  
![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-brightgreen)
  
</div>
  
## About
SV Games is a modern day games website at (https://aditi-svgames.netlify.app/). It is based on the public games dataset comprising of over 300 games. The game store supports basic CRUD operations for games to browse and edit if logged in.

## Table of Contents
- [Features implemented :boom:](#features-implemented)
- [How to use](#how-to-use)
- [Installation 🐣](#installation)
- [Starting the app](#starting-the-app)

## Features Implemented
- User login and logout using JWT.
- CRUD operations for Games for authenticated users.
- Pagination for browsing games in an organised manner.
- MongoDB database with proper schemas.
- Frontend deployment on Netlify.
- Backend deployment on Render.

## How to use
1. Go to the website https://aditi-svgames.netlify.app/
2. Sign up using providing basic details like name and phone number(format: +91XXXXXXXXXX).
You can use the following for testing email: test@gmail.com password: Test@123 
3. The authenticated users get an option to edit, add and delete games.
4. Browse through the games list on All Games page in a paginated manner.
5. Search through the entire database of games using the author name or title.

## Installation

Follow these steps to install this project directory:

```
# clone the repo
$ git clone https://github.com/Aditi-Gorde/SVGames.git

# install backend dependencies
$ npm i

# go into frontend directory:
$ cd client

# install frontend dependencies
$ npm i

# in the root directory create a file called .env and put 
REACT_APP_backend_url = "https://aditi-svgames.onrender.com"
```

## Starting the app

Follow these steps to run the app on your local machine:

```
# from the root directory go into app's frontend directory:
$ cd client
  
# launch the app
$ npm run start

```
