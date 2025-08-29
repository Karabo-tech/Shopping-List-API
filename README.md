# Shopping List API

A RESTful API for managing a shopping list, built with **Node.js**, **TypeScript**, and **Express**.  
This application allows users to add, view, update, and delete items in a shopping list, with in-memory storage for simplicity.  
The API handles CRUD operations and includes input validation and consistent error handling.

---

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
  - [POST /items](#post-items)
  - [GET /items](#get-items)
  - [GET /items/:id](#get-itemsid)
  - [PUT /items/:id](#put-itemsid)
  - [DELETE /items/:id](#delete-itemsid)
- [Error Handling](#error-handling)
- [Testing with Postman](#testing-with-postman)
- [Troubleshooting](#troubleshooting)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features
- Add items to a shopping list with a name and quantity.
- View all items or a single item by ID.
- Update item details (name, quantity, purchased status).
- Delete items from the list.
- Input validation for all requests.
- Consistent JSON responses with error handling.
- In-memory storage (data resets on server restart).

---

## Technologies
- **Node.js** – JavaScript runtime for server-side development.
- **TypeScript** – Adds static typing to JavaScript for better maintainability.
- **Express** – Web framework for building the REST API.
- **UUID** – Generates unique IDs for items.
- **CORS** – Enables cross-origin requests for front-end integration.
- **Postman** – Recommended for testing API endpoints.

---

## Project Setup

### Prerequisites
- **Node.js** (v16 or higher) → [Download here](https://nodejs.org/)
- **Postman** → [Download here](https://www.postman.com/downloads/) (for testing)
- A code editor (e.g., **VS Code**)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Karabo-tech/Shopping-List-API.git
   cd shopping-list-api

2. Install dependencies:
   ```bash
    npm install

3. For development with auto-restart:
   ```bash
    npm run dev

Base URL
http://localhost:3000

Endpoints
1. Add a New Item

POST /items

Request Body (JSON):

{
  "name": "Milk",
  "quantity": 2
}


Responses:

201 Created

{
  "id": "uuid",
  "name": "Milk",
  "quantity": 2,
  "purchased": false
}


400 Bad Request

{ "error": "Name and valid quantity are required" }

2. Get All Items

GET /items

Response:

200 OK

[
  {
    "id": "uuid",
    "name": "Milk",
    "quantity": 2,
    "purchased": false
  },
  {
    "id": "uuid",
    "name": "Eggs",
    "quantity": 12,
    "purchased": false
  }
]

3. Get Item by ID

GET /items/:id

Example: /items/123e4567-e89b-12d3-a456-426614174000

Responses:

200 OK

{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "Milk",
  "quantity": 2,
  "purchased": false
}


404 Not Found

{ "error": "Item not found" }

4. Update Item

PUT /items/:id

Request Body (JSON):

{
  "name": "Bread",
  "quantity": 3,
  "purchased": true
}


Responses:

200 OK

{
  "id": "uuid",
  "name": "Bread",
  "quantity": 3,
  "purchased": true
}


400 Bad Request

{ "error": "Name and valid quantity are required" }


404 Not Found

{ "error": "Item not found" }

5. Delete Item

DELETE /items/:id

Responses:

200 OK

{ "message": "Item deleted successfully" }


404 Not Found

{ "error": "Item not found" }
