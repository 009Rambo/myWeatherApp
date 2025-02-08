
# 🌦️ Weather App

A simple weather application that fetches real-time weather data from OpenWeather API and displays it on a frontend web page. The app is built using a **Flask backend**, a **JavaScript-based frontend**, and **Docker** for containerization.

---

## 🚀 Features

- Fetches real-time weather data from OpenWeather API.
- Frontend built with **HTML, CSS, JavaScript**, and served via **NGINX**.
- Backend built using **Flask (Python)**.
- Containerized using **Docker & Docker Compose** for easy deployment.
- Can be deployed on **Pouta Cloud**, **AWS**, **DigitalOcean**, or any Linux server.

---

## 🏗️ Project Structure

myWeatherApp/
│── backend/ 
│ ├── app.py # Flask API handling weather requests
  ├── requirements.txt # Dependencies for Python backend
│ ├── Dockerfile # Docker setup for backend
│── frontend/ 
│ ├── index.html # Frontend HTML 
│ ├── script.js # Fetches weather data from backend
│ ├── styles.css # Styling for 
│ ├── nginx.conf # NGINX reverse proxy configuration
│ ├── Dockerfile # Docker setup for frontend 
│── docker-compose.yml # Docker Compose for multi-container setup
│── README.md # Documentation


---

## 📦 Prerequisites

Before running the app, install:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)
- **OpenWeather API Key**: Get your API key from [OpenWeather](https://openweathermap.org/api)

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/myWeatherApp.git
cd myWeatherApp
```bash

### 2️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:
```bash

OPENWEATHER_API_KEY=your_api_key_here

### 3️⃣ Build and Run Containers
```bash
sudo docker-compose up -d --build
### 4️⃣ Check Running Containers
```bash
sudo docker ps
### 5️⃣ Access the App
Open in browser: http://localhost
API Test:
```bash
curl http://localhost/api/weather?city=Helsinki
## 🏗️ Deployment (Pouta Cloud / Dedicated Server)
### 1️⃣ Set Up Pouta VM
Log into the Pouta server:
```bash
ssh ramesh@your_pouta_server_ip
### Update & install Docker:
```bash
sudo apt update && sudo apt install -y docker.io docker-compose
### 2️⃣ Deploy the App
```bash
git clone https://github.com/yourusername/myWeatherApp.git
cd myWeatherApp
sudo docker-compose up -d --build
### 3️⃣ Configure Firewall
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
### 4️⃣ Access the App on Pouta Public IP
```bash
http://your_pouta_server_ip
## ⚙️ Technical Overview
🔹 Frontend (NGINX + JavaScript)
The frontend is a static site served by NGINX.
Uses JavaScript (script.js) to fetch weather data from the backend.
Configured using nginx.conf to route API calls.
🔹 Backend (Flask API)
The backend is a Flask API running on Python.
Fetches weather data from OpenWeather API.
Exposed on port 4000 and connected to the frontend via NGINX.
🔹 Docker & Docker Compose
The app is containerized using Docker.
### docker-compose.yml defines the multi-container setup:
```bash
services:
  backend:
    build: ./backend
    ports:
      - "4000:4000"
    networks:
      - myweatherapp_network

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - myweatherapp_network

networks:
  myweatherapp_network:
    driver: bridge
## 🛠️ Managing the App
🛑 Stop the Containers
```bash
sudo docker-compose down
### 🔄 Restart the App
```bash
sudo docker-compose up -d
### 🐳 View Logs
```bash
sudo docker-compose logs -f
### 🔄 Rebuild After Code Changes
```bash
sudo docker-compose up -d --build
### 🔒 Security Best Practices
Use .env file for sensitive API keys.
### Enable HTTPS with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
## 📝 Future Enhancements
✅ Add unit tests with pytest.
✅ Implement CI/CD pipeline using GitHub Actions.
✅ Deploy with Kubernetes instead of Docker Compose.
## 🤝 Contributing
Fork the repository.
Create a new branch (git checkout -b feature-new).
Commit changes (git commit -m 'Added new feature').
Push to GitHub (git push origin feature-new).
Open a Pull Request.
## 💡 Troubleshooting
Issue	Solution
Backend not responding	Run docker logs myweatherapp_backend_1
Frontend fails to connect to API	Check nginx.conf proxy settings
API key not working	Update .env and restart app
## 📜 License
This project is licensed under the MIT License.

## 👨‍💻 Author
Developed by Ramesh & Team 🚀
For any issues, contact: pandey.ramesh009@gmail.com


