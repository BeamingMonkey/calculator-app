pipeline {
    agent any

    environment {
        IMAGE_NAME = "ht302/calculator-app"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t "$IMAGE_NAME:$IMAGE_TAG" .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic test...'
                sh 'echo "No automated tests, just a demo."'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKERHUB_TOKEN')]) {
                    sh '''
                        echo "$DOCKERHUB_TOKEN" | docker login -u ht302 --password-stdin
                        docker push "$IMAGE_NAME:$IMAGE_TAG"
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Running the app container...'
                sh 'docker run -d -p 3000:3000 "$IMAGE_NAME:$IMAGE_TAG" || true'
            }
        }
    }
}
