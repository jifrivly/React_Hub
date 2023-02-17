pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID = "$AWS_ACCESS_KEY_ID"
        AWS_SECRET_ACCESS_KEY = "$AWS_SECRET_ACCESS_KEY"
        AWS_SESSION_TOKEN = "$AWS_SESSION_TOKEN"
    }
    stages {
        stage('Build') {
            steps {
                nodejs('NodeJS 16.15.0') {
                    sh 'npm i'
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh "aws s3 cp ${WORKSPACE}/build/ s3://jifri-sample-project/ --recursive"
            }
        }
    }
}
