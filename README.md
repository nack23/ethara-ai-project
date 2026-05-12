# Ethara AI - Project & Task Management System

Ethara AI is a full-stack Project and Task Management System built using Node.js, Express.js, MongoDB, EJS, JWT Authentication, and responsive UI design.

The system allows users to:

- Register/Login securely
- Create and manage projects
- Add/remove project members
- Track assigned tasks
- Submit completed tasks
- View analytics dashboard
- Monitor pending and overdue tasks

---

# Features

## Authentication System

- User Signup
- User Login
- JWT Authentication
- Cookie-based session handling
- Protected routes using middleware
- Logout functionality

---

# Project Management

Users can:

- Create projects
- Add project title
- Add project description
- Set due dates
- Set project priority
- View all created projects
- Add members to projects
- Remove members from projects

Only projects where the logged-in user is the admin are shown in the project management section.

---

# Task Management

Users can:

- View projects where they are members
- Check project details
- See project admin
- Submit completed tasks
- Add task completion messages
- Prevent duplicate task submissions

---

# Done Task System

When a user submits a task:

- Task title is stored
- Description is stored
- Priority is stored
- Admin details are stored
- User completion message is stored
- Completed user information is stored
- Submission timestamps are stored

---

# Analytics Dashboard

The analytics dashboard includes:

## Personal Analytics

- Total assigned tasks
- Total completed tasks
- Pending tasks
- Overdue tasks

## Team Analytics

- Tasks assigned per user
- Tasks completed per user
- Recent submitted tasks

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- EJS
- Responsive Design
- Font Awesome

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JWT
- Cookies
- bcryptjs

---

# Folder Structure

```bash
project-root/

│
├── controllers/
│   ├── management/
│   │   ├── addMember.js
│   │   ├── createProject.js
│   │   ├── doneTask.js
│   │   ├── project-management.js
│   │   ├── removeMember.js
│   │   ├── task-management.js
│   │   └── analyticsDashboard.js
│   │
│   ├── dashboard.js
│   ├── home.js
│   ├── login.js
│   ├── login-data.js
│   ├── logout.js
│   ├── signup.js
│   └── signup-data.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── userSchema.js
│   ├── projectSchema.js
│   └── doneTaskSchema.js
│
├── public/
│
├── routers/
│   └── allroutes.js
│
├── views/
│   ├── analyticsDashboard.ejs
│   ├── dashboard.ejs
│   ├── project.ejs
│   ├── taskPage.ejs
│   └── createProject.ejs
│
├── database/
│   └── db.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

---

# Move Into Folder

```bash
cd YOUR_REPOSITORY
```

---

# Install Dependencies

```bash
npm install
```

---

# Create .env File

```env
PORT=3000

MONGODB_URL=YOUR_MONGODB_URL

JWT_SECRET=YOUR_SECRET_KEY
```

---

# Run Project

```bash
nodemon index.js
```

or

```bash
node index.js
```

---

# Routes

## Authentication Routes

| Method | Route | Description |
|---|---|---|
| GET | /signup | Signup Page |
| POST | /signup-data | Create User |
| GET | /login | Login Page |
| POST | /login-data | Login User |
| GET | /logout | Logout User |

---

# Dashboard Routes

| Method | Route |
|---|---|
| GET | /dashboard |

---

# Project Routes

| Method | Route |
|---|---|
| GET | /project-management |
| GET | /create-project |
| POST | /create-project |
| POST | /add-member |
| POST | /remove-member |

---

# Task Routes

| Method | Route |
|---|---|
| GET | /task-management |
| POST | /done-task |

---

# Analytics Routes

| Method | Route |
|---|---|
| GET | /analytics-dashboard |

---

# Security Features

- JWT Authentication
- Protected Routes
- Password Hashing using bcryptjs
- HTTP Only Cookies
- Duplicate task prevention

---

# Future Improvements

- Real-time notifications
- Task status updates
- File uploads
- Chat system
- Email notifications
- Admin approval system
- Team chat
- Role-based access
- Activity tracking

---

# Author

Md Qais Alam

IIT Delhi

---

# License

This project is for educational and development purposes
