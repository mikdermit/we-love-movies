# WeLoveMovies API

[Live application URL](https://we-love-movies-bm.herokuapp.com/movies)

## Technology Used
* Postgres (knex)
* NodeJS
* Express

## Summary
WeLoveMovies is the backend server for a movie theater website. The user has the ability to display movies, theaters, and reviews with and without an id as well as edit and delete reviews.

## Installation Instructions
### Backend
* run ```npm install```
* run ```npm run``` reset to rollback, migrate and seed the database
* run ```npm start``` to start the application

# API
## List theaters
**GET /theaters** 

Returns all theaters.

## List movies
**GET /movies**

Returns all movies.

## List specific movie
**GET /movies/:movieId**

Returns movie matching particular movie id

**Required body:**

|     Param     |     Type    |
|---------------|-------------|
| ```movieId``` | ```(int)``` |


## List reviews for specific movie
**GET /movies/movieId/reviews**

Returns reviews for a particular movie id

**Required body:**

|     Param     |      Type     |
|---------------|---------------|
| ```movieId``` |  ```(int)```  |

## List theaters for specific movie
**GET /movies/movieId/theaters**

Returns movies for a particular movie id

**Required body:**

|     Param     |      Type     |
|---------------|---------------|
| ```movieId``` |  ```(int)```  |


## Update review
**PUT /reviews/:reviewId**

Modifies an existing movie review

**Required body:**

|      Param     |    Type   |
|----------------|-----------|
| ```reviewId``` | ```int``` |


## Delete review
**DELETE /reviews/:reviewId**
Deletes an existing reservation

**Required body:**

|      Param     |    Type   |
|----------------|-----------|
| ```reviewId``` | ```int``` |
