🧮 Calculator – Made with ❤️ by Arunraj

This is a simple Node.js-based calculator app that performs basic arithmetic operations using query parameters. It is Dockerized and integrated with a Jenkins CI/CD pipeline to automate build, test, push to Docker Hub, and deployment steps.



📦 Features

Add, subtract, multiply, divide using HTTP query parameters



Built with Node.js



Dockerized for easy deployment



Jenkins pipeline for full CI/CD automation



🧠 How It Works

Run the app and visit:



ruby

Copy

Edit

http://localhost:3000/?a=10\&b=5\&op=add

Valid operations:



add



sub



mul



div



📁 Project Structure

bash

Copy

Edit

calculator-app/

├── app.js             # Main application logic

├── package.json       # Node.js dependencies

├── Dockerfile         # Docker build file

└── Jenkinsfile        # Jenkins pipeline configuration

🐳 Docker Instructions

🔨 Build Docker Image

bash

Copy

Edit

docker build -t yourdockerhubusername/calculator-app:latest .

🚀 Run Docker Container

bash

Copy

Edit

docker run -d -p 3000:3000 yourdockerhubusername/calculator-app:latest

🔁 Jenkins CI/CD Pipeline

📄 Jenkinsfile Stages:

Build – Docker image for the app



Test – Placeholder for unit tests



Push – Push Docker image to Docker Hub



Deploy – Run container on Jenkins server



🔐 Jenkins Credentials Required:

dockerhub-token: Docker Hub Personal Access Token (add in Jenkins → Credentials)



🧪 Example Usage

bash

Copy

Edit

\# Addition

http://localhost:3000/?a=10\&b=5\&op=add



\# Subtraction

http://localhost:3000/?a=10\&b=5\&op=sub



\# Multiplication

http://localhost:3000/?a=10\&b=5\&op=mul



\# Division

http://localhost:3000/?a=10\&b=5\&op=div

✅ Prerequisites

Docker



Jenkins (local or cloud)



GitHub repo for source code



Docker Hub account (for pushing image)



🔐 Security Notes

Use Jenkins Secrets to store your Docker PAT.



Never hardcode credentials in the Jenkinsfile.



📌 Future Improvements

Add a front-end UI



Add automated unit tests



Add input validation



Deploy to cloud (OCI, AWS, etc.)



📚 License

This project is for learning and demonstration purposes.





