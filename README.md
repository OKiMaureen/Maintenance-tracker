# Maintenance-tracker
[![Build Status](https://travis-ci.org/OKiMaureen/Maintenance-tracker.svg?branch=develop)](https://travis-ci.org/OKiMaureen/Maintenance-tracker)
<a href="https://codeclimate.com/github/OKiMaureen/Maintenance-tracker/maintainability"><img src="https://api.codeclimate.com/v1/badges/225b5d371a7731f835b7/maintainability" /></a>
<a href="https://codeclimate.com/github/OKiMaureen/Maintenance-tracker/test_coverage"><img src="https://api.codeclimate.com/v1/badges/225b5d371a7731f835b7/test_coverage" /></a>
<a href='https://coveralls.io/github/OKiMaureen/Maintenance-tracker'><img src='https://coveralls.io/repos/github/OKiMaureen/Maintenance-tracker/badge.svg' alt='Coverage Status' /></a>


## Application Description
Maintenance Tracker App is an application that provides users with the ability to reach out to  operations or repairs department regarding repair or maintenance requests and monitor the  status of their request. 

## UI hosted on gh pages
https://okimaureen.github.io/Maintenance-tracker/ui


## Table of Content
* [Features](#features)
 
 * [Built With](#built-with)
 
 * [Installation](#installation)
 
 * [Test](#test)
 
 * [API End Points](#api-end-points)
 
 * [License](#lincense)

 ## Features

 ### Users
 * Users can create an account and log in.
 * Users should be able to make maintenance or repairs request.
 * User can view all his/her requests 
 
 ### Admin
 * An admin should be able to approve/reject a repair/maintenance request.    
 * An admin should be able to mark request as resolved once it is done
 * An admin should be able to view all maintenance/repairs requests on the application
 * An admin should be able to filter requests  
 
 ## Built With

* NodeJs-EXPRESS

* html

* css

* Postgres

## Installation
1. Clone this repository into your local machine:
```
git clone https://github.com/OKiMaureen/Book-A-Meal
```
2. Install dependencies
```
npm install
```
3. Start the application by running
```
npm start
4. Install postman to test all endpoints on port '8020'


## Test
run test using 'npm test'

## API End Points
GET /users/requests
GET /users/requests/<requestId>
GET /users/requests/<requestId>
PUT /users/requests/<requestId

## LICENSE
This project is licensed under the MIT License - see the LICENSE.md file for details
