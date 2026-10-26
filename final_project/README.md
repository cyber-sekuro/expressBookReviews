# Book Review Application — Node.js & Express

A RESTful backend application developed as part of the **IBM Full Stack Software Developer Professional Certificate** on Coursera.

This project demonstrates server-side application development using Node.js, Express.js, REST APIs, JWT authentication, session management, and asynchronous JavaScript with Axios.

The application allows users to browse books, search by ISBN, author or title, register an account, log in, and manage their own book reviews.

## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript server-side runtime |
| Express.js | REST API development and routing |
| JavaScript | Application logic and asynchronous programming |
| JSON Web Token (JWT) | Authentication and authorization |
| express-session | Session management |
| Axios | Promise-based HTTP requests |
| npm | Package and dependency management |
| Git & GitHub | Version control and source code management |

## Features

### Public API

- Retrieve all available books.
- Search for books using ISBN.
- Search for books by author.
- Search for books by title.
- Retrieve book reviews.
- Register new users.

### Authenticated API

- Log in using registered credentials.
- Generate and verify JWT access tokens.
- Add book reviews.
- Modify existing reviews.
- Delete reviews belonging to the authenticated user.

### Asynchronous JavaScript

Implemented four asynchronous functions using Axios and `async/await`:

- `getAllBooksAsync()`
- `getBookByISBNAsync(isbn)`
- `getBooksByAuthorAsync(author)`
- `getBooksByTitleAsync(title)`

These functions make HTTP requests to the application's REST API without blocking the Node.js event loop.

## Project Structure

```text
expressBookReviews/
├── final_project/
│   ├── router/
│   │   ├── auth_users.js
│   │   ├── booksdb.js
│   │   └── general.js
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── test_async.js
│   └── README.md
├── README.md
└── .gitignore
```

## Installation

**Prerequisites:** Node.js, npm, and Git.

Clone the repository:

```bash
git clone https://github.com/cyber-sekuro/expressBookReviews.git
cd expressBookReviews/final_project
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
node index.js
```

The application runs on port `5000`.

For local testing, visit:

```text
http://localhost:5000/
```

## REST API Endpoints

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| GET | `/` | Retrieve all books | Public |
| GET | `/isbn/:isbn` | Retrieve a book by ISBN | Public |
| GET | `/author/:author` | Search books by author | Public |
| GET | `/title/:title` | Search books by title | Public |
| GET | `/review/:isbn` | Retrieve book reviews | Public |
| POST | `/register` | Register a new user | Public |
| POST | `/customer/login` | Log in | Registered user |
| PUT | `/customer/auth/review/:isbn` | Add or modify a review | Authenticated |
| DELETE | `/customer/auth/review/:isbn` | Delete own review | Authenticated |

## API Examples

### Retrieve All Books

```bash
curl http://localhost:5000/
```

### Retrieve Book by ISBN

```bash
curl http://localhost:5000/isbn/8
```

### Retrieve Books by Author

```bash
curl "http://localhost:5000/author/Jane%20Austen"
```

### Retrieve Books by Title

```bash
curl "http://localhost:5000/title/Pride%20and%20Prejudice"
```

### Retrieve Book Reviews

```bash
curl http://localhost:5000/review/8
```

### Register a User

```bash
curl -X POST http://localhost:5000/register \
  -H "Content-Type: application/json" \
  -d '{"username":"demo","password":"example-only"}'
```

### Login

```bash
curl -X POST http://localhost:5000/customer/login \
  -H "Content-Type: application/json" \
  -d '{"username":"demo","password":"example-only"}' \
  -c cookies.txt
```

The saved session cookie is required for authenticated review operations. It must be kept private.

## Asynchronous API Testing

The project includes `test_async.js`, which verifies the four Axios-based retrieval functions.

Run the Express server first, then execute:

```bash
node test_async.js
```

The test suite checks retrieval of all books, ISBN lookup, author search, and title search.

All four tests passed during local development.

## Security Considerations

This application is intended for **educational use only** and is not production-ready.

The coursework implementation has the following limitations:

- User accounts and reviews are stored in memory.
- Passwords are not hashed.
- JWT and session secrets are hardcoded.
- Authentication sessions are not persisted after restarting the application.
- There is no production-grade database, rate limiting, or deployment configuration.

The project dependencies were subsequently updated to address reported npm vulnerabilities. A local `npm audit` check reported zero known vulnerabilities after the updates, but this does not establish overall application security.

Do not deploy this application for real users without improving its authentication, secret management, session configuration, and data persistence.

## Learning Outcomes

Through this project, I gained practical experience in:

1. Building RESTful APIs with Express.js.
2. Implementing HTTP GET, POST, PUT, and DELETE methods.
3. Handling URL parameters and JSON request bodies.
4. Implementing JWT-based authentication and session management.
5. Applying `async/await` and Promise-based HTTP requests using Axios.
6. Testing API endpoints using cURL.
7. Managing dependencies with npm.
8. Using Git and GitHub for version control.
9. Performing basic dependency vulnerability audits.
10. Debugging backend applications using VS Code and Node.js.

## Project Attribution

**Original starter repository:** [IBM Developer Skills Network — expressBookReviews](https://github.com/ibm-developer-skills-network/expressBookReviews)

This repository is a fork of IBM's educational starter project. The API implementations, authentication and review management logic, asynchronous Axios functions, and local tests were completed as part of the coursework, based on the supplied starter structure.

**Course:** Developing Back-End Apps with Node.js and Express

**Learning program:** IBM Full Stack Software Developer Professional Certificate

**Platform:** Coursera

## Author

Developed by [cyber-sekuro](https://github.com/cyber-sekuro).

## License

Refer to the [LICENSE](LICENSE) file inherited from the original repository.