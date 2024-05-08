#  Online Bookstore API Specifications

This document outlines the API endpoints, request/response formats, and authentication requirements for the Online Bookstore API.

## Environment

To set up the environment for running the Online Bookstore API, follow these steps:

1. Install Node.js if not already installed on your system.
2. Create a new directory for the project.
3. Navigate to the project directory in your terminal.
4. Initialize a new Node.js project by running the command:
`npm init -y`

5. Install the required dependencies:
`npm install json-server json-server-auth`

## Endpoints

## 1. User Registration

Method: POST
Endpoint: `/users/register`
Description: Register a new user account.
Request Body:
{
  "username": "string",
  "email": "string",
  "password": "string"
}

Response Body:
{
  "Id": "string",
  "username": "string",
  "email": "string",
  "password": "string"
}


## 2. User Login

Method: POST
Endpoint: `/users/login`
Description: Log in to an existing user account.
Request Body:
{
  "email": "string",
  "password": "string"
}

Response Body:
{
  "userId": "string",
  "username": "string",
  "email": "string",
  "token": "string"
}


## 3. Search Books

Method: GET
Endpoint: `/books``
Description: Search for books by query.
Query Parameters:
`search`: The search query
Response Body:
{
  "results": ["string", "string", "string"]
}


## 4. Add to Cart

Method: POST
Endpoint: `/users/:userId/cart`
Description: Add a book to the user's cart.
Path Parameters:
`userId`: The ID of the user
Request Body:
{
  "bookId": "string",
  "quantity": "number"
}

## 5. Checkout

Method: POST
Endpoint: `/users/:userId/checkout`
Description: Complete the checkout process.
Path Parameters:
`userId`: The ID of the user
Response Body:
{
  "message": "string"
}


## Authentication Requirements

User Registration: No authentication required.
User Login: No authentication required.
Search Books: No authentication required.
Add to Cart: User authentication required.
Checkout: User authentication required.

To start the JSON server with authentication enabled, run the following command:
`json-server-auth mock-apis/db.json --routes mock-apis/route.json`


Replace `db.json` with the name of your JSON database file and routes.json with the name of your `routes` file if necessary.
