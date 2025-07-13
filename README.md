
```markdown
# 🚀 Dockerized Node.js + MongoDB API

A simple REST API built with **Node.js**, **Express**, and **MongoDB**, fully containerized using **Docker** and **Docker Compose**. This project demonstrates containerization, environment variables, networking, and volumes.

---

## 📦 Features

- Node.js + Express backend
- MongoDB database with Mongoose
- Dockerfile for custom image build
- Docker Compose for multi-container setup
- Environment variable support
- Volume persistence for MongoDB

---

## 🧱 Folder Structure

```

docker-node-mongo-app/
├── backend/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── .env
├── docker-compose.yml
├── .gitignore
└── README.md

````

---

## 🛠️ How to Run

```bash
# Clone repo and go into project
git clone https://github.com/Akhil-Jonnalagadda/docker-node-mongo-app.git
cd docker-node-mongo-app

# Build and run using Docker Compose
docker-compose up --build
````

Open: [http://localhost:3000](http://localhost:3000)
You’ll see: `🚀 API is working!`

---

## 🐳 Docker Info

```bash
# Stop containers
CTRL+C

# Remove containers/networks
docker-compose down

# Check containers, volumes, and networks
docker ps -a
docker volume ls
docker network ls
```

---

## 🗂️ Environment Variables

Inside `backend/.env`:

```env
MONGO_URI=mongodb://mongo:27017/userdb
```

---

## 📌 API Endpoints

| Method | Route | Description  |
| ------ | ----- | ------------ |
| GET    | `/`   | Health check |

-






