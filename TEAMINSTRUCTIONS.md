# Developer Setup & Team Instructions

This section explains **how teammates should set up the project, run it, and contribute safely** without breaking anything.

---

## 1. Installation Requirements

Install the following before starting:

| Tool | Purpose | Download |
|------|---------|----------|
| **Node.js** | Runs the backend server | https://nodejs.org |
| **Git** | Version control & collaboration | https://git-scm.com |
| **Visual Studio Code** | Code editor | https://code.visualstudio.com |

---

## 2. Cloning the Project

### Step-by-Step

1. Accept your GitHub collaborator invite  
2. Open **VS Code**  
3. Press **Ctrl + Shift + P** (or ⌘ + Shift + P on Mac)  
4. Select **Git: Clone**  
5. Paste the repository URL:

```
https://github.com/UcheOnwe/CollabTrack.git
```

6. Choose a folder to save it  
7. VS Code will ask: **“Open Repository?” → Click Open**

---

## 3. Install Dependencies

After opening the project folder in VS Code, run:

```bash
git pull
npm install
```

---

## 4. Run the Server

Start the backend:

```bash
node server.js
```

Open in browser:

```
http://localhost:3000
```

Login page:

```
http://localhost:3000/login
```

---

## 5. Git Workflow (IMPORTANT)

These rules prevent breaking the shared project.

---

### **Always Pull Before Coding**

```bash
git pull
```

---

### **After Making Your Changes**

```bash
git add .
git commit -m "describe update"
git push
```

---

### **Do NOT do these**

- Don’t delete random files  
- Don’t rename project folders  
- Don’t push broken code  
- Don’t push without pulling first  
- Don’t overwrite someone else's work  

---

## 6. Project Structure Overview

| Folder / File | Purpose |
|---------------|---------|
| `Views/` | EJS templates (frontend pages) |
| `Server.js` | Backend logic + routes |
| `package.json` | Dependencies & metadata |
| `.gitignore` | Files to exclude from Git |

---

## 7. Team Roles

| Member | Responsibility |
|--------|----------------|
| **Uchechukwu Onwe & Jonathan** | Backend logic (routes, controllers, validation) |
| **Michael Arodiogbu, Uchechukwu Onwe & Jonathan** | Frontend (EJS templates, Bootstrap UI) |
| **Uchechukwu Onwe & Jonathan** | Database connection + models |

---

## 8. Contribution Guide

### When adding a new feature:

- Make small, clean commits  
- Test before pushing  
- Communicate major changes  
- Follow naming conventions  
- Keep code well-organized  



