# Pub/Sub System with Redis and PostgreSQL

This is a **Pub/Sub system** built using **NestJS, Redis, and PostgreSQL**. The system consists of:
- A **receiver service** that handles API requests and publishes events.
- A **listener service** that listens to events and inserts data into a second table.
- A **Redis instance** for message passing.
- A **PostgreSQL database** for persistence.

This project is **Dockerized** for easy setup and deployment.

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone git@github.com:Abhishek-Sharma-1999/Pub-Sub-using-Redis.git
```

### **2️⃣ Configure Environment Variables**
Create a `.env` file in the project root :

Update the `.env` file with your values:
```
DATABASE_TYPE=postgres
DATABASE_SERVER=postgres
DATABASE_PORT=5432
DATABASE_NAME=pubsub_db
DATABASE_USER=your_db_user
DATABASE_PASS=your_db_password
DATABASE_SYNCHRONIZE=true
```

---

## 🐳 Running the Project with Docker

### **3️⃣ Build and Start Containers**
Run the following command:
```sh
docker-compose up --build
```
This will:
- Set up **Redis** and **PostgreSQL** inside Docker.
- Build and start the **receiver** and **listener services**.

### **4️⃣ Accessing Services**
- The POST API will be available at **`http://localhost:3000/receiver`**
- PostgreSQL database will be running inside the container.
- Redis will be available inside the container.

### **5️⃣ Stopping the Containers**
To stop running containers:
```sh
docker-compose down
```

---

## 🛠 Development (Without Docker)

### **1️⃣ Install Dependencies**
```sh
npm install
```

### **2️⃣ Run the PostgreSQL & Redis Locally**
Ensure you have **PostgreSQL** and **Redis** installed locally and update `.env` accordingly.

### **3️⃣ Start the Application**
```sh
npm run start:dev
```

---

## 🏗 Project Structure
```
/src
├── database/             # Database module
│   ├── entities/         # Entity definitions (tables)
│   ├── repositories/     # Database repositories
│   ├── data-source.ts    # Database connection setup
│   ├── database.module.ts
│
├── receiver/             # Receiver service (API handling, event publishing)
│   ├── dto/              # DTOs for request validation
│   ├── receiver.controller.ts
│   ├── receiver.module.ts
│   ├── receiver.service.ts
│
├── listener/             # Listener service (event consumption, database insertion)
│   ├── listener.module.ts
│   ├── listener.service.ts
│
├── redis/                # Redis setup and service
│
├── main.ts               # Application entry point
└── app.module.ts         # Root module
```

---
## Video of the Implementation in the local set-up

https://drive.google.com/file/d/1Fl6GivdYdSMC3F_xvJIxWkWDIpsyck9F/view?usp=sharing


## sh: Nest not found(Docker issue)
https://drive.google.com/file/d/1PzkbRBbSOe4up865d8_nGSIwu2l5KHNC/view?usp=drive_link
