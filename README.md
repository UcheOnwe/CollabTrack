# CollabTrack
A simple team collaboration and task-tracking web application built using **Node.js**, **Express**, **EJS**, and **Bootstrap**.

---

## Overview

CollabTrack is a lightweight collaboration platform where users can:

- Create accounts  
- Log in  
- Create tasks  
- Join groups  
- View and manage tasks  
- Communicate in shared spaces (future feature)


---

## Technologies Used

| Layer | Technology |
|-------|------------|
| **Frontend (UI)** | HTML, CSS, Bootstrap 5, EJS templating |
| **Backend** | Node.js, Express.js |
| **Database** | SQLite (future implementation) |
| **Version Control** | Git & GitHub |
| **Tools & IDE** | Visual Studio Code |

---

## Project Structure
CollabTrack/
│
├── Views/
│ └── home.ejs # Homepage (EJS template)
│
├── node_modules/ # Dependencies (ignored in Git)
│
├── Server.js # Backend server (Express)
├── package.json # Project metadata + dependencies
├── .gitignore # Files ignored by Git
└── README.md # Project documentation



---

## Running the Project

### 1. Install dependencies  

### 2. Start the server  

### 3. Open in browser  


---

## Current Features

###  Rendering homepage using EJS  
- One working template: `home.ejs`  
- Bootstrap integrated (via CDN)

###  Express backend configured  
- Local server running on port **3000**  
- POST route `/echo` to test form submission  

---

##  Features Coming Soon (Next Steps)

These align with the **Implementation Phase** of the Software Engineering cycle:

### 1. Database Integration (SQLite)
- Build user, task, and group tables  
- Create migration/startup scripts  
- Connect Express routes to database queries  

### 2. Authentication System
- User registration  
- Secure password hashing (bcrypt)  
- Sessions & login  

### 3. Task & Group Management
- CRUD functions for tasks  
- Group creation & membership  
- User task dashboard  

### 4. UI Pages (EJS Templates)
- Login page  
- Signup page  
- Dashboard  
- Task view  
- Group management view  

### 5. Input Validation
- Frontend + backend validation  
- Clear error messages  
- Security checks  

---

## Software Engineering Cycle Alignment

### **1️ Specification Phase**  
 Requirements & descriptions completed earlier

### **2️ Design Phase**  
- UI mockups  
- Sequence diagrams  
- Database tables  
- High-level architecture  
(Printed in the Word doc)

### **3️ Implementation Phase P**  
- Server created  
- EJS rendering working  
- Basic POST route created  
- Preparing to integrate DB + logic  

### **4️ Testing Phase**  
Unit tests + integration tests  

### **5️ Deployment Phase**  
Future deployment using Render / Vercel / Azure

---

## Team Members

- **Uchechukwu Onwe** — Backend, UI integration, Database & documentation  
- **Mike Arodiogbu** — Frontend, Database & documentation
- **Jonathan** — Backend, UI integration, Database & documentation





