# Dashboard with Authentication

Live Demo:  
(https://dashboard-with-auth-ruddy.vercel.app)

This project is a production-style React application that demonstrates how real frontend systems handle authentication, protected routes, API calls, and user sessions.

It was built as part of an **API Integration & Authentication** assignment to simulate how a modern frontend interacts with backend services.

---

## What this app does

The application has two main screens:

- **Login Page**  
  Users enter their email and password to sign in.

- **Dashboard**  
  A protected page that is accessible only after login.  
  It fetches and displays data from a public API.

The user can log out at any time, which clears the session and returns them to the login screen.

---

## Demo Login Credentials

Use the following credentials to test the app:

```
Email: shashi@test.com  
Password: 1234
```

---

## Authentication Flow

This project uses **mocked authentication** to simulate a real backend.

When the user logs in:
- A fake token is generated
- The token and expiry time are stored in `localStorage`
- The user is redirected to the dashboard

If the token expires or is removed, the user is automatically logged out and redirected to the login page.

---

## Routing & Protection

- `/login` → Public login page  
- `/dashboard` → Protected dashboard  

If an unauthenticated user tries to access `/dashboard`, they are redirected to `/login`.

This simulates how real applications protect private routes.

---

## Dashboard & API

The dashboard fetches data from:

```
https://jsonplaceholder.typicode.com/posts
```

Features:
- Loading indicator while data is fetched  
- Error message if the API fails  
- Retry button to re-fetch data  

---

## Project Structure

```
src/
 ├── api/
 │    ├── authApi.js       # Mock login logic
 │    ├── axios.js        # Axios instance + interceptor
 │    └── dataApi.js      # Dashboard API calls
 ├── auth/
 │    ├── AuthContext.jsx # Global authentication state
 │    └── ProtectedRoute.jsx
 ├── pages/
 │    ├── Login.jsx
 │    └── Dashboard.jsx
 ├── Router.jsx          # Application routes
 ├── main.jsx            # App bootstrap
```

The code is organized to keep:
- API logic
- Authentication
- UI pages  
clearly separated.

---

## Tech Stack

- React (Vite)
- React Router
- Context API
- Axios (with request interceptor)
- Local Storage

---

## Bonus Features Implemented

- Token-based authentication
- Token expiry handling
- Axios request interceptor for auth tokens
- Protected routes
- Retry handling for failed API calls

---

## Run Locally

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## Author

Shashi Bhushan Kumar
