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
   git clone <repository-url>
   cd shopping-list-api

2. Install dependencies:
    npm install

3. For development with auto-restart:
    npm run dev
