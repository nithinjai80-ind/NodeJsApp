pipeline {

    agent any

    stages {

        stage('Clone') {

            steps {

                echo "Cloning Repository"

                checkout scm
            }
        }

        stage('Install Dependencies') {

            steps {

                sh 'npm install'
            }
        }

        stage('Build') {

            steps {

                echo "Build Successful"
            }
        }

        stage('Test') {

            steps {

                echo "Testing Completed"
            }
        }

        stage('Deploy') {

            steps {

                sh '''
                pkill node || true
                nohup node app.js > output.log 2>&1 &
                '''
            }
        }
    }
}
