# Habit Tracker

A full-stack Habit Tracker web application that helps users build consistency, track daily/weekly habits, and monitor progress over time.

## Features

* User Authentication (JWT Based)
* Create Habits
* Update Habits
* Delete Habits
* Mark Habit as Completed
* Daily & Weekly Habit Support
* Track Completed Dates
* Duplicate Habit Prevention
* Protected Routes
* RESTful API Architecture

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)

---

## Database Design

### Habit Schema

* Title
* Description
* Category
* Frequency
* User Reference
* Completed Dates
* Timestamps

---

## API Endpoints

### Habit Routes

| Method | Endpoint                 | Description          |
| ------ | ------------------------ | -------------------- |
| POST   | /api/habits/create       | Create new habit     |
| PATCH  | /api/habits/update/:id   | Update habit         |
| DELETE | /api/habits/delete/:id   | Delete habit         |
| PATCH  | /api/habits/complete/:id | Mark habit completed |

---

## Installation

### Clone Repository

```bash
git clone <your-repository-url>
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### Start Server

```bash
npm run dev
```

---

## Future Improvements

* Habit Streaks
* Analytics Dashboard
* Calendar View
* Reminder Notifications
* Dark Mode
* Progress Charts
* Mobile Responsive UI

---

## Learning Outcomes

This project helped me learn:

* REST API Development
* Authentication & Authorization
* MongoDB Relationships
* Mongoose Schema Design
* CRUD Operations
* Backend Validation
* Production-Level Backend Practices

---

## Author

Himanshu Binwal
